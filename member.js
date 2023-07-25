function skilsmember() {
    var member = document.getElementById("member").value;
    if (member == "") {
        document.getElementById("member").style.borderColor = "red";
        document.getElementById("member").style.borderWidth = "2px";
        document.getElementById("member").style.borderStyle = "solid";
        document.getElementById("member").style.borderRadius = "5px";
        document.getElementById("member").placeholder = "Please enter your member";
        return false;
    } else {
        document.getElementById("member").style.borderColor = "green";
        document.getElementById("member").style.borderWidth = "2px";
        document.getElementById("member").style.borderStyle = "solid";
        document.getElementById("member").style.borderRadius = "5px";
        return true;
    }
}