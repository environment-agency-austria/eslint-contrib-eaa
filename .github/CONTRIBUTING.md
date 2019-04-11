# How to contribute

## Want to add a new rule?
Since the rules provided with this configuration are shared across various projects, adding new rules should be open to discussion. Therefore, [GitHub Issues](https://github.com/environment-agency-austria/eslint-eaa-contrib/issues) should be used to provide a way of bringing up new rules that may be an addition to the currently configured ruleset.

If you would like to add a new rule, you can click [here](https://github.com/environment-agency-austria/eslint-eaa-contrib/issues/new) to create a new issue. If you already might have found a rule that fits your needs, please provide the package and rulename in the issue description. Otherwise, please provide any information on what to achieve with a certain rule (maybe with a short code snippet, describing the problem).

With that process, we want to give the people involved a chance, to discuss why such a rule would benefit our projects or state any concerns one might have with such a rule.

## Actually adding a new rule
If a new rule was accepted to be added, be sure to:
* Check if a new package must be added to the [peer dependencies](../package.json)
* Add the rule to the [configuration](../index.js)
* Update the [CHANGELOG](../CHANGELOG.md)
* Update the [RULESET](../RULESET.md)
* Update the related [GitHub Issue](https://github.com/environment-agency-austria/eslint-eaa-contrib/issues)
