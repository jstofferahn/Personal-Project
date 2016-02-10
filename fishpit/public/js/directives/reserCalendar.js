angular.module('fishPit')
.directive('reservationCalendar', function (){
    return {
        restrict: 'E',
        templateUrl: './js/tmpl/calendarTmpl.html',
         
         scope: {
            
            timeslot: '=',
            date: '=',
            getReserData: '&'
        },
        controller: function($scope, calendarService) {
           
           $scope.res = 3 - $scope.timeslot.res.length
           
           $scope.hour = $scope.timeslot.time.hour
            $scope.getReserData()
            
            $scope.addResData = function(reservation, time) {
                reservation.date = {day: $scope.date.getDate(), month: $scope.date.getMonth()+ 1, year: $scope.date.getFullYear()}
                
                reservation.time = {hour: $scope.hour, minute: $scope.timeslot.time.minute}
                calendarService.postResData(reservation).then(function(res){
                    console.log(reservation)
                    $scope.addCustomer = '';
                    $scope.getReserData()
                    
                })
            }
            
           
            
            
            
            
            //  $('.modal-trigger').leanModal();
             
            
            
            
        },
    link:function(scope,elem,attrs, calendarService){
        elem.find('.modal-trigger').leanModal();
        
    }
       
    
    }
    
})