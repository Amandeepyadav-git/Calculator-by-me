function fun(){
    event.preventDefault();
}
const buttons= document.getElementsByClassName("num");
const input=document.getElementsByClassName("input-num")[0];
for(let one of buttons){
 one.addEventListener("click", function(){
    const btn= one.getAttribute("value");
    input.value = input.value+btn;
 })
}

const output= document.getElementsByClassName("out")[0];
output.addEventListener("click", function(calculate){
   let valu= input.value;
  var calc= eval(valu);
  input.value=calc; 
})

const allClear=document.getElementsByClassName("AC")[0];
allClear.addEventListener("click", ()=>{
    input.value="";
})
const delEte=document.getElementsByClassName("Del")[0];
delEte.addEventListener("click",()=>{
   input.value= (input.value).slice(0,-1);
})