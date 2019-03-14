var phonebookApp = angular.module("phonebookApp",["ngRoute"]);
phonebookApp.config(function($routeProvider) {
    $routeProvider
        .when("/addSubscriber",{controller: "AddController", templateUrl: "/app/partials/phonebook_add.html"})
        .when("/subscribers",{controller: "ListController", templateUrl: "/app/partials/phonebook_list.html"})
        .when("/",{redirectTo:"/subscribers"})
        .otherwise({redirectTo: '/404_page'});
});