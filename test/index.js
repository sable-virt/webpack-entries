'use strict';
const assert = require('power-assert');
const entries = require('../index');
describe('install', function () {
    beforeEach(() => {
    });
    afterEach(() => {
    });
    it('to array', () => {
        let e = entries('./test/sample/*.js');
        assert.deepEqual(e,[
            './test/sample/a.js',
            './test/sample/b.js',
            './test/sample/c.js'
        ]);
    });
    it('to object', () => {
        let e = entries('./test/sample/*.js',true);
        assert.deepEqual(e,{
            a: './test/sample/a.js',
            b: './test/sample/b.js',
            c: './test/sample/c.js'
        });
    });
    it('to object2', () => {
        let e = entries('./test/**/*.js',true);
        assert.deepEqual(e,{
            'sample/a': './test/sample/a.js',
            'sample/b': './test/sample/b.js',
            'sample/c': './test/sample/c.js',
            'index': './test/index.js'
        });
    });
    it('from array', () => {
        let e = entries([
            'a.js',
            'b.js'
        ]);
        assert.deepEqual(e,[
            'a.js',
            'b.js'
        ]);
    });
    it('from object', () => {
        let e = entries({
            a: 'a.js',
            b: 'b.js'
        });
        assert.deepEqual(e,{
            a: 'a.js',
            b: 'b.js'
        });
    });
});