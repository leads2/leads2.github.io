jQuery(document).ready(function(){
jQuery("#top_form").submit(function (e) {
$.ajax({
  type: "POST",
  url: "/paymentcloud.php",
  data: { 
full_name: jQuery("#firstname").val()+' '+jQuery('#lastname').val(), 
email: jQuery("#email").val(),
phone_number : jQuery("#phone").val(),
current_processing : jQuery("#process:checked").val()
},
  async:false
});

});


jQuery("#bottom_form").submit(function (e) {
$.ajax({
  type: "POST",
  url: "/paymentcloud.php",
  data: { 
full_name: jQuery("#firstname2").val()+' '+jQuery('#lastname2').val(), 
email: jQuery("#email2").val(),
phone_number : jQuery("#phone2").val()
},
  async:false
});

});



});