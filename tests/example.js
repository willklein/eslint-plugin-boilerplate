var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');

var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest('rules/example', {
  valid: [
    'var validExample = "code"';
  ],

  invalid: [
    {
      code: 'var invalidExample = "co" + "de"';,
      errors: [ { message: '' } ]
    }
  ]
});
