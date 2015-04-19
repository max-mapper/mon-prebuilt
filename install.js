#!/usr/bin/env node

var fs = require('fs')
var os = require('os')
var path = require('path')
var nugget = require('nugget')

var platform = os.platform()
var arch = os.arch()
var version = '1.2.3'
var url = 'https://github.com/maxogden/mon-prebuilt/releases/download/v' + version + '/mon-v' + version + '-' + platform + '-' + arch

function onerror (err) {
  throw err
}

var paths = {
  darwin: path.join(__dirname, 'mon'),
  linux: path.join(__dirname, 'mon')
}

var argv = {
  darwin: '"$@"',
  linux: '"$@"'
}

var shebang = {
  darwin: '#!/bin/bash\n',
  linux: '#!/bin/bash\n'
}

if (!paths[platform]) throw new Error('Unknown platform: ' + platform)

nugget(url, {target: 'mon', dir: __dirname, resume: false, verbose: true}, function (err) {
  if (err) {
    console.error('There was an error downloading mon for your OS. If you are on Linux or Mac, please open an issue with this error message and the URL.')
    return onerror(err)
  }
})
