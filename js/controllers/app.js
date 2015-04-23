'use strict';

// Serves the app for the application

module.exports = 'controllers/app';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.app = {
            user_id: null,
            asset_id: null,
            token: null,
            playbackPosition: null,
            query: null
        };
        $scope.token = function () {
            $http.post(server + '/token', { user_id: $scope.app.user_id, asset_id: $scope.app.asset_id })
                .success(function (data) {
                    $scope.app.token = data;
                });
        };
        $scope.store = function () {
            $http.post(server + '/store', { token: $scope.app.token, playbackPosition: $scope.app.playbackPosition });
        };
        $scope.get = function () {
            $http.get(server + '/load/' + $scope.app.user_id + '/' + $scope.app.query)
                .success(function (data) {
                    $scope.app.playbackPosition = data;
                });
        };
    }]);
