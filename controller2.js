.controller('profileCtrl', function($scope,$rootScope,$ionicHistory,$state) {
	
		// loads value from the loggin session
		$scope.loggedin_name= sessionStorage.getItem('loggedin_name');
		$scope.loggedin_id= sessionStorage.getItem('loggedin_id');
		$scope.loggedin_phone= sessionStorage.getItem('loggedin_phone');
		$scope.loggedin_address= sessionStorage.getItem('loggedin_address');
		$scope.loggedin_pincode= sessionStorage.getItem('loggedin_pincode');
		
		//logout function
		$scope.logout=function(){
		
				//delete all the sessions 
				delete sessionStorage.loggedin_name;
				delete sessionStorage.loggedin_id;
				delete sessionStorage.loggedin_phone;
				delete sessionStorage.loggedin_address;
				delete sessionStorage.loggedin_pincode;
				
				// remove the profile page backlink after logout.
				$ionicHistory.nextViewOptions({
					disableAnimate: true,
					disableBack: true
				});
				
				// After logout you will be redirected to the menu page,with no backlink
				$state.go('menu', {}, {location: "replace", reload: true});
		};
})


