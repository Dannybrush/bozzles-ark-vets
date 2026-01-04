/**
 * Opening Hours Utilities
 * Handles business hours logic with UK timezone support
 */

export interface OpeningHours {
  open: number;  // minutes from midnight (0-1439)
  close: number; // minutes from midnight (0-1439)
}

export interface WeeklySchedule {
  sunday: OpeningHours;
  monday: OpeningHours;
  tuesday: OpeningHours;
  wednesday: OpeningHours;
  thursday: OpeningHours;
  friday: OpeningHours;
  saturday: OpeningHours;
}

export interface OpeningHoursConfig {
  schedule: WeeklySchedule;
  timezone: string;
  emergencyAvailable: boolean;
}

/**
 * Default opening hours for Bozzles Ark Vets
 */
export const defaultSchedule: WeeklySchedule = {
  sunday: { open: 10 * 60, close: 14 * 60 },      // 10am - 2pm
  monday: { open: 9 * 60, close: 19 * 60 },       // 9am - 7pm
  tuesday: { open: 9 * 60, close: 19 * 60 },      // 9am - 7pm
  wednesday: { open: 9 * 60, close: 19 * 60 },    // 9am - 7pm
  thursday: { open: 9 * 60, close: 19 * 60 },     // 9am - 7pm
  friday: { open: 9 * 60, close: 19 * 60 },       // 9am - 7pm
  saturday: { open: 10 * 60, close: 17 * 60 }     // 10am - 5pm
};

/**
 * Get UK time regardless of user's location
 */
export function getUKTime(date: Date = new Date()): Date {
  try {
    const ukTimeString = date.toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    
    // Parse the UK time string (format: DD/MM/YYYY, HH:MM:SS)
    const [datePart, timePart] = ukTimeString.split(', ');
    const [day, month, year] = datePart.split('/');
    const [hours, minutes, seconds] = timePart.split(':');
    
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes),
      parseInt(seconds)
    );
  } catch (error) {
    console.error('Error getting UK time:', error);
    return date;
  }
}

/**
 * Convert time to minutes from midnight
 */
export function timeToMinutes(hours: number, minutes: number): number {
  return hours * 60 + minutes;
}

/**
 * Convert minutes from midnight to time string
 */
export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours >= 12 ? 'pm' : 'am';
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${mins.toString().padStart(2, '0')}${period}`;
}

/**
 * Get the day name from day number
 */
export function getDayName(dayNumber: number): keyof WeeklySchedule {
  const days: (keyof WeeklySchedule)[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];
  return days[dayNumber];
}

/**
 * Check if current time is within opening hours
 */
export function isOpen(
  schedule: WeeklySchedule = defaultSchedule,
  date: Date = new Date()
): boolean {
  try {
    const ukTime = getUKTime(date);
    const dayName = getDayName(ukTime.getDay());
    const currentTimeInMinutes = timeToMinutes(
      ukTime.getHours(),
      ukTime.getMinutes()
    );
    
    const todaySchedule = schedule[dayName];
    
    // Check if current time is within opening hours
    return (
      currentTimeInMinutes >= todaySchedule.open &&
      currentTimeInMinutes < todaySchedule.close
    );
  } catch (error) {
    console.error('Error checking if open:', error);
    // Default to closed if there's an error
    return false;
  }
}

/**
 * Check if current time is after hours (inverse of isOpen)
 */
export function isAfterHours(
  schedule: WeeklySchedule = defaultSchedule,
  date: Date = new Date()
): boolean {
  return !isOpen(schedule, date);
}

/**
 * Get next opening time
 */
export function getNextOpeningTime(
  schedule: WeeklySchedule = defaultSchedule,
  date: Date = new Date()
): { day: string; time: string } | null {
  try {
    const ukTime = getUKTime(date);
    let checkDate = new Date(ukTime);
    
    // Check next 7 days
    for (let i = 0; i < 7; i++) {
      const dayName = getDayName(checkDate.getDay());
      const todaySchedule = schedule[dayName];
      const currentTimeInMinutes = timeToMinutes(
        checkDate.getHours(),
        checkDate.getMinutes()
      );
      
      // If it's today and before opening time
      if (i === 0 && currentTimeInMinutes < todaySchedule.open) {
        return {
          day: dayName.charAt(0).toUpperCase() + dayName.slice(1),
          time: minutesToTime(todaySchedule.open)
        };
      }
      
      // Check next day
      checkDate.setDate(checkDate.getDate() + 1);
      checkDate.setHours(0, 0, 0, 0);
      
      const nextDayName = getDayName(checkDate.getDay());
      const nextDaySchedule = schedule[nextDayName];
      
      return {
        day: nextDayName.charAt(0).toUpperCase() + nextDayName.slice(1),
        time: minutesToTime(nextDaySchedule.open)
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error getting next opening time:', error);
    return null;
  }
}

/**
 * Get formatted opening hours string for a specific day
 */
export function getOpeningHoursString(
  dayName: keyof WeeklySchedule,
  schedule: WeeklySchedule = defaultSchedule
): string {
  const hours = schedule[dayName];
  return `${minutesToTime(hours.open)} - ${minutesToTime(hours.close)}`;
}

/**
 * Get all opening hours as formatted strings
 */
export function getAllOpeningHours(
  schedule: WeeklySchedule = defaultSchedule
): Record<keyof WeeklySchedule, string> {
  return {
    sunday: getOpeningHoursString('sunday', schedule),
    monday: getOpeningHoursString('monday', schedule),
    tuesday: getOpeningHoursString('tuesday', schedule),
    wednesday: getOpeningHoursString('wednesday', schedule),
    thursday: getOpeningHoursString('thursday', schedule),
    friday: getOpeningHoursString('friday', schedule),
    saturday: getOpeningHoursString('saturday', schedule)
  };
}

/**
 * Format opening hours for display (condensed format)
 */
export function formatOpeningHoursCondensed(
  schedule: WeeklySchedule = defaultSchedule
): string {
  const allHours = getAllOpeningHours(schedule);
  
  // Group consecutive days with same hours
  const groups: string[] = [];
  let currentGroup: { days: string[]; hours: string } | null = null;
  
  const days: (keyof WeeklySchedule)[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  
  for (const day of days) {
    const hours = allHours[day];
    
    if (!currentGroup) {
      currentGroup = { days: [day], hours };
    } else if (currentGroup.hours === hours) {
      currentGroup.days.push(day);
    } else {
      groups.push(formatGroup(currentGroup));
      currentGroup = { days: [day], hours };
    }
  }
  
  if (currentGroup) {
    groups.push(formatGroup(currentGroup));
  }
  
  return groups.join(', ');
}

/**
 * Helper to format a group of days with same hours
 */
function formatGroup(group: { days: string[]; hours: string }): string {
  const { days, hours } = group;
  
  if (days.length === 1) {
    return `${capitalize(days[0])} ${hours}`;
  }
  
  // Check if consecutive
  const dayOrder: (keyof WeeklySchedule)[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  
  const indices = days.map(d => dayOrder.indexOf(d as keyof WeeklySchedule));
  const isConsecutive = indices.every((val, i, arr) => 
    i === 0 || val === arr[i - 1] + 1
  );
  
  if (isConsecutive) {
    return `${capitalize(days[0])}-${capitalize(days[days.length - 1])} ${hours}`;
  }
  
  return days.map(capitalize).join(', ') + ` ${hours}`;
}

/**
 * Capitalize first letter
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}