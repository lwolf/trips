'use strict';
tripsApp.controller('mainController', function mainController($scope){
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false,
            lat: 48.8567,
            lng: 2.3508,
            zoom: 11
        }
    });
});