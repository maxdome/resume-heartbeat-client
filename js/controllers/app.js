'use strict';

// Serves the app for the application

module.exports = 'controllers/app';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    }]);
