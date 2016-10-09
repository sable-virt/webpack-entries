'use strict';
const path = require('path');
const glob = require('glob');
const gbase = require('glob-base');

module.exports = function(pattern,multiple) {
    if (typeof pattern !== 'string') return pattern;
    let files = glob.sync(pattern);
    let base = gbase(pattern).base;
    if (!multiple) {
        return files;
    }
    let entry = {};
    files.forEach((f) => {
        let relPath = path.dirname(path.relative(base,f));
        let name = path.basename(f,path.extname(f));
        entry[path.join(relPath,name)] = f;
    });
    return entry;
};