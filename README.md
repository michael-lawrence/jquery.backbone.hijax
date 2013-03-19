#jquery.backbone.hijax

jQuery plugin for Backbone that implements Hijax routing. Allows us to find any links that start with '/' and intercept them and add a '#' to the beginning. This prevents the page from reloading.

* * *

###Usage

```javascript

var router = Backbone.Router.extend({
    'routes': {
        'home' : 'home',
        'about' : 'about'
    },

    'home' : function () {
        ...
    },

    'about' : function () {
        ...
    }
});

$.backboneHijax(router);

```

### Bower installation

    bower install jquery.backbone.hijax