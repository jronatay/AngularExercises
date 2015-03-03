/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('expanderModule', []).directive('expander', function () {
    return{
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=expanderTitle'},
        template: '<div>' +
                '<div class="title" ng-click="toggle()">{{title}}</div>' +
                '<div class="body" ng-show="showMe()" ng-transclude></div>' +
                '</div>',
        link: function (scope, element, attrs) {
            scope.showMe = false;

            scope.toggle = function () {
                scope.showMe = !scope.showMe;
            }
        }
    }
});

