// photo-lister.js
var PhotoLister;

PhotoLister = {
    photoToListItem: function() {
        return '<li><figure><img src="http://loremflickr.com/960/593" alt=""/>'
               + '<figcaption>This is a test</figcaption></figure></li>';
    }
};

module.exports = PhotoLister;