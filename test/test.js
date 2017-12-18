const assert = require('assert');
const fs = require('fs');
const path = require('path');
const compiler = require('../index.js')

function test (file) {
  const path = './test/fixtures/' + file + '.vue'
  const src = fs.readFileSync(path).toString()
  const result = compiler(src, path)
  console.log(result);
  // it(file, done => {
  //   fs.writeFileSync(mockEntry, 'window.vueModule = require("../fixtures/' + file + '.vue")')
  //   browserify(mockEntry)
  //   .transform(vueify)
  //   .bundle((err, buf) => {
  //     if (err) return done(err)
  //     var src = buf.toString()
  //     jsdom.env({
  //       html: '<!DOCTYPE html><html><head></head><body></body></html>',
  //       src: [src],
  //       done: (err, window) => {
  //         if (err) return done(err)
  //         assert(window)
  //         done()
  //       }
  //     })
  //   })
  // })
}


describe('javascript', function() {
  it('should produce a basic JS bundle with CommonJS requires', async function() {
    test('basic')
    test('ProgressBar')
    test('Spinner')

    // console.log(compiler('foo'))

    // let b = await bundle(__dirname + '/integration/commonjs/index.js');
    //
    // assert.equal(b.assets.size, 8);
    // assert.equal(b.childBundles.size, 0);
    //
    // let output = run(b);
    // assert.equal(typeof output, 'function');
    // assert.equal(output(), 3);
  });
});

