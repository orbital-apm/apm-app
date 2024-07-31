export interface NavbarItem {
  label: [string, string];
  dropdownContent?: [string, string][];
}

export const navbarData: NavbarItem[] = [
  {
    label: ['/', 'Home']
  },
  {
    label: ['/builder', 'Builder'],
    dropdownContent: [
      ['/parts/keycaps', 'keycaps'],
      ['/parts/switches', 'switches'],
      ['/parts/kits', 'kits']
    ]
  },
  {
    label: ['/guides', 'Guides'],
    dropdownContent: [
      ['/guides/intro', 'intro'],
      ['/guides/keycaps', 'keycaps'],
      ['/guides/switches', 'switches'],
      ['/guides/sizes', 'sizes']
    ]
  },
  {
    label: ['/marketplace', 'Marketplace'],
    dropdownContent: [['/marketplace', 'browse']]
  },
  {
    label: ['/about', 'About Us']
  }
];
