function showError(message){
  swal({
    title: "",
    text: message,
    type: "error",
    showCancelButton: false,
    confirmButtonText: "Ok",
    closeOnConfirm: false,
  });
}

function showSuccess(message, cb){
  swal({
    title: "",
    text: message,
    type: "success",
    showCancelButton: false,
    confirmButtonText: "Ok",
    closeOnConfirm: false
  }, function(){
    if(cb){
      cb();
    } else {
      window.location.href = "/";
    }
  });
}

function toAppStore(platform){
  if(platform === "ios"){
    window.open('https://apps.apple.com/us/app/shirtclub/id1451543103?ls=1', '_blank');
  }
  else if(platform === "android"){
    window.open('https://play.google.com/store/apps/details?id=com.shirtclubmobile&hl=en', '_blank');
  }
}

function isMembershipActive(membership_status){
  if(!membership_status){
    return false;
  }
  return new Date(membership_status) > new Date();
}

function isProfiledFilled(user){
  return user.nick_name || user.medical_alert || user.blood_type || user.message || user.birthday || user.marital || user.meeting || user.school || user.occupation || user.like || user.dislike || user.buy_me || user.cheer || user.prediction || user.twitter || user.instagram || user.facebook || user.youtube || user.xray_vision || user.pic1 || user.pic2 || user.pic3;
}