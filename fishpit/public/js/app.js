angular.module('fishPit', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('reservations', {
                url: '/reservations',
                templateUrl: 'js/tmpl/reservations.html',
                resolve: {
                    reservations: function (calendarService) {
                        var currentDate = new Date()
                        var year = currentDate.getFullYear();
                        var month = currentDate.getMonth() + 1;
                        var day = currentDate.getDate()


                        return calendarService.getResData(year, month, day)
                    },
                    date: function () {
                        return new Date()

                    }



                },
                controller: function ($scope, reservations, date, calendarService) {
                    $scope.date = date
                    $scope.newDate = new Date();
                    $scope.times = [{ time: { hour: 11, minute: 0 }, res: [] },
                        { time: { hour: 12, minute: 0 }, res: [] },
                        { time: { hour: 1, minute: 0 }, res: [] },
                        { time: { hour: 2, minute: 0 }, res: [] },
                        { time: { hour: 3, minute: 0 }, res: [] },
                        { time: { hour: 4, minute: 0 }, res: [] },
                        { time: { hour: 5, minute: 0 }, res: [] },
                        { time: { hour: 6, minute: 0 }, res: [] },
                        { time: { hour: 7, minute: 0 }, res: [] },
                        { time: { hour: 8, minute: 0 }, res: [] },
                        { time: { hour: 9, minute: 0 }, res: [] }]
                    $scope.getReserData = function () {

                        calendarService.getReservationData().then(function (response) {
                            var reservationsDate = []
                            for (var i = 0; i < response.length; i++) {

                                if (response[i].date.day === $scope.newDate.getDate() && response[i].date.month === $scope.newDate.getMonth() + 1 && response[i].date.year === $scope.newDate.getFullYear()) {
                                    reservationsDate.push(response[i])
                                }
                            }
                            for (var i = 0; i < reservationsDate.length; i++) {
                                if (reservationsDate[i].time.hour === 11) {

                                    $scope.times[0].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 12) {

                                    $scope.times[1].res.push(reservationsDate[i])

                                }
                                if (reservationsDate[i].time.hour === 1) {
                                    $scope.times[2].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 2) {
                                    $scope.times[3].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 3) {
                                    $scope.times[4].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 4) {
                                    $scope.times[5].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 5) {
                                    $scope.times[6].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 6) {
                                    $scope.times[7].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 7) {
                                    $scope.times[8].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 8) {
                                    $scope.times[9].res.push(reservationsDate[i])
                                }
                                if (reservationsDate[i].time.hour === 9) {
                                    $scope.times[10].res.push(reservationsDate[i])
                                }
                            }
                        })
                    }



                    $scope.times.forEach(function (time) {
                        reservations.forEach(function (reservation) {
                            if (time.time.hour === reservation.time.hour) {
                                time.res.push(reservation)
                            }
                        })

                    })








                }
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'js/tmpl/admin.html',
                controller: 'adminCtrl',
                link: function (scope, elem, attrs, calendarService) {
                    elem.find('#modal1').openModal();
                }
            })

            .state('home', {
                url: '/',
            })
        $urlRouterProvider
    })


 
     
