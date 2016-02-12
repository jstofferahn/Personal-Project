angular.module('fishPit')
    .directive('sliderPic', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/tmpl/carousel.html',
            controller: function ($scope) {
                $('.slider').slider({ full_width: true, height: 1000, indicators: false, transition: 1500, interval: 4000 });



            },
            scope: {
                images: '='
            }
        }
    })