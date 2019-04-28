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
                  {
                    key: 'basic-editor',
                    collapsible: true,
                    props: { label: 'Basic Settings', open: true },
                    children: [
                      'dimension',
                      'measures',
                      'chart-title',
                      'x-axis-label',
                      'y-axis-label',
                    ]
                  },
                  {
                    key: 'advanced-editor',
                    collapsible: true,
                    props: { label: 'Advanced' },
                    children: [
                      'description',
                      'sql-editor', 
                    ]
                  },
                  {
                    key: 'history-container',
                    collapsible: true,
                    props: { label: 'Job History', open: true },
                    children: [
                      'job-history'
                    ]
                  }
                ]

              }
            ],
          },
          {
            key: 'update-container',
            props: { 
              border: 'top',
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
          {
            key: 'result-tabs',
            tabContainer: true,
            props: { tabs: ['Bar chart view', 'Table view'], flex: true, fill: 'vertical' },
            children: [
              'bar-chart-view',
              'data-table',
            ]
          },
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
    'sql-editor': {
      bind: 'sql',
      type: 'CodeEditor',
      default: 'SELECT * FROM PCOLLECTION',
      props: { label: 'Query data to dipslay', options: { model: 'sql' } }
    },
    'dimension': {
      bind: 'dimension',
      type: 'MultipleFieldsSelector',
      props: { 
        label: 'Dimensions', 
        maxSelection: 1, 
        typeFilter: ['STRING', 'DATETIME', 'BOOLEAN', 'VARCHAR', 'CHAR', 'TIMESTAMP', 'TIME_WITH_LOCAL_TIME_ZONE', 'TIME', 'DATE'] 
      }
    },
    'measures': {
      bind: 'measures',
      type: 'MultipleFieldsSelector',
      props: { 
        label: 'Measures', 
        typeFilter: ['INTEGER', 'INT16', 'INT32', 'INT64', 'TINYINT', 'SMALLINT', 'BIGINT', 'FLOAT', 'DOUBLE', 'DECIMAL'] 
      }
    },

    'chart-title': {
      bind: 'title',
      type: 'TextInput',
      default: '',
      props: { label: 'Chart Title' },
    },
    'x-axis-label': {
      bind: 'xlabel',
      type: 'TextInput',
      default: 'x',
      props: { label: 'X Axis Label' },
    },
    'y-axis-label': {
      bind: 'ylabel',
      type: 'TextInput',
      default: 'y',
      props: { label: 'Y Axis Label' },
    },
    'description': {
      bind: '__description__',
      type: 'TextArea',
      default: 'Describe this step here',
      props: { label: 'Description' },
    },
    'job-history': {
      type: 'JobHistory',
      box: {},
      props: {}
    },
    'update-btn': {
      type: 'Button',
      props: { label: 'Update', event: 'SUBMIT_CONFIG' }
    },
    'variable-editor': {
      type: 'VariablePicker',
      box: { flex: false, margin: { bottom: 'medium', top: 'small' }},
      props: { exploreButton: true, testButton: true, runButton: true },
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
    },
    'bar-chart-view': {
      bind: '__dataframe__',
      type: 'BasicChartView',
      box: { flex: true, fill: true },
      props: { type: 'bar' },
    }

  }
}
