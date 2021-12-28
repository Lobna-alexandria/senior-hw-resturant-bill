var y,z  //global variables
$(document).ready(function()
{
  $(".card-img-top").addClass("hvr-grow shadow rounded-5")


  $(".badge").text("0").hide()

$(".fav").click(function(){
//
$(".favCount").show()
$(this).toggleClass("fas text-warning")


var x=$(".favCount").text()

if($(this).hasClass("fas"))
    {x++}
else
    {x--}

$(".favCount").text(x)
});

///////////////////////////////////////////////////////////////////////////////
//var y,z
//modal click
// var m
$(".btn-info").click(function(){
  // $(".purchased-details").text("");
 

  $(".totalAmount").show()
  $(this).toggleClass("btn-danger 1")

  $(this).siblings("span").toggleClass("text-danger fw-bolder")
  
 y=parseInt($(".totalAmount").text()),
   z=parseInt( $(this).siblings("span").text())

   $(this).prev('h5').text("lolo").css({"color": "red", "border": "2px solid red"})
 m= $(this).parent().prev().find("h5").text();
//alert(m)

   if ($(this).hasClass("1"))
 { 
   y += z
   $(".totalAmount").text(y)
 }
   else{
  y -= z
  $(".totalAmount").text(y)

}

$(".modal-body").append( m+ " --------- $ "+ z + "<br>")

$(".purchased-details").append("<p>Appended text</p>")
})
});

function modalTotal()
{
 // $(".total").text( "Total= "+ "--------- $ ")
//alert(y)
$(".total").text( "Total"+ " --------- $ "+(y))

}


  function trash()
  {
$(".fav").removeClass("fas text-warning")
$(".btn-info").removeClass("btn-danger 1")
$(".btn-info").siblings("span").removeClass("text-danger fw-bolder")
y = 0
$(".totalAmount").text(y)
$(".badge").text("0").hide()
$(".modal-body").empty()

  }      

  