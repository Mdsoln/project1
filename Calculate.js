function sum(){
  var x = parseInt(document.getElementById("a").value);
  var y = parseInt(document.getElementById("b").value);
  var z = x+y;
  document.getElementById("r").value = z;
}
function minuss(){
  var x = parseInt(document.getElementById("a").value);
  var y = parseInt(document.getElementById("b").value);
  var z = x-y;
  document.getElementById("r").value = z;
}
function mults(){
  var x = parseInt(document.getElementById("a").value);
  var y = parseInt(document.getElementById("b").value);
  var z = x*y;
  document.getElementById("r").value = z;
}
function divs(){
  var x = parseInt(document.getElementById("a").value);
  var y = parseInt(document.getElementById("b").value);
  var z = x/y;
  document.getElementById("r").value = z;
}
function modu(){
  var x = parseInt(document.getElementById("a").value);
  var y = parseInt(document.getElementById("b").value);
  var z = x%y;
  document.getElementById("r").value = z;
}
//Hyperbolic functions
function Tanth(){
  var x = parseFloat(document.getElementById("a").value);
  var y = parseFloat(document.getElementById("b").value);
  var z = Math.tanh(x);
  document.getElementById("r").value = z;
}
function Csth(){
  var x = parseFloat(document.getElementById("a").value);
  var y = parseFloat(document.getElementById("b").value);
  var z = Math.cosh(x);
  document.getElementById("r").value = z;
}
function Sinth(){
  var x = parseFloat(document.getElementById("a").value);
  var y = parseFloat(document.getElementById("b").value);
  var z = Math.sinh(x);
  document.getElementById("r").value = z;
}
//Special angels function
function tangent(){
  const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Invalid input");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = Math.tan(radian);
  document.getElementById("r").value = z;
}
function sine(){
  const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Invalid input");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = Math.sin(radian);
  document.getElementById("r").value = z;
}
function cosine(){
  const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Invalid input");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = Math.cos(radian);
  document.getElementById("r").value = z;
}
function taninv(){
  const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Invalid input");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = Math.atan(radian);
  document.getElementById("r").value = z;
}
function sininv(){
  const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Invalid input");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = Math.asin(radian);
  document.getElementById("r").value = z;
}
function cosinv(){
 const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Invalid input");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = Math.acos(radian);
  document.getElementById("r").value = z;
}
function secc(){
 const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Please enter any number");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = 1/Math.cos(radian);
  document.getElementById("r").value = z;
}
function coosec(){
  const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Please enter any number");
	  return;
  }
  const radian = x*(Math.PI/180);
  //const radians = 1/radian;
  const z = 1/Math.sin(radian);
  document.getElementById("r").value = z;
}
function seck(){
 const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Please enter any number");
	  return;
  }
  const radian = x*(Math.PI/180);
  const radians = 1/radian;
  const z = Math.cos(radians);
  document.getElementById("r").value = z;
}
function cotanget(){
 const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Please enter any number");
	  return;
  }
  const radian = x*(Math.PI/180);
  const z = 1/Math.tan(radian);
  document.getElementById("r").value = z;
}
function cotk(){
  const x = parseFloat(document.getElementById("a").value);
  const y = parseFloat(document.getElementById("b").value);
  if (isNaN(x)){
	  alert("Please enter any number");
	  return;
  }
  const radian = x*(Math.PI/180);
  const radians = 1/radian;
  const z = Math.tan(radians);
  document.getElementById("r").value = z;
}
function logTen(){
  const x = parseFloat(document.getElementById("a").value);
  //const y = parseFloat(document.getElementById("b").value);
  const z = Math.log10(x);
  document.getElementById("r").value = z;
}
function logTwo(){
  const x = parseFloat(document.getElementById("a").value);
  //const y = parseFloat(document.getElementById("b").value);
  const z = Math.log2(x);
  document.getElementById("r").value = z;
}
function lonE(){
  const x = parseFloat(document.getElementById("a").value);
  //const y = parseFloat(document.getElementById("b").value);
  const z = Math.LOG2E(x);
  document.getElementById("r").value = z;
}
function clearIt(){
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("r").value = "";
}
function square() {
  let resultField = document.getElementById("r");
  let result = resultField.value;
  
  if (result) {
    resultField.value = Math.pow(result, 2);
  } 
  else{
	  alert("Please perform an operation first to obtain a result.");
  }
}
function squareRoot(){
  let resultField = document.getElementById("r");
  let result = resultField.value;
  
  if (result) {
    resultField.value = Math.sqrt(result);
  } 
  else{
	  alert("Please perform an operation first to obtain a result");
  }
}
function percentage(){
  let resultField = document.getElementById("r");
  let result = resultField.value;
  
  if (result) {
    resultField.value = result/100;
  } 
  else{
	  alert("Please perform an operation first to obtain a result");
  }
}
