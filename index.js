const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const componentTemplates = require('./templates/react-component')

const moduleTypes = ['es6', 'cjs']
const componentTypes = ['component', 'container', 'screen']

module.exports = function createReactComponent (name, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) {
    opts = {}
  }

  if (opts.module === undefined) {
    opts.module = 'es6'
  } else {
    if (!~moduleTypes.indexOf(opts.module)) {
      return cb(Error('opts.module must be "es6" or "cjs"'))
    }
  }

  if (!opts.type) {
    opts.type = 'component'
  }

  const text = componentTemplates[opts.module](name)
  const base = opts.basePath || path.resolve(__dirname, 'src')
  const fullPath = path.resolve(base, opts.type + 's')

  console.log({fullPath})
  process.exit(0)

  return mkdirp(fullPath, err => {
    if (err) {
      return cb(err)
    }

    return fs.writeFile(path.resolve(fullPath, name) + '.js', text, err => {
      if (err) {
        return cb(err)
      }

      return cb()
    })
  })
}
