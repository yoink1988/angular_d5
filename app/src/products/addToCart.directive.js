angular.module('app')
.directive('addToCart',function(){
	return {
		controller: function($scope, shopingCart){
			$scope.product = shopingCart.getAllPoducts();
		}
	};
});