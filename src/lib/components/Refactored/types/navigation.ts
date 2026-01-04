export interface NavigationLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface NavigationConfig {
  mainLinks: NavigationLink[];
  actionLinks: {
    portal: NavigationLink;
    booking: NavigationLink;
  };
}