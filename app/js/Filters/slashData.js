'use strict';

app.filter('slashDate', function () {
    return function (input) {
        var parts = input.split('/');
        return new Date(parts[2], parts[0] - 1, parts[1]); // Note: months are 0-based
    }
});