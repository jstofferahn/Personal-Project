angular.module('fishPit')
.directive('menuItem', function (){
    return {
        restrict: 'E',
        templateUrl: './js/tmpl/menu.html',
        controller: function($scope, menuService) {
            $scope.searchData = function(){
           
            menuService.getData().then(function(res){
                $scope.food = res
                
            })
       }
       $scope.addData = function(product){
        //    console.log(name, description, price);
            menuService.postData(product).then(function(res){
               $scope.searchData();
               $scope.addName = '';
               $scope.addDescription = '';
               $scope.addPrice = '';
           })
       }
       $scope.deleteData = function(id) {
           
            menuService.removeData(id);
           $scope.searchData()
           
           
               
           
       }
       
       $scope.changeData = function(data) {
            menuService.changeData(data);
           
           
       }
       
       $scope.searchData();
        },
        scope: {
            images: '='
        }
    }
})