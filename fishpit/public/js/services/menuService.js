angular.module('fishPit').service('menuService', function ($http) {
    this.getData = function () {

        return $http({
            method: 'GET',
            url: '/api/products'
        }).then(function (response) {

            return response.data

        })

    }

    this.postData = function (product) {
        return $http({
            method: 'POST',
            url: '/api/products',
            data: product
        }).then(function (response) {

            return response
        })
    }
    this.removeData = function (id) {
        return $http({
            method: 'DELETE',
            url: 'api/products/' + id
        }).then(function (response) {

            return response.data
        })

    }

    this.changeData = function (data) {
        return $http({
            method: 'PUT',
            url: 'api/products/' + data._id,
            data: data
        }).then(function (response) {
            return response.data
        })
    }
})