$(function(){
    console.log('ok');
   setInterval(function () {
       $.get('../../data.txt', function(data) {
           alert(data);
       }, "text");
   }, 1000);
});