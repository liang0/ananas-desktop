export default {
  layout: {
    key: 'root',
    props: { direction: 'row', fill: true },
    children: [
      {
        key: 'left-bar',
        props: { direction: 'column', elevation: 'small', fill: 'vertical', width: '400px', style: { minWidth: '300px'}},
        children: [
          {
            key: 'scrollable-editor',
            props: { flex: true, overflow: {vertical: 'auto'}, pad: 'small' },
            children: [
              { 
                key: 'inner-scrollable-editor',
                props: { flex: false },
                children: [
                  'title',
                  'left-table',
                  'right-table',
                  'column-map',
                  'left-table-fields',
                  'right-table-fields',
              
                  {
                    key: 'advanced-editor',
                    collapsible: true,
                    props: { label: 'Advanced' },
                    children: [
                      'description'
                    ]
                  }
                ]
  
              }
            ],  
          },
          {
            key: 'update-container',
            props: { 
              boder: {side: 'top', size: 'xsmall', color: 'light-4'},
              direction: 'column', height: '50px', justify: 'center',
              pad: { horizontal: 'medium', vertical: 'xsmall' }
            },
            children: [
              'update-btn'
            ]
          },
        ]
      },
      {
        key: 'main',
        props: { direction: 'column', flex: true, fill: true, pad: {top: 'small', left: 'small', right: 'small'} },
        children: [
          'variable-editor',
          'table-title',
          'data-table',
        ]
      }   
    ],
  },

  components: {
    'title': {
      bind: '__name__',
      type: 'TextInput',
      default: 'SQL Transformer',
      props: { label: 'Title' },
    },
    'left-table': {
      bind: 'leftstepid',
      type: 'InputStepSelector',
      props: { label: 'Left Table' }
    },
    'right-table': {
      bind: 'rightstepid',
      type: 'InputStepSelector',
      props: { label: 'Right Table' }
    },
    'column-map': {
      bind: 'joinedcolumnmap',
      type: 'ColumnMap',
      props: { label: 'Join by columns', leftConfigKey: 'leftstepid', rightConfigKey: 'rightstepid' }
    },
    'left-table-fields': {
      bind: 'leftcolumns',
      type: 'MultipleFieldsSelector',
      props: { label: 'Fields included from left table', configKey: 'leftstepid' }
    },
    'right-table-fields': {
      bind: 'rightcolumns',
      type: 'MultipleFieldsSelector',
      props: { label: 'Fields included from right table', configKey: 'rightstepid' }
    },
    'description': {
      bind: '__description__',
      type: 'TextArea',
      default: 'Describe this step here',
      props: { label: 'Description' },
    },
    'update-btn': {
      type: 'Button',
      props: { label: 'Update', event: 'SUBMIT_CONFIG' }
    },
    'variable-editor': {
      type: 'VariablePicker',
      box: { flex: false, margin: { bottom: 'medium', top: 'small' }},
      props: { exploreButton: false, testButton: true, runButton: false },
    },
    'table-title': {
      type: 'Heading',
      box: { flex: false },
      props: { text: 'Result', level: 4 },
    },
    'data-table': {
      bind: '__dataframe__',
      type: 'DataTable',
      box: { flex: true, fill: true },
      props: { pageSize: 25 },
    }
  }
}
