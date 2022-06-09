window.addEventListener('load',async (event) => {

  await load();
    
    
 });
 async function load(){
   await showAllProducts();
   let sum=getTotalSum();
   document.getElementById("totalColumns").innerText=sum;
 }
 function getTotalSum(){
    let sum=0;
    let s=sessionStorage.getItem('productList');
    if(s){
      JSON.parse(s).forEach(el=>{
      sum+=el['product'].price*el['quantity'];
   })}
   return sum;
 }

 function getTotalCount(){
   let count=0;
   let t=sessionStorage.getItem('productList');
   if(t){
  JSON.parse(t).forEach(el=>{
     count+=el['quantity'];
  })}
  return count;

 }
function showAllProducts(){
   let productList=JSON.parse(
    sessionStorage.getItem('productList'));
    if(productList)
   productList.forEach(el=>drawProduct(el))
 }


 function drawProduct(product){
let pro=product['product'];
let qua=product['quantity'];
    temp = document.getElementById("temp-row");
    var clonProducts = temp.content.cloneNode(true);

    clonProducts.querySelector("img").src = "./images/" + pro.imgName;
    clonProducts.querySelector(".itemName").content =pro.name;
    clonProducts.querySelector(".itemNumber").innerText = qua;
    clonProducts.querySelector(".price").innerText = pro.price;
    clonProducts.querySelector("button").addEventListener("click",  ()=> {
      deleteItem(product);
    });

    document.getElementById("tbody").appendChild(clonProducts);
 }
 async function deleteItem(product){
    
   let list= JSON.parse(sessionStorage.getItem('productList'));
  list.forEach(el=>{
       if(el['product']._id==product['product']._id)
       { 
          el['quantity']=el['quantity']-1;
         if ( el['quantity']==0){
            
            list= list.filter(item => item !== el);
         }
         
       }
       
     
   })
   let c= JSON.parse(sessionStorage.getItem('countCart'));
   sessionStorage.setItem('countCart',JSON.stringify(c-1));
   sessionStorage.setItem('productList',JSON.stringify(list));
   //delete from dom
    document.getElementById("tbody").innerHTML='';
 
   await load();
  

 }

async function placeOrder(){
let items=JSON.parse(sessionStorage.getItem('productList'));
if(items){
let order={
'quantity' : getTotalCount(),
	'sum' : getTotalSum(),
	'date' : new Date(),
	'user' :JSON.parse( sessionStorage.getItem('User'))._id
	,
	'items' : items
}
 
      const rawResponse = await fetch('/api/order/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });
      if(rawResponse.status!=500){
      const content = await rawResponse.json();
    if (content){
      alert("הזמנתך בוצעה בהצלחה!!!")
      sessionStorage.setItem('countCart',JSON.stringify(0));
      sessionStorage.removeItem('productList');
      document.getElementById("totalColumns").innerText=0;

      //delete from dom

       document.getElementById("tbody").innerHTML='';
      
    }
  }else{
    alert("error ")
  }
}else{
  alert("insert items to cart")
}
 }