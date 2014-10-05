Package.describe({
  name: "zeta:gravatar",
  summary: "Displays gravatar image for an email address",
  version: "1.0.0",
  git: "https://github.com/bsdnoobz/meteor-gravatar.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('underscore');
  api.addFiles('gravatar.js', 'client');
  api.export('Gravatar');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zeta:gravatar');
  api.addFiles('gravatar-tests.js', 'client');
});
