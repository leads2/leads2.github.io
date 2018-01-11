(function () {

    var App = {

        init: function () {

            this.agents();

        },

        agents: function () {

            if (typeof (document.getElementById('availability')) != 'undefined' && document.getElementById('availability') != null) {
                var availability = document.getElementById('availability');
                var agents_container = document.getElementById('agents');
                function setnumber(){
                    var e = 3 + Math.floor ( 10 * Math.random() );
                    if ( e === 1 ) {
                        agents_container.innerHTML = e + ' agent';
                    } else {
                        agents_container.innerHTML = e + ' agents';
                    }
                }
                function printNumbersInterval() {
                    setnumber();
                    if ( availability.className === '' ) {
                        availability.className += 'started';
                    }
                    var timerId = setInterval(function() {
                        setnumber();
                    }, 8000);

                }
                printNumbersInterval();
            }

        },

    };
    App.init();

})();

$(document).ready(function(){


    // Top form

    $("#top_form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#firstname").val() + '%20' + $("#lastname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        if ($("#process").is(':checked')){
            var process = "yes";
        }else{
            var process = "no";
        }

        $.ajax({
            type: "POST",
            url: "php/form-process.php",
            data: "name=" + name + "&email=" + email + "&phone=" + phone + "&process=" + process,
            success : function(text){
                if (text == "success"){
                //  formSuccess();
                    jQuery.post( "/paymentcloud.php", { 
                        full_name: jQuery("input[name*='consult-name']").val(), 
                        email: jQuery("input[name*='consult-email']").val(),
                        phone_number : jQuery("input[name*='consult-phone']").val(),
                        current_processing : jQuery("input[name*='radio-167']:checked").val()
                    } );
                    window.location.href = "http://paymentcloudinc.com/thank-you/";
                } else {
                    formError();
                }
            }
        });
    }

    function formSuccess(){
        $("#top_form")[0].reset();
        $('body').append('<div class="success"><div class="text"><span class="big">Thank you</span><span class="small">your message was successfully sent</span></div></div>');
        setTimeout(function() {
            $('.success').remove();
        }, 2000);
    }

    function formError(){
        $("#top_form").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }


    // Bottom form
    
    $("#bottom_form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError2();
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm2();
        }
    });

    function submitForm2(){
        // Initiate Variables With Form Content
        var name = $("#firstname2").val() + '%20' + $("#lastname2").val();
        var email = $("#email2").val();
        var phone = $("#phone2").val();

        $.ajax({
            type: "POST",
            url: "php/form-process2.php",
            data: "name=" + name + "&email=" + email + "&phone=" + phone,
            success : function(text){
                if (text == "success"){
                //  formSuccess2();
                    jQuery.post( "/paymentcloud.php", { 
                        full_name: jQuery("input[name*='consult-name']").val(), 
                        email: jQuery("input[name*='consult-email']").val(),
                        phone_number : jQuery("input[name*='consult-phone']").val(),
                        current_processing : jQuery("input[name*='radio-167']:checked").val()
                    } );
                    window.location.href = "http://paymentcloudinc.com/thank-you/";
                } else {
                    formError2();
                }
            }
        });
    }

    function formSuccess2(){
        $("#bottom_form")[0].reset();
        $('body').append('<div class="success"><div class="text"><span class="big">Thank you</span><span class="small">your message was successfully sent</span></div></div>');
        setTimeout(function() {
            $('.success').remove();
        }, 2000);
    }

    function formError2(){
        $("#bottom_form").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }
    
});