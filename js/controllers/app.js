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
            $http.post(server + '/token', { user_id: $scope.user.id, asset_id: $scope.asset.id })
                .success(function (data) {
                    $scope.token.token = data;
                });
        };
        $scope.store = function () {
            $http.post(server + '/store', { token: $scope.token.token, playbackPosition: $scope.asset.playbackPosition });
        };
        $scope.get = function () {
            $http.get(server + '/get/' + $scope.user.id + '/' + $scope.asset.id)
                .success(function (data) {
                    $scope.asset.playbackPosition = data;
                });
        };
    }]);
