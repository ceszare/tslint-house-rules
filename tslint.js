const path = require('path');

module.exports = {
    rulesDirectory: [
        path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules')
    ],
    // Extends are overriden left-to-right (e.g. tslint:recommended overrides tslint-eslint-rules)
    extends: [
        'tslint-eslint-rules',
        'tslint:recommended',
        'tslint-react',
        'tslint-config-prettier'
    ],
    jsRules: {},
    rules: {
        /*
            disallows spaces inside array brackets (aligns with AirBnB)
            https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/arrayBracketSpacingRule.md
            default value: N/A
            source: N/A
        */
       "array-bracket-spacing": [true, 'never'],
       /*
           forbids (x) => { x; } if favor of x => { x; }
           https://palantir.github.io/tslint/rules/array-type/
           default value: true
           source: 'tslint:recommended'
       */
       "arrow-parens": [true, 'ban-single-arg-parens'],
        /*
            Enforces traditional ECMAScript brace style (aligns with AirBnB's style guide).

            https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/braceStyleRule.md
            default value: N/A
            source: N/A
        */
       "brace-style": [true, "1tbs"],
        /*
            Forbids code with a cyclomatic complexity greater than 20 paths. This rule will help
            ensure that our classes limit themselves to the Single-responsibility principle from SOLID
            and will ensure we avoid long switch statements where we can use the factory pattern to
            simplify the code.

            https://palantir.github.io/tslint/rules/cyclomatic-complexity/
            default value: false
            source: 'tslint:recommended'
        */
       'cyclomatic-complexity': [true, 20],
        /*
            Relaxes the rule on forcing an interface to begin with the letter 'I'. Modern IDEs will provide
            context, so it is no longer needed to annotate it. Conversely, if we decide to import code that
            uses the I convention, we don't want to go through the overhead of renaming them.

            https://palantir.github.io/tslint/rules/interface-name/
            default value: { options: ['always-prefix'] }
            source: 'tslint:recommended'
        */
       'interface-name': [false],
        /*
            Enforces consistent jsdoc format, and verifies that the first line of the comments is empty. This
            will make the documentation look similar to Javadoc.

            https://palantir.github.io/tslint/rules/jsdoc-format/
            default value: true
            source: 'tslint:recommended'
        */
       'jsdoc-format': [true, 'check-multiline-start'],
        /*
            enforces consistent styling for multiline JSX elements
            https://github.com/palantir/tslint-react#rules
            default value: N/A
            source: 'tslint-react'
        */
       "jsx-alignment": [true],
       /*
           enforces omitting the value of a boolean prop if the value is true
           https://github.com/palantir/tslint-react#rules
           default value: [true, 'always'],
           source: 'tslint-react'
       */        
       "jsx-boolean-value": [true, 'never'],
       /*
           bans spaces between curly brace characters in JSX
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */        
       "jsx-curly-spacing": [true, 'never'],
       /*
           bans spaces before and after the = token in JSX element attributes
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */        
       "jsx-equals-spacing": [true, 'never'],
       /*
           Warns for missing key props in JSX element array literals and inside return statements of Array.prototype.map callbacks
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */        
       "jsx-key": [true],
       /*
           Forbids function binding in JSX attributes. This can still be done at the constructors
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */
       "jsx-no-bind": [true],
       /*
           forbids craeting anonymous functions inside the render call stack
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */
       "jsx-no-lambda": [true],
       /*
           disallows multiline JS expressions inside JSX blocks to promote readability
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */
       "jsx-no-multiline-js": [true],
       /*
           forbids passing strings to the ref prop of React elements
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */
       "jsx-no-string-ref": [true],
       /*
           enforces that JSX elements with no children are self-closing
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */
       "jsx-self-close": [true],
       /*
           enforces that self-closing JSX elements have a space before the '/>' part
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */
       "jsx-space-before-trailing-slash": [true],
       /*
           enforces that multiline JSX expressions are wrapped with parentheses
           https://github.com/palantir/tslint-react#rules
           default value: N/A
           source: 'tslint-react'
       */
       "jsx-wrap-multiline": [true],
        /*
            Preserves Palantir's recommended line length limit, while excluding a few cases where enforcing the
            limit may be detrimental to the code's readability:

            1. imports are excluded, since:
                a) the alternative is using two imports for one source, decreasing readability.
                b) We may not control the import path or the name of the modules, complicating our length enforcement.
            2. class declarations are exported, as multiple interface implementations may cause us to exceed the limit.
            3. Single-line comments are excluded, allowing us to be concise and display the comment in one line of text.

            https://palantir.github.io/tslint/rules/max-line-length/
            default value: [true, { limit: 120 }]
            source: 'tslint:recommended'
        */
       'max-line-length': [true, {
            limit: 120,
            'ignore-pattern': '^import |class [a-zA-Z]+ implements |^\s*\/\/\s'
        }],
        /*
            Forbids code like `if (variable === true)`, removing redundancy and forcing us to improve the readability of
            the code.

            https://palantir.github.io/tslint/rules/no-boolean-literal-compare/
            default value: N/A
            source: N/A
        */
       "no-boolean-literal-compare": true,
        /*
            Disallows having duplicated imports. Using a single import statement per module will make the code clearer
            because you can see everything being imported from that module on one line.

            https://palantir.github.io/tslint/rules/no-duplicate-imports/
            default value: N/A
            source: N/A
        */
       "no-duplicate-imports": true,
        /*
            Disallows using the `this` keyword outside of classes, resulting in better obbject-orientation practices.

            https://palantir.github.io/tslint/rules/no-invalid-this/
            default value: false,
            source: 'tslint:recommended'
        */
       "no-invalid-this": true,
        /*
            Disallows reassigning parameters, reducing the chance that we may cause unintended side-effects .

            https://palantir.github.io/tslint/rules/no-parameter-reassignment/
            default value: N/A
            source: N/A
        */
       "no-parameter-reassignment": true,
        /*
            Disallows the use of require, forcing us to use the newer ES6-style imports.

            https://palantir.github.io/tslint/rules/no-require-imports/
            default value: false
            source: 'tslint-eslint-rules'
        */
       "no-require-imports": true,
        /*
            Requires spacing inside of braces (except {}).

            https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/objectCurlySpacingRule.md
            default value: N/A
            source: N/A
        */
       "object-curly-spacing": [true, 'always'],
        /*
            This option makes it so that only needed property names have quotes.

            https://palantir.github.io/tslint/rules/object-literal-key-quotes/
            default value: [true, 'consistent-as-needed']
            source: 'tslint:recommended'
        */
       "object-literal-key-quotes": [true, 'as-needed'],
        /*
            Defines the rules for ordering object literals to be case-insensitive. This rule reduces the potential
            of having copy-paste issues, and reducing the likelihood of introducing errors due to a bad merge.

            https://palantir.github.io/tslint/rules/object-literal-sort-keys/
            default value: [true]
            source: 'tslint:recommended'
        */
        'object-literal-sort-keys': [true, 'ignore-case'],
        /*
            Enforces single quotes, and forbids the use of template strings if we don't use interpolation.
            For JSX we use double quotes to follow AirBnB's standard.

            https://palantir.github.io/tslint/rules/quotemark/
            default value: [true, 'double', 'avoid-escape']
            source: 'tslint:recommended'
        */
       quotemark: [true, 'single', 'jsx-double', 'avoid-template'],
        /*
            Enforces zero spaces inside of parenthesis (stylistic preference)

            https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/spaceInParensRule.md
            default value: N/A
            source: N/A
        */
       "space-in-parens": [true, 'never'],
       /*
           Restricts the type allowed in boolean expressions to only be boolean. This ensures that the code
           is more expressive, by removing implicit casts of expressions to booleans. While this may make the
           code more verbose, it will still be clearer to declare its intent.

           https://palantir.github.io/tslint/rules/strict-boolean-expressions/
           default value: N/A
           source: N/A
       */
       "strict-boolean-expressions": true,
       /*
           Enforces indentation of 4 spaces, and enforces indentation of case blocks in switch statements. This
           aligns the look of the code blocks to what other languages (like C# or Java) expect, while also playing
           nicely with indentation engines such as VS Code's.

           https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terIndentRule.md
           default value: N/A
           source: N/A
       */
       "ter-indent": [
           true,
           2,
           {
               "SwitchCase": 1
           }
       ],
       /*
           Require arrow functions as callbacks.

           https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terPreferArrowCallbackRule.md
           default value: N/A
           source: N/A
       */
       "ter-prefer-arrow-callback": [
           true,
           {
               allowNamedFunctions: true
           }
       ],
        /*
            Extends tslint:recommended naming rules to allow variable names with leading underscore
            e.g. __internalVariable

            https://palantir.github.io/tslint/rules/variable-name/
            default value: [true, 'ban-keywords', 'check-format', 'allow-pascal-case']
            source: 'tslint:recommended'
        */
       "variable-name": [
            true,
            'ban-keywords',
            'check-format',
            'allow-leading-underscore',
            'allow-pascal-case'
        ],
        /*
            checks for all whitespace rules available. This is ok because fix mode can take care of it.
            https://palantir.github.io/tslint/rules/whitespace/
            default value: [
                true,
                'check-branch',
                'check-decl',
                'check-operator',
                'check-separator',
                'check-type',
                'check-typecast'
            ]
            source: 'tslint:recommended'
        */
        whitespace: true
    }
}