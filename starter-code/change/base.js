console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('body').html('<h1>Go!</h2>');
  $("#time").text( Date.now() );

})
