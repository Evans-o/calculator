
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
       $("#add").submit(function(event){
         event.preventDefault();
         var number1 = parseInt($("#x").val());
var number2 = parseInt($("#y").val());
         var result=add(number1, number2);
         $("#output").text(result);
        })
         $("#subtract").submit(function(event){
          event.preventDefault();
          var number1 = parseInt($("#x").val());
 var number2 = parseInt($("#y").val());
          var result=subtract(number1, number2);
          $("#output").text(result);
        })  
        $("#multiply").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#x").val());
 var number2 = parseInt($("#y").val());
          var result= multiply(number1, number2);
          $("#output").text(result);
          
        })
     })    