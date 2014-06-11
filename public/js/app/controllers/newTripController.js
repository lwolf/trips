'use strict';
tripsApp.controller('newTripController', function newTripController ($scope, $modal) {
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            controller: 'newTripInstanceController',
            templateUrl: '/public/js/app/views/newTripModal.html',
            size: size
        });
        console.log(modalInstance);
        console.log('modal opened');
        modalInstance.result.then(function (trip) {
            $scope.new_trip = trip;
            console.log($scope.new_trip);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
});

tripsApp.controller('newTripInstanceController', function newTripInstanceController($scope, $modalInstance){
  $scope.new_trip = {
    item: 'bla'
  };

  $scope.ok = function () {
    console.log('OK');
    $modalInstance.close($scope.new_trip);
  };

  $scope.cancel = function () {
    console.log('cancel');
    $modalInstance.dismiss('cancel');
  };
});