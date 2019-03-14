(function () {
    function ListController($scope, DataProvider) {
        $scope.info = DataProvider.getAllSubscribers();
        $scope.removeItem = function(){
            DataProvider.removeSubscriber(this.$index);
            $scope.info = DataProvider.getAllSubscribers();
        };

    }
    phonebookApp.controller("ListController",["$scope",'DataProvider',ListController]);
})();