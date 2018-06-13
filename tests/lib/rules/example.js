'use strict';

const rule = require('../../../lib/rules/example')
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('example', rule, {
  valid: [
    'var validExample;',
    'for(;;) {}',
    'do {} while(condition)'
  ],

  invalid: [
    {
      code: 'while(condition) {}',
      errors: [ { messageId: 'avoidWhileLoops' } ]
    }
  ]
});
