app.controller("DynamicList", ["$scope",function($scope){
    $scope.list=["12345","765432"];
    $scope.addItem=function(){
        $scope.list.push('haha');
    };
}]);