# eslint-plugin-boilerplate

Basic example, compatible with ESLint 2.x and 3.x.

To use:
- Clone this repo
- Optional: delete the `.git` directory and `git init` a new repo
- Run `npm install`
- Rename `lib/rules/example.js` and `tests/lib/rules/example.js` to use your rule's name
- Modify your rule, probably using [AST Explorer](http://astexplorer.net/) to know what you're looking for
- Run `npm test` to make sure everything works
- Update `index.js` to export the new rule name and any additional rules
- Run the rule against a real codebase to flush out unexpected patterns that might error your code
- Update the `package.json` with:
  - `author`
  - `repository`
  - `version`
  - Optional: `"private": true` if you're keeping this private
- Publish to npm easily using the included release scripts that will bump the version, `npm publish` and push the repo to the git remote with tags published. Ex. `npm run minor-release` (bumps 0.1.0 => 0.2.0)