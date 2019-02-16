.controller('loginCtrl', function($scope,$http,$ionicPopup,$state,$ionicHistory) {
		$scope.user = {};  //declares the object user
		
		$scope.login = function() {
			str="http://www.website.com/foodcart/server_side/user-details.php?e="+$scope.user.email+"&p="+$scope.user.password;
			$http.get(str)
			.success(function (response){   // if login request is Accepted
			
				// records is the 'server response array' variable name.
				$scope.user_details = response.records;  // copy response values to user-details object.
				
				//stores the data in the session. if the user is logged in, then there is no need to show login again.
				sessionStorage.setItem('loggedin_name', $scope.user_details.u_name);
				sessionStorage.setItem('loggedin_id', $scope.user_details.u_id );
				sessionStorage.setItem('loggedin_phone', $scope.user_details.u_phone);
				sessionStorage.setItem('loggedin_address', $scope.user_details.u_address);
				sessionStorage.setItem('loggedin_pincode', $scope.user_details.u_pincode);
				
				// remove the instance of login page, when user moves to profile page.
				// if you dont use it, you can get to login page, even if you are already logged in .
				$ionicHistory.nextViewOptions({
					disableAnimate: true,
					disableBack: true
				});
				
				//in my FoodKart App, it checks the page from where the user logs in.
				//if it is from the check out, then after login, the check out page will be shown.
				//else normal profile page will be shown
				
				lastView = $ionicHistory.backView();
				if(lastView.stateId=="checkOut"){ $state.go('checkOut', {}, {location: "replace", reload: true}); }
				else{$state.go('profile', {}, {location: "replace", reload: true});}
				
				
			}).error(function() {   						//if login failed
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					});
			});
		};
		
})
