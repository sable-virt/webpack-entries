'use strict';
const assert = require('power-assert');
const entries = require('../index');
describe('install', function () {
    beforeEach(() => {
    });
    afterEach(() => {
    });
    it('to array', () => {
        let e = entries('./test/example/*.js');
        assert.deepEqual(e,[
            './test/example/a.js',
            './test/example/b.js',
            './test/example/c.js'
        ]);
    });
    it('to object', () => {
        let e = entries('./test/example/*.js',true);
        assert.deepEqual(e,{
            a: './test/example/a.js',
            b: './test/example/b.js',
            c: './test/example/c.js'
        });
    });
    it('to object2', () => {
        let e = entries('./test/**/*.js',true);
        assert.deepEqual(e,{
            'example/a': './test/example/a.js',
            'example/b': './test/example/b.js',
            'example/c': './test/example/c.js',
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