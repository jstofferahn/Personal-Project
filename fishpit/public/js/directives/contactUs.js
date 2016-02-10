angular.module('fishPit')
.directive('contactUs', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/tmpl/contact.html',
        replace: true,
        scope: {
            
        }
    }
})