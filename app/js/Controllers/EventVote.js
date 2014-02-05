app.controller("EventVoteCtrl", ["$scope", function (scopeCtrl) {
    scopeCtrl.events = [
        {
            name: 'Birthday',
            availableDays: [
                {date: new Date(2014,1,7), vote: 3},
                {date: new Date(2014,1,8), vote: 2},
                {date: new Date(2014,1,9), vote: 1}
            ]
        },
        {
            name: 'Picnic',
            availableDays: [
                {date: new Date(2014,1,3), vote: 0},
                {date: new Date(2014,1,5), vote: 0}
            ]
        },
        {
            name: 'Party',
            availableDays: [
                {date: new Date(2014,1,7), vote: 0},
                {date: new Date(2014,1,14), vote: 0}
            ]
        }
    ];
    scopeCtrl.reverse=false;
    scopeCtrl.byOrder="vote";
    scopeCtrl.voteUp = function (item) {
        item.vote ++;
    }
    scopeCtrl.voteDown = function (item) {
        item.vote-=1;
    }
}]);