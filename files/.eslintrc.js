'use strict';

const path = require('path');

module.exports = {
  overrides: [

    // vendor files
    {
      files: ['vendor/**/*.js'],
      parserOptions: {
        ecmaVersion: 5,
        sourceType: 'script'
      },
      env: {
        amd: true
      },
      globals: {
        Ember: 'readonly'
      },
      rules: Object.keys(Object.assign({},
        // eslint-disable-next-line node/no-extraneous-require
        require(path.resolve(path.dirname(require.resolve('eslint')), '../conf/eslint-recommended')).rules,
        require('eslint-plugin-ember').configs.recommended.rules
      )).reduce((rules, rule) => {
        rules[rule] = 'off';
        return rules;
      }, {})
    }
  ]
};
