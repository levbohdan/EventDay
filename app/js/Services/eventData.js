app.factory('eventData', ['$resource','$q', function ($resource, $q) {
    var resource = $resource('/events/:eventID.json', {eventID: '@eventID'});

    return {
        getEvents: function () {
            var events = [];
            var i;
            for (i = 0; i < 3; i += 1) {
                events.push(resource.get({eventID: i}));
            }
            return events;
        },
        saveEvent: function () {
            var event = {name:'hello'};
            event.eventID=2;
            resource.save(event);
        }
    }
}]);