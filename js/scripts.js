$(document).ready(function() {
  $("form#pizza-input").submit(function(event) {
    event.preventDefault();
    alert("test");
    var pizzaSize = $("#input-size").val();
    var pizzaCrust = $("#input-crust").val();
    var toppingsArr = []
    $('input:checkbox[name=type]:checked').each(function() {
      toppingsArr.push($(this).val());
      console.log(toppingsArr);
    })
  })
});
