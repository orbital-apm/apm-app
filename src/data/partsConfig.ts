export interface PartConfig {
  path: string;
  filters: FilterConfig[];
}

export interface FilterConfig {
  name: string;
  options: string[];
}

export const partsConfig: Record<string, PartConfig> = {
  keycaps: {
    path: '/parts/keycaps',
    filters: [
      {
        name: 'manufacturer',
        options: ['a', 'b'],
      },
      {
        name: 'layout',
        options: ['a', 'b'],
      },
      {
        name: 'material',
        options: ['a', 'b'],
      },
      {
        name: 'profile',
        options: ['a', 'b'],
      },
      {
        name: 'availability',
        options: ['a', 'b'],
      },
    ],
  },
  kits: {
    path: '/parts/kits',
    filters: [
      {
        name: 'manufacturer',
        options: ['a', 'b'],
      },
      {
        name: 'layout size',
        options: ['a', 'b'],
      },
      {
        name: 'layout standard',
        options: ['a', 'b'],
      },
      {
        name: 'layout ergo',
        options: ['a', 'b'],
      },
      {
        name: 'hotswappable',
        options: ['a', 'b'],
      },
      {
        name: 'knob support',
        options: ['a', 'b'],
      },
      {
        name: 'rgb',
        options: ['a', 'b'],
      },
      {
        name: 'display support',
        options: ['a', 'b'],
      },
      {
        name: 'connection',
        options: ['a', 'b'],
      },
      {
        name: 'mount style',
        options: ['a', 'b'],
      },
      {
        name: 'material',
        options: ['a', 'b'],
      },
      {
        name: 'availability',
        options: ['a', 'b'],
      },
    ],
  },
  switches: {
    path: '/parts/switches',
    filters: [
      {
        name: 'manufacturer',
        options: ['a', 'b'],
      },
      {
        name: 'actuation force',
        options: ['a', 'b'],
      },
      {
        name: 'travel distance',
        options: ['a', 'b'],
      },
      {
        name: 'switch type',
        options: ['a', 'b'],
      },
      {
        name: 'availability',
        options: ['a', 'b'],
      },
    ],
  },
};
