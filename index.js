
const lengthSlider = $(".pass-length input")[0];
// const options = $(".option input")[0];
const options = document.querySelectorAll(".option input");
const copyIcon = $(".input-box span");
const passwordInput = $(".input-box input");
const passIndicator = $(".pass-indicator");
const generateBtn = $(".generate-btn");


const characters = {
    lowercase : "abcdefghijklmnopqrstuvwxyz",
    uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers : "0123456789",
    symbols : "!$·&()=?¿'¡*{}"
}

console.log(options);

const generatePassword = () =>{

    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLenght = lengthSlider
   
    options.forEach(option => {
        
        if(option.checked){
            if(option.id !== "exc-duplicate" && option.id !== "spaces"){
                staticPassword += characters[option.id];
                console.log(staticPassword);
            }
        }

    });
    
}



