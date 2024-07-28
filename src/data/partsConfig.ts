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
  value: string | boolean;
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
      }
      // {
      //   name: 'profile',
      //   options: ['cherry', 'dsa', 'kat', 'oem', 'sa', 'xda']
      // },
      // {
      //   name: 'availability',
      //   options: ['in stock', 'out of stock']
      // }
    ]
  }
  // kits: {
  //   path: '/parts/kits',
  //   filters: [
  //     // {
  //     //   name: 'manufacturer',
  //     //   options: ['a', 'b']
  //     // },
  //     {
  //       name: 'layout size',
  //       options: ['40%', '60%', '65%', '75%', '96%', '100%']
  //     },
  //     {
  //       name: 'layout standard',
  //       options: ['ansi', 'iso']
  //     },
  //     {
  //       name: 'layout ergo',
  //       options: ['alice', 'split', 'ortholinear']
  //     },
  //     {
  //       name: 'hotswappable',
  //       options: ['hotswappable', 'non-hotswappable']
  //     },
  //     {
  //       name: 'knob support',
  //       options: ['knob support', 'no knob support']
  //     },
  //     {
  //       name: 'rgb',
  //       options: ['rgb', 'non-rgb']
  //     },
  //     {
  //       name: 'display support',
  //       options: ['display support', 'no display support']
  //     },
  //     {
  //       name: 'connection',
  //       options: ['wired', 'wireless']
  //     },
  //     {
  //       name: 'mount style',
  //       options: ['top mount', 'gasket mount', 'pcb mount', 'plate mount', 'tray mount']
  //     },
  //     {
  //       name: 'material',
  //       options: ['metal', 'plastic']
  //     },
  //     {
  //       name: 'availability',
  //       options: ['in stock', 'out of stock']
  //     }
  //   ]
  // },
  // switches: {
  //   path: '/parts/switches',
  //   filters: [
  //     // {
  //     //   name: 'manufacturer',
  //     //   options: ['a', 'b']
  //     // },
  //     // {
  //     //   name: 'actuation force',
  //     //   options: ['a', 'b']
  //     // },
  //     // {
  //     //   name: 'travel distance',
  //     //   options: ['a', 'b']
  //     // },
  //     {
  //       name: 'switch type',
  //       options: ['linear', 'tactile', 'clicky']
  //     },
  //     {
  //       name: 'availability',
  //       options: ['in stock', 'out of stock']
  //     }
  //   ]
  // }
};
