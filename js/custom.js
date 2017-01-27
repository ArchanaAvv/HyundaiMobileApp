$(document).ready(function () {

    $('.carousel').carousel();
    $("#search-btn").click(function(){
        if($("#zipcode").val()=="" || $("#zipcode").val()==undefined)
            $("#zipcode").css("border-color", "red")
        else
            window.location.href = "find-a-dealer/" + $("#zipcode").val();
    });
    $("#zipcode").focus(function () {
        $("#zipcode").css("border-color", "")
    })
    $(".itemlink").click(function () {
        window.location.href = "find-a-dealer/" + $(this).attr("data-link");
    });
    $(".itemlink2").click(function () {
        window.location.href = "/" + $(this).attr("data-link");
    });
 });

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

