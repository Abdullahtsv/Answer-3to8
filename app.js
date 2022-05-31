
var studentName = ["Abdullah", "Noman", "Irfan", "Rizwan"];
for (var c = 0; c < 4; c++)
    if(c <= studentName.length){
    document.write("<h1>" + c + ") " + studentName[c] + "</br>" + "</h1>")
}


var studentRollNumber = [10011, 10012, 10013, 10014];
for (b = 0; b <= studentRollNumber.length-1; b++){
    if(b <= studentRollNumber.length){
    document.write("<h1>" + studentRollNumber[b] + "</br>" + "</h1>")
    };
}


    document.write("<h1>" + "What city is the capital of Pakistan " + "</h1>");
var cityName = ["Karachi", "Hyderabad,", "Lahore", "Islamabad"];
    cityOfCapital = prompt("Capital of Pakistan");
var capital = "Islamabad";
for (var a = 0; a <= cityName.length; a++){
    if (cityName[a] == capital && cityOfCapital === capital) {
        document.write("<h1>" + cityOfCapital + " " + "is the correct Answer. " + "</h1>")
        break;
    }    
    else if (cityName[a] !== capital && cityOfCapital !== capital) {
        document.write("<h1>" + cityOfCapital + " " + "is not the capital of Pakistan." + "</h1>")
        break;
    }
}


var mixArray = [1, "Abdullah", "True"];
    for(var k = 0; k <= mixArray.length; k++){
        if(k <= mixArray.length-1){       
        document.write("<h1>" + mixArray[k] + "</h1>");
    }
    
}


var mobileNetwork = ["Zong", "Telenor", "Jazz", "Warid", "Ufone",];
    for(var i = 0; i <= mobileNetwork.length; i++){
        if(i <= mobileNetwork.length-1){       
        document.write(i + " " + mobileNetwork[i], "</br>")
    }
}


var qualiFication = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
for (j = 0; j <= qualiFication.length; j++){
    if(j+1 <= qualiFication.length){
    document.write("<h1>" + j + ") " + qualiFication[j] + "</br>" + "</h1>")
    };
}
