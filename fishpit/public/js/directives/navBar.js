angular.module('fishPit')
    .directive('navBar', function () {
        return {
            restrict: 'E',
            templateUrl: './js/tmpl/navBar.html',
            controller: function ($scope, $location, $anchorScroll) {
                $scope.scrollTo = function (id) {
                    $location.hash(id);
                    $anchorScroll()
                }
            }


        }

    })