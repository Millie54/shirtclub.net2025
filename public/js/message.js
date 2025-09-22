/*
 *
 *
 * Search for a message ajax
 *
 *
 *
 */

$('#submit').on('click', function(){
    var target = $('#search').val();
    if(target == '' || target.indexOf('/') >= 0 || target.indexOf('?') >= 0 ){
        swal("", "Please input valid message number", "warning");
    }
    else{
        //Fixed by youraws
        //window.location.href = '/message/' + target;
        window.location.href = '/user/' + target;
    }
    
});

$(document).ready(function(){
    if($('.messageInfo').length){
        
        var view = '';
        
        // Message content section - always show
        view += '<h5>Message:</h5>';
        if(message.content && message.content.trim() !== ''){
            view += '<h4>' + message.content + '</h4>';
        } else {
            view += '<h4>No message to display</h4>';
        }
        view += '<br>';
        
        // Link section - always show
        view += '<h5>Link:</h5>';
        if(message.link && message.link.trim() !== ''){
            if(message.link.indexOf("http") < 0){
                message.link = "https://" + message.link;
            }
            view += '<h4><a target="_blank" href="' + message.link + '">' + message.link + '</a></h4>';
        } else {
            view += '<h4>No link to display</h4>';
        }
        view += '<br>';
        
        // Image section - always show
        view += '<h5>Image:</h5>';
        if(message.image && message.image.trim() !== ''){
            view += '<img style="cursor:pointer; margin-left: 10px;" id="image" width="200px" src="' + message.image + '" />';
        } else {
            view += '<h4>No image to display</h4>';
        }
        
        $('.messageInfo').append(view);
        
        // Initialize image viewer only if image exists
        if(message.image && message.image.trim() !== ''){
            new Viewer(document.getElementById("image"), {
                inline: false,
                button: false,
                navbar: false,
                title: false,
                toolbar: false,
                keyboard: false,
                loop: false,
            });
        }
    }
});