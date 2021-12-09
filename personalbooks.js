function addToggle() {
  var x = document.getElementById("addForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function getPName() {
  let name = "";
  if (auth2.isSignedIn.get()) {
    var profile = auth2.currentUser.get().getBasicProfile();
    profile.getName();
  }
  document.querySelector("#txt_name").setAttribute("value", name);
}
getPName();
