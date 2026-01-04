/**
 * Tests for Opening Hours Utilities
 */

import { describe, it, expect } from 'vitest';
import {
  isOpen,
  isAfterHours,
  timeToMinutes,
  minutesToTime,
  getOpeningHoursString,
  formatOpeningHoursCondensed,
  defaultSchedule
} from './opening-hours';

describe('Opening Hours Utilities', () => {
  describe('timeToMinutes', () => {
    it('should convert midnight to 0 minutes', () => {
      expect(timeToMinutes(0, 0)).toBe(0);
    });
    
    it('should convert 9:00am to 540 minutes', () => {
      expect(timeToMinutes(9, 0)).toBe(540);
    });
    
    it('should convert 7:00pm to 1140 minutes', () => {
      expect(timeToMinutes(19, 0)).toBe(1140);
    });
    
    it('should handle minutes correctly', () => {
      expect(timeToMinutes(9, 30)).toBe(570);
    });
  });
  
  describe('minutesToTime', () => {
    it('should convert 0 minutes to 12:00am', () => {
      expect(minutesToTime(0)).toBe('12:00am');
    });
    
    it('should convert 540 minutes to 9:00am', () => {
      expect(minutesToTime(540)).toBe('9:00am');
    });
    
    it('should convert 1140 minutes to 7:00pm', () => {
      expect(minutesToTime(1140)).toBe('7:00pm');
    });
    
    it('should convert 720 minutes to 12:00pm', () => {
      expect(minutesToTime(720)).toBe('12:00pm');
    });
    
    it('should handle minutes correctly', () => {
      expect(minutesToTime(570)).toBe('9:30am');
    });
  });
  
  describe('isOpen', () => {
    it('should return true during weekday opening hours', () => {
      // Tuesday at 10:00am
      const testDate = new Date('2025-01-07T10:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(true);
    });
    
    it('should return false before weekday opening', () => {
      // Tuesday at 8:00am
      const testDate = new Date('2025-01-07T08:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(false);
    });
    
    it('should return false after weekday closing', () => {
      // Tuesday at 8:00pm
      const testDate = new Date('2025-01-07T20:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(false);
    });
    
    it('should return true at exactly opening time', () => {
      // Tuesday at 9:00am
      const testDate = new Date('2025-01-07T09:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(true);
    });
    
    it('should return false at exactly closing time', () => {
      // Tuesday at 7:00pm (19:00)
      const testDate = new Date('2025-01-07T19:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(false);
    });
    
    it('should handle Saturday hours correctly', () => {
      // Saturday at 11:00am
      const testDate = new Date('2025-01-11T11:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(true);
      
      // Saturday at 6:00pm
      const testDateClosed = new Date('2025-01-11T18:00:00');
      expect(isOpen(defaultSchedule, testDateClosed)).toBe(false);
    });
    
    it('should handle Sunday hours correctly', () => {
      // Sunday at 11:00am
      const testDate = new Date('2025-01-12T11:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(true);
      
      // Sunday at 3:00pm
      const testDateClosed = new Date('2025-01-12T15:00:00');
      expect(isOpen(defaultSchedule, testDateClosed)).toBe(false);
    });
  });
  
  describe('isAfterHours', () => {
    it('should return false during opening hours', () => {
      const testDate = new Date('2025-01-07T10:00:00');
      expect(isAfterHours(defaultSchedule, testDate)).toBe(false);
    });
    
    it('should return true outside opening hours', () => {
      const testDate = new Date('2025-01-07T20:00:00');
      expect(isAfterHours(defaultSchedule, testDate)).toBe(true);
    });
  });
  
  describe('getOpeningHoursString', () => {
    it('should format Monday hours correctly', () => {
      expect(getOpeningHoursString('monday', defaultSchedule)).toBe('9:00am - 7:00pm');
    });
    
    it('should format Saturday hours correctly', () => {
      expect(getOpeningHoursString('saturday', defaultSchedule)).toBe('10:00am - 5:00pm');
    });
    
    it('should format Sunday hours correctly', () => {
      expect(getOpeningHoursString('sunday', defaultSchedule)).toBe('10:00am - 2:00pm');
    });
  });
  
  describe('formatOpeningHoursCondensed', () => {
    it('should condense weekday hours', () => {
      const result = formatOpeningHoursCondensed(defaultSchedule);
      expect(result).toContain('Monday-Friday 9:00am - 7:00pm');
    });
    
    it('should include Saturday hours separately', () => {
      const result = formatOpeningHoursCondensed(defaultSchedule);
      expect(result).toContain('Saturday 10:00am - 5:00pm');
    });
    
    it('should include Sunday hours separately', () => {
      const result = formatOpeningHoursCondensed(defaultSchedule);
      expect(result).toContain('Sunday 10:00am - 2:00pm');
    });
  });
  
  describe('Edge cases', () => {
    it('should handle one minute before closing', () => {
      // Tuesday at 6:59pm
      const testDate = new Date('2025-01-07T18:59:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(true);
    });
    
    it('should handle one minute after opening', () => {
      // Tuesday at 9:01am
      const testDate = new Date('2025-01-07T09:01:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(true);
    });
    
    it('should handle midnight', () => {
      // Tuesday at midnight
      const testDate = new Date('2025-01-07T00:00:00');
      expect(isOpen(defaultSchedule, testDate)).toBe(false);
    });
  });
});