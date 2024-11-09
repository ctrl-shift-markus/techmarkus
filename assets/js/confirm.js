function confirmPrompt() {
    var opt;
    if (confirm("You will now be hacked (you won't, this is just a demo).")) {
      opt = "Proceeding...";
    } else {
      opt = "Aborted!";
    }
    document.getElementById("confirmPrompt").innerHTML = opt;
}