export interface NavbarItem {
  label: [string, string];
  dropdownContent?: Array<[string, string]>;
}

export const navbarData: NavbarItem[] = [
  {
    label: ['/', 'home'],
    dropdownContent: [['/', 'home']],
  },
  {
    label: ['/builder', 'builder'],
    dropdownContent: [
      ['/parts/switches', 'switches'],
      ['/parts/keycaps', 'keycaps'],
      ['/parts/kits', 'kits'],
      ['/parts/lubricants', 'lubricants'],
    ],
  },
  {
    label: ['/guides', 'guides'],
    dropdownContent: [
      ['/guides/intro', 'intro'],
      ['/guides/keycaps', 'keycaps'],
      ['/guides/switches', 'switches'],
      ['/guides/sizes', 'sizes'],
    ],
  },
  {
    label: ['/', 'marketplace'],
    dropdownContent: [['/', 'browse']],
  },
  {
    label: ['/about', 'about us'],
  },
];
