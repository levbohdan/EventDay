app.controller("EventVoteCtrl", ["$scope", "eventData", function ($scope, eventData) {
$scope.newEvent=function (){
    eventData.saveEvent();
}
    $scope.addEvent=function() {
        if($scope.eventName===undefined) $scope.eventName='new event';
        $scope.events.push({name:$scope.eventName, availableDays:[]});
        $scope.eventName=undefined;
    }
    $scope.addDate=function(event,eventDate) {
        event.availableDays.push({date:eventDate,vote:0});
    }
    $scope.events = []//eventData.getEvents();
    $scope.reverse = false;
    $scope.byOrder = "vote";
    $scope.voteUp = function (item) {
        item.vote++;
    }
    $scope.voteDown = function (item) {
        item.vote -= 1;
    }
}]);