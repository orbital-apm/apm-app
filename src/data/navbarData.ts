export interface NavbarItem {
  label: [string, string];
  dropdownContent: Array<[string, string]>;
}

export const navbarData: NavbarItem[] = [
  {
    label: ['/', 'home'],
    dropdownContent: [['/', 'home']],
  },

  {
    label: ['/', 'builder'],
    dropdownContent: [['/', 'home']],
  },

  {
    label: ['/', 'guides'],
    dropdownContent: [['/', 'home']],
  },

  {
    label: ['/', 'marketplace'],
    dropdownContent: [['/', 'home']],
  },

  {
    label: ['/', 'support'],
    dropdownContent: [['/', 'home']],
  },
];
