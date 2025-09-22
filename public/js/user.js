/*
 *
 *
 * Search for a user ajax
 *
 *
 *
 */


function getFacebookEmbedUrl(url){
    var video_id = url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    return "https://youtube.com/embed/" + video_id;
}


$('#submit').on('click', function(){
    var target = $('#search').val();
    if(target == '' || target.indexOf('/') >= 0 || target.indexOf('?') >= 0 ){
        swal("", "Please input valid membership number", "warning");
    }
    else{
        window.location.href = '/user/' + target;
    }
});

$(document).ready(function(){

    if($('.userProfile').length){

        var view = '';

        // Getting Member Closet
        if(user.show_closet){
            view += `<a href="/public-closet/${user.member_id}"><h3> Go here to view my closet</h3></a><br />`;
        }

        // Getting Number of Shirts Owned

        view += '<h5>Number of shirts owned:</h5>';
        view += '<h4 id="number_of_shirt_own">' + user.num_shirt_purchase + '</h4>';
        view += '<br>';

        // Getting List of Messages Purchased
        view += '<h5>Messages Purchased:</h5>';
        for(var i = 0; i < message.length; i++){
            var m = message[i];
            //fixed by youraws
            //view += '<h4><a href="/message/' + m.message_id + '">' + m.message_id + '</a></h4>';
            view += '<h4><a href="/user/' + m.message_id + '">' + m.message_id + '</a></h4>';

        }
        view += '<br>';

        // Getting IWT

        view += '<h5>IWT:</h5>';
        view += '<h4></h4>';
        view += '<br>';

        // Getting IBT

        view += '<h5>IBT:</h5>';
        view += '<h4></h4>';
        view += '<br>';

        view += '<hr />';

        // Getting Profile Setting Data

        if(user.first_name != ''){
            view += '<h5>First Name:</h5>';
            view += '<h4>' + user.first_name + '</h4>';
            view += '<br>';
        }
        if(user.last_name != ''){
            view += '<h5>Last Name:</h5>';
            view += '<h4>' + user.last_name + '</h4>';
            view += '<br>';
        }
        if(user.nick_name != ''){
            view += '<h5>Nick Name:</h5>';
            view += '<h4>' + user.nick_name + '</h4>';
            view += '<br>';
        }
        if(user.medical_alert != ''){
            view += '<h5>Medical Alert:</h5>';
            view += '<h4>' + user.medical_alert + '</h4>';
            view += '<br>';
        }
        if(user.blood_type != ''){
            view += '<h5>Blood Type:</h5>';
            view += '<h4>' + user.blood_type + '</h4>';
            view += '<br>';
        }
        if(user.message != ''){
            view += '<h5>General message:</h5>';
            view += '<h4>' + user.message + '</h4>';
            view += '<br>';
        }
        if(user.birthday != ''){
            view += '<h5>Birthday:</h5>';
            view += '<h4>' + user.birthday + '</h4>';
            view += '<br>';
        }
        if(user.marital != ''){
            view += '<h5>Marital Status:</h5>';
            view += '<h4>' + user.marital + '</h4>';
            view += '<br>';
        }
        if(user.meeting != ''){
            view += '<h5>Interested in meeting:</h5>';
            view += '<h4>' + user.meeting + '</h4>';
            view += '<br>';
        }
        if(user.school != ''){
            view += '<h5>School:</h5>';
            view += '<h4>' + user.school + '</h4>';
            view += '<br>';
        }
        if(user.occupation != ''){
            view += '<h5>Current Occupation:</h5>';
            view += '<h4>' + user.occupation + '</h4>';
            view += '<br>';
        }
        if(user.like != ''){
            view += '<h5>Likes:</h5>';
            view += '<h4>' + user.like + '</h4>';
            view += '<br>';
        }
        if(user.dislike != ''){
            view += '<h5>Dislikes:</h5>';
            view += '<h4>' + user.dislike + '</h4>';
            view += '<br>';
        }
        if(user.buy_me != ''){
            view += '<h5>Things you can buy me:</h5>';
            view += '<h4>' + user.buy_me + '</h4>';
            view += '<br>';
        }
        if(user.cheer != ''){
            view += '<h5>I am cheering for:</h5>';
            view += '<h4>' + user.cheer + '</h4>';
            view += '<br>';
        }
        if(user.prediction != ''){
            view += '<h5>Prediction:</h5>';
            view += '<h4>' + user.prediction + '</h4>';
            view += '<br>';
        }
        if(user.twitter != '' || user.instagram != '' || user.facebook != ''){
            view += '<h5>Follow me on my Social Media:</h5>';
            if(user.twitter != ''){
                view += `<a target="_blank" href="https://twitter.com/${user.twitter}"><img class="social-icon" src="/images/twitter.png" /></a>`;
            }
            if(user.instagram != ''){
                view += `<a target="_blank" href="https://www.instagram.com/${user.instagram}"><img class="social-icon" src="/images/instagram.svg" /></a>`;
            }
            if(user.facebook != ''){
                view += `<a target="_blank" href="${user.facebook}"><img class="social-icon" src="/images/facebook.png" /></a>`;
            }
            view += '<br>';
        }
        if(user.youtube != ''){
            view += "<br>";
            view += "<div>My youtube video:</div>"
            view += `<iframe width="560" height="315" src="${getFacebookEmbedUrl(user.youtube)}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            view += "<br>";
        }
        if(user.xray_vision != ''){
            view += '<h5>X-ray Vision:</h5>';
            view += '<h4>' + user.xray_vision + '</h4>';
            view += '<br>';
        }
        if(user.pic != ''){

            view += '<h5>Pictures:</h5>'

            if(user.pic1 != ''){
                view += '<img style="cursor:pointer; margin-left: 10px;" id="pic1" src="/client/' + user.member_id + '/pic/' + user.pic1 + '" width="150px" style="margin-right:20px">';
            }
            if(user.pic2 != ''){
                view += '<img style="cursor:pointer; margin-left: 10px;" id="pic2" src="/client/' + user.member_id + '/pic/' + user.pic2 + '" width="150px" style="margin-right:20px">';
            }
            if(user.pic3 != ''){
                view += '<img style="cursor:pointer; margin-left: 10px;" id="pic3" src="/client/' + user.member_id + '/pic/' + user.pic3 + '" width="150px" style="margin-right:20px">';
            }
            if(user.pic1 == '' && user.pic2 == '' && user.pic3 == ''){
                view += '<h4>No pictures to show</h4>'
            }
        }

        $('.userProfile').append(view);

        if(document.getElementById("pic1")){
            new Viewer(document.getElementById("pic1"), {
                inline: false,
                button: false,
                navbar: false,
                title: false,
                toolbar: false,
                keyboard: false,
                loop: false,
            });
        }

        if(document.getElementById("pic2")) {
            new Viewer(document.getElementById("pic2"), {
                inline: false,
                button: false,
                navbar: false,
                title: false,
                toolbar: false,
                keyboard: false,
                loop: false,
            });
        }

        if(document.getElementById("pic3")) {
            new Viewer(document.getElementById("pic3"), {
                inline: false,
                button: false,
                navbar: false,
                title: false,
                toolbar: false,
                keyboard: false,
                loop: false,
            });
        }

        $.ajax({
            url : '/api/closet/' + user.member_id,
            method : 'GET'
        }).done(function(data){
            if(data.success){
                var numOfShirt = data.shirts.length;
                $('#number_of_shirt_own').html(numOfShirt);
            }
        });
    }
});


