export interface NavbarItem {
  label: [string, string];
  dropdownContent?: [string, string][];
}

export const navbarData: NavbarItem[] = [
  {
    label: ['/', 'home'],
    dropdownContent: [['/', 'home']]
  },
  {
    label: ['/builder', 'builder'],
    dropdownContent: [
      ['/parts/keycaps', 'keycaps'],
      ['/parts/switches', 'switches'],
      ['/parts/kits', 'kits']
    ]
  },
  {
    label: ['/guides', 'guides'],
    dropdownContent: [
      ['/guides/intro', 'intro'],
      ['/guides/keycaps', 'keycaps'],
      ['/guides/switches', 'switches'],
      ['/guides/sizes', 'sizes']
    ]
  },
  {
    label: ['/marketplace', 'marketplace'],
    dropdownContent: [['/', 'browse']]
  },
  {
    label: ['/about', 'about us']
  }
];
