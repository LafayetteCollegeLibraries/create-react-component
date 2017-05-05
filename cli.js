#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const opts = {
  boolean: ['cjs', 'es6', 'screen', 'container', 'component'],
}

const args = require('minimist')(process.argv.slice(2), opts)
const factory = require('./')

if (args.h || args.help || args._.length === 0) {
  return fs.createReadStream(path.join(__dirname, 'usage.txt'))
    .pipe(process.stdout)
}

const mode = args.cjs ? 'cjs' : 'es6'
const type = args.type
  ? args.type
  : args.screen
    ? 'screen'
    : args.container
      ? 'container'
      : 'component'

const basePath = args['base-path'] ? args['base-path'] : './src'
const options = {mode, type, basePath}

;(function loop () {
  if (args._.length <= 0)
    return

  const name = args._.shift()
  return factory(name, options, err => {
    if (err) throw err

    return loop()
  })
})()
