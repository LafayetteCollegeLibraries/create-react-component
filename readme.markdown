create-react-component
======================

helper to generate React components. can be used programatically
or with provided cli tool

usage
-----

```
npm install @lafayette-college-libraries/create-react-component
```

### createComponent(name[, opts], callback)

```javascript
const createComponent = require('@lafayette-college-libraries/create-react-component')

// defaults
const opts = {
  basePath: './src',

  // `createComponent` appends an 's' to the end as a form of
  // rudimentary pluralization
  type: 'component',

  // only 'es6' and 'cjs' (CommonJS) modules are supported
  module: 'es6'
}

// per-best-practices, be sure to camel-case your component name!
createComponent('CoolComponent', opts, function (err) {
  if (err) throw err

  console.log('component created!')
})
```

usage: command-line
-------------------

```
npm install -g @lafayette-college-libraries/create-react-component
```

```
usage: create-component <name(s)> [<args>]

creates a base-line React component

args

  --base-path   set the base path of the output (default: `./src`)
  --component   (default) writes component to `./src/components`
  --container   writes component to `./src/containers`
  --screen      writes component to `./src/screens`

  --es6         (default) write the component using ES6 modules
                (eg. 'import/export')
  --cjs         write the component using CommonJS modules
                (eg. 'require')

  -h, --help    this screen
```
