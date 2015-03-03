/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 var myApp = angular.module('myApp', []);
 myApp.factory('Data', function () {
 return {message: "I'm data from service"};
 });
 myApp.filter('reverse', function (Data) {
 return function (text) {
 return text.split("").reverse().join("") + " " + Data.message;
 };
 });
 function firstCtrl($scope, Data) {
 $scope.data = Data;
 }
 
 function secondCtrl($scope, Data) {
 $scope.data = Data;
 
 
 }
 
 var app=angular.module('superhero',[])
 
 app.directive('superman',function(){
 return{
 restrict:"E",
 template:"<div>Here I am to save the day</div>"
 };
 }); */
/*
 var app = angular.module('superhero', [])
 
 app.directive('superman',function(){
 return{
 restrict:"A",
 link:function(){
 alert("I'm Working!");
 }
 };
 })
 
 app.directive('superman',function(){
 return{
 restrict:"C",
 link:function(){
 alert("I'm Working!");
 }
 }; 
 });
 
 app.directive('superman', function () {
 return{
 restrict: "A",
 link: function () {
 alert("I'm working stronger!");
 }
 };
 });
 app.directive('flash', function () {
 return{
 restrict: "A",
 link: function () {
 alert("I'm working faster!");
 }
 };
 });
 
 var behaviorApp = angular.module('behaviorApp', [])
 behaviorApp.directive('enter', function () {
 return function (scope, element, attrs) {
 element.bind('mouseenter', function () {
 element.addClass(attrs.enter);
 console.log("I'm inside of you");
 });
 
 };
 });
 behaviorApp.directive('leave', function () {
 return function (scope, element, attrs) {
 element.bind('mouseleave', function () {
 element.removeClass(attrs.enter);
 console.log("I'm leaving of a jet plane!");
 });
 
 };
 });
 
 var app = angular.module("twitterApp", []);
 app.controller('AppCtrl', function ($scope) {
 $scope.loadMoreTweets = function () {
 alert("loading tweets!");
 }
 $scope.deleteTweets=function(){
 alert("Deleting Tweets");
 }
 })
 app.directive('enter', function () {
 return function (scope, element, attrs) {
 element.bind("mouseenter", function () {
 scope.$apply(attrs.enter);
 })
 }
 })
 
 var app = angular.module('superApp', []);
 app.directive("superhero", function () {
 return{
 restrict: "E",
 scope:{},
 controller: function ($scope) {
 $scope.abilities = [];
 
 this.addStrength = function () {
 $scope.abilities.push("strength");
 };
 
 this.addSpeed = function () {
 $scope.abilities.push("speed");
 };
 
 this.addFlight = function () {
 $scope.abilities.push("flight");
 };
 
 },
 link: function (scope, element) {
 element.addClass("button");
 element.bind("mouseenter", function () {
 console.log(scope.abilities);
 });
 }
 };
 });
 
 app.directive('strength', function () {
 return{
 require: "superhero",
 link: function (scope, element, attrs, superHeroCtrl) {
 superHeroCtrl.addStrength();
 }
 };
 });
 
 app.directive('speed', function () {
 return{
 require: "superhero",
 link: function (scope, element, attrs, superHeroCtrl) {
 superHeroCtrl.addSpeed();
 }
 };
 });
 
 app.directive('flight', function () {
 return{
 require:"superhero",
 link:function(scope,element,attrs,superHeroCtrl){
 superHeroCtrl.addFlight();
 }
 };
 });
 
 
 var app = angular.module("phoneApp",[]);
 app.controller('appCtrl',function($scope){
 
 });
 app.directive('panel',function(){
 return{
 restrict:'E',
 transclude:true,
 template:'<div class="panel" ng-transclude>This is a panel Component</div>' 
 };
 
 });
 
 
 var app = angular.module('app', []);
 app.directive('clock', function () {
 return{
 restrict: 'E',
 scope: {
 timeZone: "@"
 },
 template: '<div>12:00pm {{timeZone}}</div>'
 };
 });
 
 app.directive('panel', function () {
 return{
 restrict: 'E',
 transclude: true,
 scope: {
 title: "@"
 },
 template: "<div style='border: 3px solid #000000'>" +
 "<div class='alert-box'>{{title}}</div>" +
 "<div ng-transclude></div></div>"
 };
 });
 
 
 
 
 var app = angular.module('app', []);
 
 app.directive('country', function () {
 return{
 restrict: 'E',
 controller: function () {
 this.makeAnnouncement = function (message) {
 console.log("Country says " + message);
 };
 
 }
 
 };
 });
 
 app.directive('state', function () {
 return{
 restrict: 'E',
 controller: function () {
 this.makeLaw = function (law) {
 console.log("Law " + law);
 };
 }
 };
 });
 
 app.directive('city', function () {
 return{
 restrict: 'E',
 require: ["^country","^state"],
 link: function (scope, element, attrs, ctrls) {
 ctrls[0].makeAnnouncement("This city rocks!");
 ctrls[1].makeLaw("Jump Higher!");
 }
 };
 });
 
 

var app = angular.module('choreApp', []);

function choreCtrl($scope) {
    $scope.logChore = function (chore) {
        alert(chore + " is done!");
    };
}

app.controller('choreCtrl', choreCtrl);
app.directive('kid', function () {
    return{
        restrict: 'E',
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore">{{chore}}' +
                '{{chore}}' +
                '<div class="button" ng-click="done({chore: chore})">I\'m done! </div>'
    };
});

*/