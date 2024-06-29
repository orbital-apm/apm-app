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
    label: ['/guides', 'guides'],
    dropdownContent: [
      ['/guide/intro', 'intro'],
      ['/guide/keycaps-and-switches', 'keycaps and switches'],
      ['guides/sizes', 'sizes'],
    ],
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
