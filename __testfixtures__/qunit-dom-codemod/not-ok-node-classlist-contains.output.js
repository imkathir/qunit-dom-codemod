let node = {};

assert.dom(node).hasNoClass('bar');

assert.dom(node).hasNoClass('bar', 'custom message');
