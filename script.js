//var time = "2020-04-25T18:00:00";
var countDownDate = ["Jan 5, 2021 15:37:25", "Aug 5, 2021 15:37:25", "Feb 12, 2021 15:37:25"]
//alert(countDownDate)

function returnTime ($time, $id){
	var countDate = new Date($time).getTime();
    // Set the date we're counting down to
    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
      // Output the result in an element with id="demo"
      var result = days + "d " + hours + "h "  + minutes + "m " + seconds + "s ";
      $("#div"+$id).text(result)
      //console.log($id)
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        //document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
	
}
function init(){
  //returnTime(countDownDate[0])
    $("#timer").html("");
    for(var i =0 ; i<countDownDate.length; i++ ){
      var res = 
      '<img src="https://lh3.googleusercontent.com/proxy/xLOQKM2aCMvmtU4cUeq3YKUKG-tG_l1UFCQ5Fd05MxbkbaT7zpFm7DUglwixFhJSTNhJ0YbjZteCcqqy46_CFh6FM6WorFKJWwXQOgl_jjThV89rvBGeVrWV5iM9KZU_GgBh2EuZMlvadqSafa6elx1D8YgfAh8-oUhzQpLg_eGZbmy_W7JgBmG7Qbo" width="100" heigh="100" alt=""/>'+
      '<div id="div'+i+'">'+returnTime(countDownDate[i], i)+'</div>';
      $("#timer").append(res)
    }

}

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
  init()
});
