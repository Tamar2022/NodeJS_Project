


window.addEventListener('load',async (event) => {

   
   await getAllProducts();
   await getallCategories();
   document.getElementById("ItemsCountText").innerText=sessionStorage.getItem('countCart');
});




function drawProduct(product) 
{
    temp = document.getElementById("temp-card");
    var clonProducts = temp.content.cloneNode(true);

    clonProducts.querySelector("img").src = "./images/" + product.imgName;
    clonProducts.querySelector("h1").content =product.name;
    clonProducts.querySelector(".price").innerText = product.price;
    clonProducts.querySelector(".description").innerText = product.description;
    clonProducts.querySelector("button").addEventListener("click",  ()=> {
        addToCart(product)
    });

    document.getElementById("ProductList").appendChild(clonProducts);

}

var selectedCategories=[];

async function drawCategory(category)
{
    
    temp = document.getElementById("temp-category");
    var clonCategories = temp.content.cloneNode(true);
    clonCategories.getElementById("OptionName").textContent =category.name;
    var count;  

    clonCategories.getElementById("checkboxCategory").addEventListener("change",async (event)=>
    {
        //delete from dom
        const ProductList = document.getElementById("ProductList");
        ProductList.innerHTML = '';
      
      var pr= await getAllProductsByCategory(category._id);
       count=pr.length;
        if (event.target.checked) 
        {
            selectedCategories.push(category);
          
            document.getElementById("counter").innerText =  (Number)(document.getElementById("counter").innerText)+count;
            
        } 
        else
        {
            selectedCategories = selectedCategories.filter(item => item !== category)//REMOVE FROM ARRAY  
            document.getElementById("counter").innerText =  (Number)(document.getElementById("counter").innerText)-count; 
                     
        }
        
        if(selectedCategories.length==0)
            {
                await getAllProducts();
            }
        selectedCategories.forEach(async (el)=>
            {
            let productsToDraw=await getAllProductsByCategory(el._id);
            productsToDraw.forEach(element => {
                drawProduct(element);
            });
            });
        });
    document.getElementById("CategoryList").appendChild(clonCategories);
}


function addToCart(product){
   let quantity;
   let b=false;
   let list= JSON.parse(sessionStorage.getItem('productList'));
   if(!list)
   
    {
        list=[];
        quantity=1;
            list.push({product,quantity});
            sessionStorage.setItem('productList', 
    JSON.stringify(list));
      
   }
   else{
  list.forEach(el=>{
       if(el['product']._id==product._id)
       {
           quantity=el.quantity+1;
          el.quantity=quantity;
         b=true;
       }
       
     
   })
   if(b==false)
   {
       quantity=1;
     
          list.push({product,quantity});
       
   }
}
   sessionStorage.setItem('productList',JSON.stringify(list));

  

var c=(Number)(document.getElementById("ItemsCountText").innerText)+1;
sessionStorage.setItem('countCart',c);
document.getElementById("ItemsCountText").innerText=c;
}
 
  async function getAllProducts(){
    let products = await fetch('/api/product/');
    products=await products.json();
   
products.forEach(el=>{
    drawProduct(el);
   });
      

}

async function getAllProductsByCategory(categoryId){
    let products = await fetch('/api/product/category?category='+categoryId);
    products=await products.json();
    return products;
}

 function getAllProductsByCategoryHelper(products){
    products.forEach(el=>{
        drawProduct(el);
       });
    
    return products.length;
 }

 async function getallCategories()
 {

    let categories = await fetch('/api/category/');
    categories=await categories.json();
    categories.forEach(el=>
        {
        drawCategory(el);
       });
     
}