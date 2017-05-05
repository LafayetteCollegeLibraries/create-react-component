const extendedFactory = o => name => (
`${o.import('React', 'react')}
${o.import('PropTypes', 'prop-types')}

const propTypes = {

}

const defaultProps = {

}

class ${name} extends React.PureComponent {

}

${name}.propTypes = propTypes
${name}.defaultProps = defaultProps

${o.export(name)}
`
)

const es6 = {
  import: (v, package) => `import ${v} from '${package}'`,
  export: name => `export default ${name}`
}

const cjs = {
  import: (v, package) => `const ${v} = require('${package}')`,
  export: name => `module.exports = ${name}`
}

module.exports.es6 = extendedFactory(es6)
module.exports.cjs = extendedFactory(cjs)
