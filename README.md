# mon-prebuilt

[![build status](http://img.shields.io/travis/maxogden/mon-prebuilt.svg?style=flat)](http://travis-ci.org/maxogden/mon-prebuilt)

Install [mon](https://github.com/tj/mon) prebuilt binaries for Linux/Mac using npm.

mon is a simple single-process process monitoring program written in C.

## Installation

Download and install the `mon` binary globally to symlink it into your PATH:

```
npm install -g mon-prebuilt
```

If that command fails with an `EACCESS` error you may have to run it again with `sudo`:

```
sudo npm install -g mon-prebuilt
```

Now you can just run `mon` to run mon:

```
mon
```
