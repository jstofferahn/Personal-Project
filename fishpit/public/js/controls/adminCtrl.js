angular.module('fishPit')
    .controller('adminCtrl', function ($scope, adminService, $state, galleryService, menuService) {

        $('#modal1').openModal();



        $scope.input = {};

        $scope.signIn = function (data) {
            adminService.login(data).then(function (response) {
                if (response.login === true) {
                    $state.go('admin');
                }
            })
        };

        $scope.signOut = function () {
            adminService.logOutUser().then(function (res) {
                $scope.logOut = res
            })
        }

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
                $scope.addImage = '';
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
       
        //    menu
       
        $scope.searchPicData = function () {

            galleryService.getData().then(function (res) {
                $scope.gallery = res

            })
        }
        $scope.addPicData = function (product) {
            //    console.log(name, description, price);
            galleryService.postData(product).then(function (res) {
                $scope.searchPicData();
                $scope.addImage = '';

            })
        }
        $scope.deletePicData = function (id) {

            galleryService.removeData(id);
            $scope.searchPicData()




        }

        $scope.changePicData = function (data) {
            galleryService.changeData(data);


        }

        $scope.searchPicData();



    })