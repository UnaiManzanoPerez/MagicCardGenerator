function updateInput(id){
    if(id == "inputType"){
        var text = document.getElementById(id).value;
        document.getElementById(id+"Card").src=text;
    }else if (id == "inputImage"){
        var imgs = document.getElementById("inputImage").files[0];
        document.getElementById("inputImageCard").src=imgs;
    }else{
        var text = document.getElementById(id).value;
        document.getElementById(id+"Card").innerHTML=text
    }
}