$(document).ready(function() {
  $.ajax({
    url : '/api/closet/' + memberID,
    method : 'GET'
  }).done(function(data){
    if(!data.success){
      swal({
        title: "",
        text: data.fail,
        type: "error",
        showCancelButton: false,
        confirmButtonText: "Ok",
        closeOnConfirm: false,
      }, function(isConfirm){
        window.location.href = "/";
      });
    }
    if(!data.show_closet){
      swal({
        title: "",
        text: "Closet not public",
        type: "error",
        showCancelButton: false,
        confirmButtonText: "Ok",
        closeOnConfirm: false,
      }, function(isConfirm){
        window.location.href = "/";
      });
    }
    var tableData = data.shirts.length > 0 ? "<tr><th>Symbol</th><th>Message Number</th><th>Description</th><th>Picture</th></tr>" : "";
    for(var i = 0; i < data.shirts.length; i++){
      var shirt = data.shirts[i];
      tableData += ("<tr>");
      tableData += (`<td><div class="shirt-symbol">${shirt.symbol}</div></td>`);
      tableData += (`<td><div>${shirt.message_number}</div></td>`);
      tableData += (`<td><div>${shirt.description}</div></td>`);
      if(shirt.pic){
        tableData += (`<td><img id="pic-${i}" style="max-width: 100px;" src="/client/${memberID}/pic/${shirt.pic}" /></td>`);
      } else {
        tableData += (`<td>No Pic</td>`);
      }
      tableData += (`</tr>`);
    }
    $('table#closet').html(tableData);
    $('#header').html(`<div>${memberID}'s Closet</div>`);
    for(var i = 0; i < data.shirts.length; i++) {
      if (document.getElementById(`pic-${i}`)) {
        new Viewer(document.getElementById(`pic-${i}`), {
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
  }).fail(function(jqXHR, textStatus){
    alert('DB Connection Error');
    window.location.href = "/";
  });
});
