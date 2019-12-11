
    var add = function(number1, number2) {
      return number1 + number2;
     };
     var subtract = function(number1, number2) {
      return number1 - number2;
     };
     var multiply = function(number1, number2) {
      return number1 * number2;
     };
     var divide = function(number1, number2) {
      return number1 / number2;
     };
     $(document).ready(function() {
       $("form#add").submit(function(event){
         event.preventDefault();
         var number1 = parseInt($("#x").val());
var number2 = parseInt($("#y").val());
         alert(add(number1, number2));
        })
         $("#subtract").submit(function(event){
          event.preventDefault();
          var number1 = parseInt($("#x").val());
 var number2 = parseInt($("#y").val());
          alert(subtract(number1, number2));
          preventDefault();
        })  
        $("#multiply").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#x").val());
 var number2 = parseInt($("#y").val());
          alert(multiply(number1, number2));
          preventDefault();
        })
        }

     })    