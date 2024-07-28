export interface PartConfig {
  path: string;
  filters: FilterConfig[];
}

export interface FilterConfig {
  name: string;
  queryParamKey: string;
  options: FilterOption[];
}

export interface FilterOption {
  name: string;
  value: string;
}

export const partsConfig: Record<string, PartConfig> = {
  keycaps: {
    path: '/parts/keycaps',
    filters: [
      // {
      //   name: 'manufacturer',
      //   options: ['a', 'b']
      // },
      // {
      //   name: 'layout',
      //   options: ['ansi', 'iso']
      // },
      {
        name: 'material',
        queryParamKey: 'material__in',
        options: [
          { name: 'abs', value: 'ABS' },
          { name: 'pbt', value: 'PBT' },
          { name: 'pc', value: 'PC' },
          { name: 'ceramic', value: 'CERAMIC' }
        ]
      },
      // {
      //   name: 'profile',
      //   options: ['cherry', 'dsa', 'kat', 'oem', 'sa', 'xda']
      // },
      {
        name: 'availability',
        queryParamKey: 'availability__in',
        options: [
          { name: 'in stock', value: 'true' },
          { name: 'out of stock', value: 'false' }
        ]
      }
    ]
  },
  kits: {
    path: '/parts/kits',
    filters: [
      // {
      //   name: 'manufacturer',
      //   options: ['a', 'b']
      // },
      // {
      //   name: 'layout size',
      //   options: ['40%', '60%', '65%', '75%', '96%', '100%']
      // },
      // {
      //   name: 'layout standard',
      //   options: ['ansi', 'iso']
      // },
      {
        name: 'layout ergo',
        queryParamKey: 'layout__in',
        options: [
          { name: 'alice', value: 'Alice' },
          { name: 'split', value: 'Split' },
          { name: 'ortholinear', value: 'Ortholinear' }
        ]
      },
      {
        name: 'hotswappable',
        queryParamKey: 'hotswappable__in',
        options: [
          { name: 'hotswappable', value: 'true' },
          { name: 'non-hotswappable', value: 'false' }
        ]
      },
      {
        name: 'knob support',
        queryParamKey: 'knob_support__in',
        options: [
          { name: 'knob support', value: 'true' },
          { name: 'no knob support', value: 'false' }
        ]
      },
      {
        name: 'rgb',
        queryParamKey: 'rgb_support__in',
        options: [
          { name: 'rgb', value: 'true' },
          { name: 'non-rgb', value: 'false' }
        ]
      },
      {
        name: 'display support',
        queryParamKey: 'display_support__in',
        options: [
          { name: 'display support', value: 'true' },
          { name: 'no display support', value: 'false' }
        ]
      },
      // {
      //   name: 'connection',
      //   options: ['wired', 'wireless']
      // },
      {
        name: 'mount style',
        queryParamKey: 'mount_style__in',
        options: [
          { name: 'top mount', value: 'Top Mount' },
          { name: 'gasket mount', value: 'Gasket Mount' },
          { name: 'pcb mount', value: 'PCB Mount' },
          { name: 'plate mount', value: 'Plate Mount' },
          { name: 'tray mount', value: 'Tray Mount' }
        ]
      },
      {
        name: 'material',
        queryParamKey: 'material__in',
        options: [
          { name: 'metal', value: 'Metal' },
          { name: 'aluminium', value: 'Aluminium' },
          { name: 'plastic', value: 'Plastic' }
        ]
      },
      {
        name: 'availability',
        queryParamKey: 'availability__in',
        options: [
          { name: 'in stock', value: 'true' },
          { name: 'out of stock', value: 'false' }
        ]
      }
    ]
  },
  switches: {
    path: '/parts/switches',
    filters: [
      // {
      //   name: 'manufacturer',
      //   options: ['a', 'b']
      // },
      // {
      //   name: 'actuation force',
      //   options: ['a', 'b']
      // },
      // {
      //   name: 'travel distance',
      //   options: ['a', 'b']
      // },
      {
        name: 'switch type',
        queryParamKey: 'switch_type__in',
        options: [
          { name: 'linear', value: 'Linear' },
          { name: 'tactile', value: 'Tactile' },
          { name: 'clicky', value: 'Clicky' }
        ]
      },
      {
        name: 'availability',
        queryParamKey: 'availability__in',
        options: [
          { name: 'in stock', value: 'true' },
          { name: 'out of stock', value: 'false' }
        ]
      }
    ]
  }
};
