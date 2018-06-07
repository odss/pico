import { h } from '../src/h.js';


QUnit.module('h()');

QUnit.test('test typeof h()',  assert => {
    assert.expect(1);
    assert.ok(typeof h === 'function');
});

QUnit.test('h() init by node name', assert => {
    assert.expect(4);
    const node = h('div');
    assert.equal(node.type, 'vnode');
    assert.equal(node.name, 'div');
    assert.deepEqual(node.props, {});
    assert.deepEqual(node.children, []);
});

QUnit.test('h() and props', assert => {
    assert.expect(3);

    const node = h('div', {
        foo: 'bar'
    });
    assert.equal(node.type, 'vnode');
    assert.equal(node.props.foo, 'bar');
    assert.deepEqual(node.children, []);
});

QUnit.test('h() and text', assert => {
    assert.expect(2);

    const node = h('div', 'Text');
    assert.equal(node.children[0].type, 'vtext');
    assert.equal(node.children[0].text, 'Text');
});

QUnit.test('h() and child', assert => {
    assert.expect(1);
    const node = h('div', [
        h('span')
    ]);
    assert.equal(node.children[0].type, 'vnode');
});
