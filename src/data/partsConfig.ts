import { PartType } from '@/slices/builderSlice';

export interface PartConfig {
  type: PartType;
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
    type: 'keycaps',
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
          { name: 'ABS', value: 'ABS' },
          { name: 'PBT', value: 'PBT' },
          { name: 'PC', value: 'PC' },
          { name: 'Ceramic', value: 'Ceramic' }
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
          { name: 'In stock', value: 'true' },
          { name: 'Out of stock', value: 'false' }
        ]
      }
    ]
  },
  kits: {
    type: 'kit',
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
        queryParamKey: 'layout_ergonomic__in',
        options: [
          { name: 'Alice', value: 'Alice' },
          { name: 'Split', value: 'Split' },
          { name: 'Ortholinear', value: 'Ortholinear' }
        ]
      },
      {
        name: 'hotswappable',
        queryParamKey: 'hotswappable__in',
        options: [
          { name: 'Hotswappable', value: 'true' },
          { name: 'Non-hotswappable', value: 'false' }
        ]
      },
      {
        name: 'knob support',
        queryParamKey: 'knob_support__in',
        options: [
          { name: 'Knob support', value: 'true' },
          { name: 'No knob support', value: 'false' }
        ]
      },
      {
        name: 'rgb',
        queryParamKey: 'rgb_support__in',
        options: [
          { name: 'RGB', value: 'true' },
          { name: 'Non-RGB', value: 'false' }
        ]
      },
      {
        name: 'display support',
        queryParamKey: 'display_support__in',
        options: [
          { name: 'Display support', value: 'true' },
          { name: 'No display support', value: 'false' }
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
          { name: 'Top Mount', value: 'Top Mount' },
          { name: 'Gasket Mount', value: 'Gasket Mount' },
          { name: 'PCB Mount', value: 'PCB Mount' },
          { name: 'Plate Mount', value: 'Plate Mount' },
          { name: 'Tray Mount', value: 'Tray Mount' }
        ]
      },
      {
        name: 'material',
        queryParamKey: 'material__in',
        options: [
          { name: 'Metal', value: 'Metal' },
          { name: 'Aluminum', value: 'Aluminum' },
          { name: 'Plastic', value: 'Plastic' }
        ]
      },
      {
        name: 'availability',
        queryParamKey: 'availability__in',
        options: [
          { name: 'In stock', value: 'true' },
          { name: 'Out of stock', value: 'false' }
        ]
      }
    ]
  },
  switches: {
    type: 'switches',
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
          { name: 'Linear', value: 'Linear' },
          { name: 'Tactile', value: 'Tactile' },
          { name: 'Clicky', value: 'Clicky' }
        ]
      },
      {
        name: 'availability',
        queryParamKey: 'availability__in',
        options: [
          { name: 'In stock', value: 'true' },
          { name: 'Out of stock', value: 'false' }
        ]
      }
    ]
  }
};
