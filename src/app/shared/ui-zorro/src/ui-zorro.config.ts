import {ConfigOption} from '@ngx-formly/core';
import {FormlyWrapperAddons} from './wrappers/addons';
import {TemplateDescription} from './run/description';

import {TemplateAddons} from './run/addon';

import {
    FormlyFieldCheckbox,
    FormlyFieldDate,
    FormlyFieldInput,
    FormlyFieldMultiCheckbox,
    FormlyFieldRadio,
    FormlyFieldSelect,
    FormlyFieldTextArea,
} from './types/types';

import {FormlyWrapperDescription, FormlyWrapperFieldset, FormlyWrapperLabel} from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
  // types
  FormlyFieldInput,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldTextArea,
  FormlyFieldMultiCheckbox,
  FormlyFieldDate,

  // wrappers
  FormlyWrapperLabel,
  FormlyWrapperDescription,
  FormlyWrapperFieldset,
  FormlyWrapperAddons,
];

export const ZORRO_FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInput,
      // wrappers: ['fieldset', 'label'],
    },
    {
      name: 'date',
      component: FormlyFieldDate,
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      // wrappers: ['fieldset'],
    },
    {
      name: 'radio',
      component: FormlyFieldRadio,
      wrappers: ['fieldset', 'label'],
      defaultOptions: {
        templateOptions: {
          options: [],
        },
      },
    },
    {
      name: 'select',
      component: FormlyFieldSelect,
      // wrappers: ['fieldset', 'label'],
      defaultOptions: {
        templateOptions: {
          options: [],
        },
      },
    },
    {
      name: 'textarea',
      component: FormlyFieldTextArea,
      wrappers: ['fieldset', 'label'],
      defaultOptions: {
        templateOptions: {
          cols: 1,
          rows: 1,
        },
      },
    },
    {
      name: 'multicheckbox',
      component: FormlyFieldMultiCheckbox,
      // wrappers: ['fieldset', 'label'],
      defaultOptions: {
        templateOptions: {
          options: [],
        },
      },
    },
  ],
  wrappers: [
    {name: 'label', component: FormlyWrapperLabel},
    {name: 'description', component: FormlyWrapperDescription},
      {name: 'fieldset', component: FormlyWrapperFieldset},
    {name: 'addons', component: FormlyWrapperAddons},
  ],
  manipulators: [
    {class: TemplateDescription, method: 'run'},
    {class: TemplateAddons, method: 'run'},
  ],
};
