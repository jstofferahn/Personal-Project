angular.module('fishPit')
.directive('picGallery', function (){
    return {
        restrict: 'E',
        templateUrl: './js/tmpl/gallery.html',
        controller: function($scope, galleryService) {
            $scope.searchData = function(){
           
            galleryService.getData().then(function(res){
                $scope.gallery = res
                
            })
       }
       $scope.addData = function(product){
        //    console.log(name, description, price);
            galleryService.postData(product).then(function(res){
               $scope.searchData();
               $scope.addImage = '';
              
           })
       }
       $scope.deleteData = function(id) {
           
            galleryService.removeData(id);
           $scope.searchData()
           
           
               
           
       }
       
       $scope.changeData = function(data) {
            galleryService.changeData(data);
           
           
       }
       
       $scope.searchData();
        },
        scope: {
            images: '='
        }
    }
})
