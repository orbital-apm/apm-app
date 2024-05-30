export interface NavbarItem {
  labelText: string;
  dropdownContent: Array<[string, string]>;
}

export const navbarData: NavbarItem[] = [
  {
    labelText: 'home',
    dropdownContent: [['/', 'home']],
  },

  {
    labelText: 'builder',
    dropdownContent: [['/', 'home']],
  },

  {
    labelText: 'guides',
    dropdownContent: [['/', 'home']],
  },

  {
    labelText: 'marketplace',
    dropdownContent: [['/', 'home']],
  },

  {
    labelText: 'support',
    dropdownContent: [['/', 'home']],
  },
];
