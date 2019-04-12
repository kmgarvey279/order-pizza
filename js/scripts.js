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

function displayPizza(pizzaToDisplay) {
    var toppingsString = pizzaToDisplay.toppings.join(", ");
    $("#my-pizza-list").append("Size: " + pizzaToDisplay.size + "<br>" + "Crust: " + pizzaToDisplay.crust + "<br>" + "Toppings: " + toppingsString + "<br>" + "<br>");
}

$(document).ready(function() {
  $("form#pizza-input").submit(function(event) {
    event.preventDefault();
    debugger
    var pizzaSize = $("#input-size").val();
    var pizzaCrust = $("#input-crust").val();
    var newPizza = new Pizza(pizzaSize, pizzaCrust);
    var toppingsArr = [];
    $('input[type=checkbox]:checked').each(function() {
      toppingsArr.push($(this).val());
    })
    for (var i = 0; i < toppingsArr.length; i++) {
      var toppingToAdd = toppingsArr[i];
      newPizza.addTopping(toppingToAdd)
    }
    newOrder.addPizza(newPizza);
    displayPizza(newPizza);
    // $('input:checkbox[name=type]:checked').each(function() {
    //   toppingsArr.push($(this).val());
    //   console.log(toppingsArr);
    // })
  })
});
