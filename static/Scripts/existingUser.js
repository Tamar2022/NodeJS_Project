
async function getDetails() {
    let user1 = JSON.parse(sessionStorage.getItem('User'));//
    document.getElementById("fullName").value = user1.name;
user1.addresses.forEach(element => {
    document.getElementById("city").value=element.city,
document.getElementById("street").value=element.street,
     document.getElementById("houseNum").value=element.houseNum
});
    
        document.getElementById("password").value = user1.password;

        let orders = await fetch('/api/user/'+user1._id);
let o=await orders.json()
o.user1.userOrders.forEach(el=>{
    document.getElementById("pastOrders").innerText=document.getElementById("pastOrders").innerText+" date: "+el.date+" price: "+el.sum+'/\n/';
})
       
   

}
function editExistingUser() {
    let user = {
        _id: JSON.parse(sessionStorage.getItem('User'))._id,
       
        name: document.getElementById("fullName").value,
        addresses:{city:document.getElementById("city").value,
       street:document.getElementById("street").value,
       houseNum: document.getElementById("houseNum").value
    },
        password: document.getElementById("password").value
    }
    
    fetch("api/user/" + user._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(Response => {
        if (Response.ok)
            alert("details updated successfully!")
        else
           throw new Error("ERROR");
    })
}