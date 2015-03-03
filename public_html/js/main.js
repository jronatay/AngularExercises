/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
    return {message: "I'm data from service"};
});
myApp.filter('reverse', function (Data) {
    return function (text) {
        return text.split("").reverse().join("") +" "+ Data.message;
    };
});
function firstCtrl($scope, Data) {
    $scope.data = Data;
}

function secondCtrl($scope, Data) {
    $scope.data = Data;
    

}
