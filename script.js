function newContactName(a,b) {
    return '<div class="contact-square"><p>' + a + ' ' + b + '</p><p class="see">Click here to see a description!</p></div>';
}

function showDescription (d) {
    return '<p>' + d + '</p>';
}

$(document).ready(function () {

    $('form').submit(function (event) {
      event.preventDefault();
    });

    $('#add').click( function() {
        var fn = $('#first-name').val();
        var ln = $('#last-name').val();
        var d = $('#desc').val();
        $('#right').append(newContactName(fn, ln)); 
        $('.info').val("");
        $('.see').hover(function(){
			$(this).css('color', 'red');
		}, function(){
			$(this).css('color', 'black');
		});
        $('.see').click( function () {
            $(this).parent('.contact-square').html(showDescription(d));
        });
    });
});