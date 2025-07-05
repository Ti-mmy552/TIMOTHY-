console.log('Hello World!');
const x = 5;
const y = 4;
const sum = x + y;
console.log(sum);

function changeAlert(){
  let body = document.getElementById("body");
  let input= document.getElementById('text');
  input.style.background= body;
}
function changeNo(){
  let check = document.getElementById('checkBox').checked;
  let money = 5;
  let text = document.getElementById('text');
  if (check){
    let total = money + 1;
    text.textContent= '$' + total;
  }
  else{
    text.textContent= '$' + money;
  }
}
function payMent(){
  let c1 =document.getElementById('one').checked;
  let c2 = document.getElementById('two').checked;
  let m1 = 200;
  let m2 = 300;
  let wow = document.getElementById('wow');
  if (c1 && c2){
    cTotal1= m1 + m2;
    
    alert('Amount to pay is $500');
    wow.textContent= 'Amount to pay is $' + cTotal1;
  }
  else if (c1){
    alert('Amount to pay is $200');
    wow.textContent = 'Amount to pay is $' + m1
  }
  else{
    alert('Amount to pay is $300');
    wow.textContent = 'Amount to pay is $' + m2;
  }
}
//function coffeeWorld() {
  //  let latte = document.getElementById('latte').checked;
    //let cappuccino = document.getElementById('cappuccino').checked;
    //let frappe = document.getElementById('frappe').checked;
    //let mocha = document.getElementById('mocha').checked;
    //let dalgona = document.getElementById('dalgona').checked;
    //let total = 0;

   // if (latte) total += 4;
  //  if (cappuccino) total += 3;
   // if (frappe) total += 3;
   // if (mocha) total += 3;
   // if (dalgona) total += 4;

   // document.getElementById('coff').innerText = `Total: $${total}`;
  //}
  function cartClick(){
    let lat = document.getElementById('lat').checked;
    let cap = document.getElementById('cap').checked;
    let frap = document.getElementById('frap').checked;
    if (lat){
      if (lat && cap){
        if (lat && frap){
          alert('Amount to pay is $7');
        }
        if(lat && cap && frap){
          alert('Amount to pay is $10');
        }else{
          alert('Amount to pay is $7');
        }
      } else{
        alert('Amount to pay is $4');
      } 
    } else{
      alert('Amount to pay is $3');
    } 
  }