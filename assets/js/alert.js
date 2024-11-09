function greetPrompt() {
    let greet = "";
    let name = prompt("Please enter your name:", "Jaffa Cake");
    if (name == null || name == "") {
      greet = "Where's your name?";
    } else {
      greet = "Hey " + name + "! How are you doing today?";
    }
    document.getElementById("greetPrompt").innerHTML = greet;
}