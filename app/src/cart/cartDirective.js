angular.module('app')
.directive('cartDirective',function(){
	return {
		template: '<div>' +
				  '<p ng-repeat="obj in items track by $index">{{obj.name}} : {{obj.price}} $</p>'+
				  '<p>summ: {{summ}} $</p>'+
				  '</div>',
		controller: function($scope, shopingCart){
			$scope.items = shopingCart.getItems();
			$scope.summ = shopingCart.summInCart($scope.items);
		}
	};
});