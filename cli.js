#!/usr/bin/env node

function usage () {
  return fs.createReadStream('./usage.txt').pipe(process.stdout)
}

const opts = {
  boolean: ['cjs', 'es6', 'screen', 'container', 'component'],
  unknown: usage,
}

const fs = require('fs')
const args = require('minimist')(process.argv.slice(2), opts)
const factory = require('./create-react-component')

if (args.h || args.help || args._.length === 0) {
  return usage()
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
  factory(name, options, err => {
    if (err) throw err

    return loop()
  })
})()
