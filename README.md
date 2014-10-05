Gravatar for Meteor
===================
Use this package to display the gravatar images in Meteor. 

Installation
------------

For Meteor 0.9.0 and above:

    meteor add zeta:gravatar

Usage
-----

In your HTML template:

    <template name="content">
      <img src="{{gravatarUrl 'user@example.com'}}" alt="gravatar image" />
    </template>

In your Javascript:

    Template.content.helpers({
      gravatarUrl: function(email) {
        return Gravatar.url(email, {
          size: 100,
          defaultImage: 'http://example.com/another/image.jpg'
        });
      }
    });

TODO
----
Support `Meteor.users` document as the parameter.
