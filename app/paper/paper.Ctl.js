angular.module('myApp')    
    .controller('paperController', function($rootScope, $scope, $state) {
        $scope.blog1 = function(){
        	$state.go('blog1');	
        }

        $scope.blog2 = function(){
        	$state.go('blog2');	
        }
        $scope.blog3 = function(){
        	$state.go('blog3');	
        }
        
    	

    });
