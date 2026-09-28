window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   
   const btn = document.getElementById("convertButton")
   const fInput = document.getElementById("F_in")
   const cInput = document.getElementById("C_in")

   btn.addEventListener("click", checkConvertType)
   fInput.addEventListener("input", clearCInput)
   cInput.addEventListener("input", clearFInput)
   
}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)
function checkConvertType(){
   
   const fInput = document.getElementById("F_in")
   const cInput = document.getElementById("C_in")
   valInF = 80
   if(fInput.value == '' && cInput.value == ''){
      document.getElementById("message").textContent = "Enter a temperature to convert"
      document.getElementById("weatherIcon").src = "images/C-F.png"
      return
   }
   else if (fInput.value == ''){
      value = cInput.value
      convertedVal = convertCtoF(value)
      fInput.value = convertedVal
      document.getElementById("message").textContent = ''
      valInF = convertedVal

   }
   else {

      value = fInput.value
      valInF = value

      
      convertedVal = convertFtoC(value)
      cInput.value = convertedVal
      document.getElementById("message").textContent = ''
      
   }

   switchImage(valInF)
}

function switchImage(val){
   console.log(val)
   if(val <= -200 || val >= 200){
      document.getElementById("weatherIcon").src = "images/dead.png"
   }
   else if(val > -200 && val <=32){
      document.getElementById("weatherIcon").src = "images/cold.png"
   }
   else if(val >= 90 && val <200){
      document.getElementById("weatherIcon").src = "images/hot.png"
   }
   else{
      document.getElementById("weatherIcon").src = "images/cool.png"
   }
}

function convertCtoF(C) {
   value = (parseFloat(C) * (9/5)) + 32
   return value
}

function convertFtoC(F) {
   value = ((parseFloat(F) - 32) * 5)/9
   return value
}

function clearCInput(){
   const cInput = document.getElementById("C_in")
   cInput.value = ""
}
function clearFInput(){
   const fInput = document.getElementById("F_in")
   fInput.value = ""
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
function changeImage(t){

}