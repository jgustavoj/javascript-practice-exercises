const rapid = (param) => {
    let newString = "";
    for (let i=0; i < param.length; i++){
        param[i].toLowerCase(); 
        if (param[i] != "a" && param[i] != "e" && param[i] != "i" && param[i] != "o" && param[i] != "u"){
            newString += param[i].toUpperCase(); 
        }
    }
return newString
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));
