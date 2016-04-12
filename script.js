#!/usr/bin/env node
process.stdin.pipe(require('./angles')()).pipe(process.stdout);
