(function () {
    function AddController($scope,DataProvider) {
        $scope.info = DataProvider.getAllSubscribers();
        $scope.addMe = function(){
            return {
                name: $scope.newName,
                tel:$scope.newTel
            }
        };
        $scope.addItem = function(){
            if($scope.addMe().name==undefined || $scope.addMe().name=="" || $scope.addMe().tel==undefined) {
                alert("Name or Phone number cannot be empty");
                return false;
            }
            if(isNaN($scope.addMe().tel)){
                alert("Phone number should be numeric only");
                return false;
            }


            for(var i=0;i<$scope.info.length;i++){
                if(($scope.info[i].name == $scope.addMe().name)||
                    ($scope.info[i].tel == $scope.addMe().tel)){
                    alert("name or telphone number was repeated");
                    return false;
                }
            }

            DataProvider.addSubscriber($scope.addMe());
            $scope.info = DataProvider.getAllSubscribers();
            window.location.href = "#!/subscribers";
        };

     }
    phonebookApp.controller("AddController",["$scope",'DataProvider',AddController]);
})();