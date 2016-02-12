angular.module('fishPit').service('calendarService', function ($http) {
    this.getResData = function (year, month, date) {

        return $http({
            method: 'GET',
            url: '/api/reservation/date/' + year + '/' + month + '/' + date
        }).then(function (response) {
            console.log(response.data)
            return response.data

        })

    }
    this.getReservationData = function () {
        return $http({
            method: 'GET',
            url: '/api/reservation'
        }).then(function (response) {
            return response.data
        })
    }

    this.postResData = function (product) {
        console.log(product)
        return $http({
            method: 'POST',
            url: '/api/reservation',
            data: product
        }).then(function (response) {

            return response
        })
    }
    this.removeResData = function (id) {
        return $http({
            method: 'DELETE',
            url: 'api/reservation/' + id
        }).then(function (response) {
            console.log(response.data)
            return response.data
        })

    }

    this.changeResData = function (data) {
        return $http({
            method: 'PUT',
            url: 'api/reservation/' + data._id,
            data: data
        }).then(function (response) {
            console.log(response.data)
            return response.data
        })
    }
})