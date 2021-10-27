var txt_number = document.getElementById("txt_number");
function setValue(even){
    var parametr =even.value;
    txt_number.value += parametr;
}
function clearValue(){
    txt_number.value="";
}

function setResult(){
    txt_number.value = eval(txt_number.value);
}
function func_back(){
    var len =txt_number.value.length;
    txt_number.value = txt_number.value.substr(0,len -1);
}