angular.module('fishPit')
    .directive('menuItem', function () {
        return {
            restrict: 'E',
            templateUrl: './js/tmpl/menu.html',
            controller: function ($scope, menuService) {
                $scope.searchData = function () {

                    menuService.getData().then(function (res) {
                        $scope.food = res

                    })
                }
                $scope.addData = function (product) {
                    //    console.log(name, description, price);
                    menuService.postData(product).then(function (res) {
                        $scope.searchData();
                        $scope.addName = '';
                        $scope.addDescription = '';
                        $scope.addPrice = '';
                        $scope.addImage = ''
                    })
                }
                $scope.deleteData = function (id) {

                    menuService.removeData(id);
                    $scope.searchData()




                }

                $scope.changeData = function (data) {
                    menuService.changeData(data);


                }

                $scope.searchData();
            },
            scope: {
                images: '='
            }
        }
    })
    .directive('dots', function () {
        return {
            restrict: "E",
            replace: true,
            template: '<span ng-repeat="dot in dots">.&nbsp</span>',
            scope: {
                title: '=',

            },
            controller: function ($scope) {
                $scope.dots = []
                for (var i = 0; i < 70; i++) {
                    $scope.dots.push({})
                }

                $scope.dots.splice(0, $scope.title.length)

            }
        }
    })