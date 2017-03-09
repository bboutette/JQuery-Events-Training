console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('body').append('<h2>Go!</h2>');
  $("#time").text( Date.now() );

  $(function() {
  $('#right').keydown function(evt){
        var numVal1 = $('#left').val();
        var numVal2 = $('#right').val();
        var result = parseInt(numVal1) + parseInt(numVal2);
        if(!isNaN(result) &&
        if(evt.keyCode == 9) {
           $('#total').val() = result;
        })
    })
})
  // $('#btn-show').keyup(function() {
  //     var firstName = $('#fname').val();
  //     var lastName = $('#lname').val();
  //
  //     $('#first').text(firstName);
  //     $('#last').text(lastName);
