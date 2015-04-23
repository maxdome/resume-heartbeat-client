'use strict';

// Serves the app for the application

module.exports = 'controllers/app';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.user = {
            id: null
        };
        $scope.asset = {
            id: null,
            playbackPosition: null
        };
        $scope.token = {
            token: null
        };
        $scope.token = function () {
            console.log($scope.user.id);
            console.log($scope.asset.id);
            $scope.token.token = 'newToken';
        };
        $scope.store = function () {
            console.log($scope.token.token);
            console.log($scope.asset.playbackPosition);
        };
        $scope.get = function () {
            console.log($scope.user.id);
            console.log($scope.asset.id);
        };
    }]);
