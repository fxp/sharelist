'use strict';

angular.module('myApp.view1', ['ngRoute', 'leancloud'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function () {


    }])

    .controller('LoginController', function ($scope, $http, $mdDialog, leanData) {
        console.log(leanData.apiPath);

        // $scope.todos = function () {
        //     var req = {
        //         method: 'POST',
        //         url: 'https://api.leancloud.cn/1.1/classes/Todo',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'X-LC-Id': 'KT9PinGjF3SxsdvYP9iFSk6W-gzGzoHsz',
        //             'X-LC-Key': 'B7YpSoS0jy600oBfLQNJtSrb',
        //             'X-LC-Session': 'rwy1a3614dhaqmrocw3ll499i',
        //             // "Access-Control-Allow-Origin": "*",
        //             // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        //         },
        //         data: {
        //             "title": "ua"
        //         }
        //     }
        //     $http(req).then(function (data) {
        //         console.log(data);
        //     }, function (err) {
        //         console.log(err);
        //     });
        // }
        // $scope.login = function () {
        // }
        //
        // var global = {}
        //
        // function DialogController($scope, $mdDialog) {
        //     $scope.hide = function () {
        //         $mdDialog.hide();
        //     };
        //     $scope.cancel = function () {
        //         $mdDialog.cancel();
        //     };
        //     $scope.answer = function (answer) {
        //         $mdDialog.hide(answer);
        //     };
        //     $scope.getVerificationCode = function () {
        //         console.log($scope.user.phoneno);
        //         var req = {
        //             method: 'POST',
        //             url: 'https://api.leancloud.cn/1.1/requestSmsCode',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'X-LC-Id': 'KT9PinGjF3SxsdvYP9iFSk6W-gzGzoHsz',
        //                 'X-LC-Key': 'B7YpSoS0jy600oBfLQNJtSrb'
        //             },
        //             data: {mobilePhoneNumber: $scope.user.phoneno}
        //         }
        //         $http(req).then(function (data) {
        //             console.log(data);
        //         }, function (err) {
        //             console.log(err);
        //         });
        //     };
        //     $scope.loginWithVerificationCode = function () {
        //         console.log($scope.user.phoneno);
        //         console.log($scope.user.verificationCode);
        //         var req = {
        //             method: 'POST',
        //             url: 'https://api.leancloud.cn/1.1/usersByMobilePhone',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'X-LC-Id': 'KT9PinGjF3SxsdvYP9iFSk6W-gzGzoHsz',
        //                 'X-LC-Key': 'B7YpSoS0jy600oBfLQNJtSrb'
        //             },
        //             data: {
        //                 mobilePhoneNumber: $scope.user.phoneno,
        //                 smsCode: $scope.user.verificationCode
        //             }
        //         }
        //         $http(req).then(function (data) {
        //             global.sessionToken = data.sessionToken;
        //         }, function (err) {
        //             console.log(err);
        //         });
        //
        //         $mdDialog.hide();
        //     }
        // }
        //
        // $scope.showAdvanced = function (ev) {
        //     $mdDialog.show({
        //             controller: DialogController,
        //             templateUrl: 'components/dialog.html',
        //             targetEvent: ev,
        //             clickOutsideToClose: true,
        //             fullscreen: true
        //         })
        //         .then(function (answer) {
        //             $scope.status = 'You said the information was "' + answer + '".';
        //         }, function () {
        //             $scope.status = 'You cancelled the dialog.';
        //         });
        // };
    });