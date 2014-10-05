// Write your tests here!
// Here is an example.

Tinytest.add('Default Gravatar', function (test) {
  var a = Gravatar.url('nashruddin.amin@gmail.com');
  var b = '//www.gravatar.com/avatar/7f570387c9c5231708a5db1731b93582.jpg?s=64&d=monsterid';
  test.equal(a, b);
});

Tinytest.add('Custom size', function(test) {
  var a = Gravatar.url('nashruddin.amin@gmail.com', {size: 120});
  var b = '//www.gravatar.com/avatar/7f570387c9c5231708a5db1731b93582.jpg?s=120&d=monsterid';
  test.equal(a, b);
});

Tinytest.add('Custom default image', function(test) {
  var a = Gravatar.url('nashruddin.amin@gmail.com', {defaultImage: 'http://example.com/image.png'});
  var b = '//www.gravatar.com/avatar/7f570387c9c5231708a5db1731b93582.jpg?s=64&d=http%3A%2F%2Fexample.com%2Fimage.png';
  test.equal(a, b);
});
