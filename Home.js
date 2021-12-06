function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  let name = profile.getName();
  document.querySelector("#txt_name").setAttribute("value", name);
  document.getElementById("submit").click();
}