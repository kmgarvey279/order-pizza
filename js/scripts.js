// Business Logic

//Order Object Logic
function Order() {
  this.pizzas = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.addDelivery = function() {
  this.delivery = true;
}

Order.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  this.pizzas.forEach(function(pizza) {
    totalPrice = totalPrice + pizza.price;
  })
  if (this.delivery === true) {
    totalPrice = totalPrice + 4;
  }
  this.totalPrice = totalPrice;
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

Pizza.prototype.getPizzaPrice = function() {
  this.price = 0;
  if (this.size === "Small") {
    this.price = this.price + 8;
  } else if (this.size === "Medium") {
    this.price = this.price + 10;
  } else if (this.size === "Large") {
    this.price = this.price + 12;
  } else {
    this.price = this.price + 14;
  }
  if (this.crust === "Gluten Free") {
    this.price = this.price + 2;
  } else if (this.crust === "Thin") {
    this.price = this.price - 1;
  } else if (this.crust === "Deep Dish") {
    this.price = this.price + 3;
  } else {
    this.price = this.price;
  }
  for (var i = 0; i < this.toppings.length; i++) {
    this.price = this.price + 1;
  }
  return this.price;
}


// Front End Logic
var newOrder= new Order();

function displayPizza(pizzaToDisplay) {
    var toppingsString = pizzaToDisplay.toppings.join(", ");
    $("#my-pizza-list").append("<br>" + "Size: " + pizzaToDisplay.size + "<br>" + "Crust: " + pizzaToDisplay.crust + "<br>" + "Toppings: " + toppingsString + "<br>" + "$" + pizzaToDisplay.price + ".00" + "<br>");
}

function displayTotalPrice() {
  if (newOrder.delivery === true) {
  $("#delivery-charge").empty().append("Delivery Charge: $4.00" + "<br>")
  }
  $("#my-order-total").empty().append("<br>" + "Total: $" + newOrder.totalPrice + ".00")
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
    newPizza.getPizzaPrice();
    newOrder.addPizza(newPizza);
    displayPizza(newPizza);
    newOrder.getTotalPrice();
    displayTotalPrice();
  });

  $("#delivery-btn").click(function(event) {
    event.preventDefault();
    $("#hide-form").show();
    $("#takeout-buttons").hide();
    newOrder.addDelivery();
  });
  $("#confirmBtn").click(function(event) {
    event.preventDefault();
    alert("Thank you for your order! Your pizzas will be ready for pickup or delivery within 20 minutes.")
    location.reload();
  });
});
