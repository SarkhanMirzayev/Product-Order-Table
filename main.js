
$(document).keyup(function (e) {
    var pressed = e.keyCode;
    if (pressed == 40) {
        var lastChecked = $('#topTable tBody tr').last().hasClass('selectedRow');
        if (lastChecked) return;
        else $('#topTable tBody tr.selectedRow').removeClass('selectedRow').next().addClass('selectedRow');
    }
    else if (pressed == 38) {
        var firstCheck = $('#topTable tBody tr').first().hasClass('selectedRow');
        if (firstCheck) return;
        else $('#topTable tBody tr.selectedRow').removeClass('selectedRow').prev().addClass('selectedRow');
    }
    else if (pressed == 13) {
        var q = document.createElement("input");
        q.setAttribute("style", "width:70px");
        $('#topTable tBody tr.selectedRow').clone().append(q).removeClass('selectedRow').addClass('sad').appendTo('#subTBody');
        $("#subTBody tr:last-child input").focus();
    }
});

$(document).on('click', '#topTable tBody tr', function (e) {
    $(this).addClass('selectedRow').siblings().removeClass('selectedRow');
});


$(document).on('click', '#subTBody tr', function (e) {
    $(this).addClass('bottomTable').siblings().removeClass();
});


$(document).on('dblclick', '#topTable tBody tr', function (e) {
    if ($("#subTBody").children().length != 0) {
        var miqdar = $("#subTBody tr:last-child input").val();
        if (miqdar != "") {
            var inputElement = document.createElement("input");
            inputElement.setAttribute("style", "width:70px");
            $(this).clone().append(inputElement).removeClass('selectedRow').addClass('sad').appendTo('#subTBody');
            $("#subTBody tr:last-child input").focus();
        }
        else {
            alert("Please insert quantity last order item...");
        }
    }
    else {
        var inputElement = document.createElement("input");
        inputElement.setAttribute("style", "width:70px");
        $(this).clone().append(inputElement).removeClass('selectedRow').addClass('sad').appendTo('#subTBody');
        $("#subTBody tr:last-child input").focus();
    }
});

document.addEventListener("keydown", keysPressed, false);
document.addEventListener("keyup", keysReleased, false);

var keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;
    if (keys[46] && keys[16]) {
        $(".bottomTable").remove();
    }
}

function keysReleased(e) {
    keys[e.keyCode] = false;
}
