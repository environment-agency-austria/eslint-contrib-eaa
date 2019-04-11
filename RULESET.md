# Ruleset
Here you find a documentation on which eslint rules are enabled. The following plugins are used to configure the rules we use:
* [eslint](https://eslint.org/docs/rules/)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
* [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html)
* [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

## Base
The ruleset is based on the following rulesets:
* [`eslint:recommended`](https://eslint.org/docs/rules/)
* [`react/recommended`](https://github.com/yannickcr/eslint-plugin-react#recommended)
* [`@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)

## Adaptions
To fit our needs, we made a few changes to the base rulesets.
Rules marked with an **\*** are configured using options provided by the rule. Please consult the rule documentation for further information.

Ruleset              | Rule                             | Error level  | Description |
 ------------------- | :------------------------------: | :----------: | -----------: |
eslint               | indent                           | **off**      | [Desc](https://eslint.org/docs/rules/no-console) |
eslint               | no-console                       | **warn**     | [Desc](https://eslint.org/docs/rules/indent) |
react                | prop-types                       | **off**      | [Desc](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) |
react-hooks          | rules-of-hooks                   | **error**    | [Desc](https://reactjs.org/docs/hooks-rules.html) |
react-hooks          | exhaustive-deps                  | **warn**     | [Desc](https://github.com/facebook/react/issues/14920) |
@typescript-eslint   | indent                           | **error***   | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md) |
@typescript-eslint   | interface-name-prefix            | **off**      | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md) |
@typescript-eslint   | camelcase                        | **off**      | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md) |
@typescript-eslint   | no-angle-bracket-type-assertion  | **off**      | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-angle-bracket-type-assertion.md) |
@typescript-eslint   | explicit-member-accessibility    | **off**      | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md) |
@typescript-eslint   | no-non-null-assertion            | **warn**     | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md) |
@typescript-eslint   | prefer-interface                 | **warn**     | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md) |
@typescript-eslint   | no-empty-interface               | **off**      | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md) |
@typescript-eslint   | no-use-before-define             | **off**      | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md) |
@typescript-eslint   | no-unused-vars                   | **warn***    | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md) |
@typescript-eslint   | no-object-literal-type-assertion | **off**      | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md) |
@typescript-eslint   | explicit-function-return-type    | **warn***    | [Desc](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md) |
