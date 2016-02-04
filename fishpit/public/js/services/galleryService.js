angular.module('fishPit').service('galleryService', function($http){
        this.getData = function(){
            console.log('hi')
            return $http({
                method: 'GET',
                url: '/api/pictures'
            }).then(function(response){
                console.log(response.data)
                return response.data
                
            })
            
         }
         
         this.postData = function(product) {
             return $http({
                 method: 'POST',
                 url: '/api/pictures',
                 data: product
             }).then(function(response){
                 console.log('data')
                 return response
             })
         }
         this.removeData = function(id) {
             return $http({
                 method: 'DELETE',
                 url: 'api/pictures/' + id
             }).then(function(response){
                 
                 return response.data
             })
             
         }
         
         this.changeData = function( data) {
             return $http({
                 method: 'PUT',
                 url: 'api/pictures/' + data._id,
                 data: data
             }).then(function(response){
                 return response.data
             })
         }
})