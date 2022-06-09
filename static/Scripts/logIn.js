
function logInForNewUser(){
    document.getElementById("newUser").style.display = "block";
}
function enroll() {
    let user =
    {
       
        name: document.getElementById("fullName").value,
       addresses:{city:document.getElementById("city").value,
       street:document.getElementById("street").value,
       houseNum: document.getElementById("houseNum").value
    },
        password: document.getElementById("password").value
    };
    fetch("api/user/", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
              'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => { 
            alert(`hi `);
         })
    document.getElementById("enrollButton").style.display = "none"
}

function getUser() {
    let fullName = document.getElementById("userName").value;
    let password = document.getElementById("pass").value;

    fetch("api/user/" + fullName + "/" + password).then(Response => {
        if (Response.ok && Response.status == 200)
            return Response.json();
        else
            throw new Error("ERROR");
    }).then(data => {
        alert("hi " +data.name);
        sessionStorage.setItem('User', JSON.stringify(data));
        window.location.href = "Products.html"
    }).catch(ERROR =>
        alert("not exist!"));
    ;
    

    
}
