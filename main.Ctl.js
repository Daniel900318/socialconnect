angular.module('myApp')    
    .controller('MainController', function($rootScope, $scope, $state, $http) {
        
    	$scope.gojuice = function (){
            $state.go('juice');
            $scope.juicestyle = {'display':'block'};
            // $rootScope.isjuice = true;
        }
        $scope.gobasket = function(){
            $state.go('basket');
        }
        $scope.gobuy = function(){
            $state.go('buy')
        }
        $scope.gopaper = function() {
            $state.go('paper');
        }

    	$scope.profile = function() {
          
          $state.go('profileperson');
          $state.go('profileperson.aboutyou');
        };
        $scope.photo = function () {
        	$state.go("discoverhome");
        };
        $scope.goPhoto = function () {
            $state.go('photohome');
        };

        var navArr = [
        'discover',
        'events',
        'location',
        'photos',
        'music',
        'hotel',
        'restauraunt' 
        ];
        
        $scope.setNavActive = function(str) {
            if(str == 'photos'){
                $scope.importGallery();
                $state.go(str);
                angular.forEach(navArr, function(item) {
                $scope[item] = (str == item);
                });
            }
            else{
                $state.go(str);
                angular.forEach(navArr, function(item) {
                $scope[item] = (str == item);
                });
            }
          
        };

        $scope.discover = true;
        $scope.profilehome = function(){
            // window.alert('profile');
            $state.go('profilehome');
        }

        // get gallery list
        $scope.importGallery = function (){
            var dataObj = {
                };
                var res = $http.post($rootScope.url + 'interface/getAllGallerys', dataObj);
                res.success(function(data, status, headers, config) {
                    if($rootScope.develop){
                        alert(data['result']);
                        $rootScope.eventList = data['result'];                        
                    }
                    else{

                    }
                    
                });
                res.error(function(data, status, headers, config) {
                    if($rootScope.develop){
                        alert( "failure message: " + JSON.stringify({data: data}));    
                    }
                    else{
                        
                    }
                });
        };

    });