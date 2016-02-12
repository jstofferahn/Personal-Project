angular.module('fishPit').service('adminService', function ($http) {
    this.login = function (data) {
        return $http({
            method: 'POST',
            url: '/api/login',
            data: {
                username: data.username,
                password: data.password
            }
        }).then(function (response) {
            var user = response.data;
            user.login = true
            return user;
        }).catch(function (err) {
            return { login: false }
        })
    };

    this.logOutUser = function () {
        return $http({
            method: 'GET',
            url: '/api/products'
        }).then(function (response) {
            return response.data
        })
    }


})