function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  let name = profile.getName();
  document.querySelector("#txt_name").setAttribute("value", name);
  document.getElementById("submit").click();
}

function searchForBooks(){
  var search = document.getElementById('searchtext').value;
  document.getElementById('results').innerHTML = "";
  console.log(search);
  $.ajax({
      url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
      success: function(data){
        for(i =0; i < data.items.length; i++){ 
          results.innerHTML +=  "<div class=\"pic\"><a target= _blank href="+data.items[i].volumeInfo.previewLink+">"+ data.items[i].volumeInfo.title +"</a>" + "</div>"
        }
      },
      type: 'GET'
  });
  document.getElementById(btnsearch).click();
}
