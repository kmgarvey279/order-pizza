// Business Logic

//Order Object Logic
function Order() {
  this.pizzas = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.getTotalPrice = function() {
  this.pizzas.push(pizza);
}


//Pizza Object Logic
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

// Pizza.prototype.getPizzaPrice() = function() {
//   this.
// }


// Front End Logic
var newOrder= new Order();

function displayOrder(orderToDisplay) {
  orderToDisplay.pizzas.forEach(function(pizza) {
    $("#my-pizza-list").append(pizza.size + pizza.crust)
  })
}

$(document).ready(function() {
  $("form#pizza-input").submit(function(event) {
    event.preventDefault();
    alert("test");
    var pizzaSize = $("#input-size").val();
    var pizzaCrust = $("#input-crust").val();
    var toppingsArr = []
    var newPizza = new Pizza(pizzaSize, pizzaCrust);
    newOrder.addPizza(newPizza);
    displayOrder(newOrder);
    // $('input:checkbox[name=type]:checked').each(function() {
    //   toppingsArr.push($(this).val());
    //   console.log(toppingsArr);
    // })
  })
});
