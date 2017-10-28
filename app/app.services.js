angular.module('app')
.factory('shopingCart', function(){
    var items = [];
    var products = [
        {
            id: '1',
            name: 'Product1',
            description: 'about product 1',
            price: '100'
        },
        {
            id: '2',
            name: 'Product2',
            description: 'about product 2',
            price: '200'
        },
        {
            id: '3',
            name: 'Product3',
            description: 'about product 3',
            price: '300'
        },
        {
            id: '4',
            name: 'Product4',
            description: 'about product 4',
            price: '400'
        },
        {
            id: '5',
            name: 'Product5',
            description: 'about product 5',
            price: '500'
        },
    ];
    return{
        getItems: function(){
            return items;
        },
        getItemsCount: function(){
            return items.length;
        },
        getAllProducts: function(){
            return products; 
        },
		getProductById: function(id){
			var obj;
            products.forEach(function(el){
                if(el.id == id){
                    obj = el
                }
            })
			return obj
		},
		addToCart: function(id){
            products.forEach(function(el){
                if(el.id == id){
                    items.push(el)
                }
            })
		},
		checkout: function(){
			items = [];
        },
        summInCart: function(items){
            var summ = 0;
            items.forEach(function(el){
                summ += +el.price
            })
            return summ
        }
    };
})