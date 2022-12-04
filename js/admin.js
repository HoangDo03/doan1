function redirect(){
    var url = window.location.href;//cac href hien co tren trang 
    var id = url.split('?');//truot den ?
    id=id[1];
    console.log = (id);
    switch(id)
    {
        case "dashboard":
        {
            document.getElementById('main').innerHTML="nope";
            break;
        }
        case "inventory":
        {
            document.getElementById('main').innerHTML=` 
            <div id="inventory" >
            <div class="form">
                <div class="form_group">
                    <label for="id">ID</label>
                    <input type="number" id="id" class="form_input">
                    <div class="error_message"></div>
                </div>
                <div class="form_group">
                    <label for="image">Image</label>
                    <input type="file" id="image" class="form_input">
                    <img src="" alt="" id="preview">
                    <div class="error_message"></div>
                </div>
                <div class="form_group">
                    <label for="title">title</label>
                    <input type="text" id="title" class="form_input">
                    <div class="error_message"></div>
                </div>
                <div class="form_group">
                    <label for="cost">Cost </label>
                    <input type="text" id="cost" class="form_input">
                    <div class="error_message"></div>
                </div>
                <button id="btn" onclick="add()">Add New</button>
            </div>

            <table class="table" id="table">

            </table>
        </div>`;
            // document.getElementById('inventory').style.display='block';
            break;
        }
        case "orders":
        {
            
        }
        case "customers":
        {
                       
            document.getElementById('main').style.display='none';
            document.getElementById('customer').style.display='block';
            break;
        }
    }
}

window.onload=function()
{
    redirect();
}
// inventory
function createProduct() {
    localStorage.setItem('product', JSON.stringify(productArr));
}

if (localStorage.getItem('product') == null) {
    createProduct(productArr);
}

function showProductList() {
    if (localStorage.getItem('product') == null) {
        return false;
    }
    var productArray = JSON.parse(localStorage.getItem('product'));
    var table = ` <thead>
         <tr>
            <th class="title">ID</th>
            <th class="title">Image</th>
            <th class="title">Name</th>
            <th class="title">Cost</th>
            <th class="title">Action</th>
        </tr> 
    </thead>`
    for (let i = 0; i < productArray.length; i++) {
        table +=

            '<tr><td>' + (i + 1) + '</td><td><img src="' + productArray[i].image + '" width=100px , height=130px></td><td>' + productArray[i].name + '</td> <td>' + productArray[i].cost + '</td><th><button onclick="deleteItem(\'' + productArray[i].id + '\')"><i class="fa-solid fa-delete-left"></i><button onclick="editItem(\'' + productArray[i].id + '\')"><i class="fa-solid fa-pen-to-square"></i></th></tr>'

    }
    document.getElementById('table').innerHTML = table;
}



function add() {
    let productArr = JSON.parse(localStorage.getItem('product'));

    var item =
    {
        id: document.getElementById('id').value,
        image: document.getElementById('preview').attributes['src'].value,
        name: document.getElementById('name').value,
        cost: document.getElementById('cost').value,
    };

    let index=productArr.findIndex((c) => c.id==item.id)
    
    if(index >= 0 ){
        productArr.splice(index,1,item)
    }else {
        data.push(item);
    }

    console.log(item);
    console.log(productArr);


    localStorage.setItem('product',JSON.stringify(productArr))
    showProductList();
    // clear()
}
function clear() {
    document.getElementById('id').value = "";
    document.getElementById('image').value = "";
    document.getElementById('name').value = "";
    document.getElementById('cost').value = "";
}

//xoa han cai san pham

function deleteItem(IDproductDel) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id == IDproductDel)
            //ham xoa phan tu
            productArray.splice(i, 1)
    }
    localStorage.setItem('product', JSON.stringify(productArray));
    showProductList(productArray)
}

function editItem(id) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    document.getElementById('btn').innerText = "Update";
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            document.getElementById('id').value = productArray[i].id;
            document.getElementById('preview').attributes['src'].value=productArray[i].image;//lay link anh
            document.getElementById('name').value = productArray[i].name;
            document.getElementById('cost').value = productArray[i].cost;
        }
    }
    localStorage.setItem('product', JSON.stringify(productArray));
    showProductList(productArray);
}


window.onload = function () {
    let productArray = JSON.parse(localStorage.getItem('product'));
    deleteItem(productArray);
    //editItem(productArray);
    createProduct(productArray);
    showProductList(productArray);

}

// customer
function create(){
    var pt=document.getElementById("idselect");
    switch(pt.value)
    {
        case '0':
            
            createnewCustomer();
            break;
        case '1':
            createnewAdmin();
            break;
    }
    
}
// function createAdmin(){
//     var userArray = [];
//     var bien="khachhang";
//     if(localStorage.getItem('userArr')==null){		
//         alert("co vao day k!!!!!!!!!!!");
        
//      //userArray = JSON.parse(localStorage.getItem('user'));
//         var user1 = {username: 'admin', password: 'admin', datesignup: '01-01-2022', usertype:'admin'};
//         var user0={username:bien , password: bien, fullname: bien, datesignup: bien, usertype:'kh'};
//         userArray.push(user0);
//         userArray.push(user1);
//         console.log(userArray);
//         localStorage.setItem('userArr',JSON.stringify(userArray));
//     }
// }
//----------------------show user----------------------------------
function showUserList(){
//alert("co vao day k");
    if(localStorage.getItem('userArr')===null){
        return false;
    }
     userArray = JSON.parse(localStorage.getItem('userArr'));
     var table = ` <thead>
         <tr>
            <th class="title">ID</th>
            <th class="title">Username</th>
            <th class="title">Passsword</th>
            <th class="title">User type</th>
            <th class="title">Delete</th>
        </tr> 
    </thead>`
    //var tr='<tr><th>ID</th><th>Full Name</th><th>User</th><th>Password</th><th>Date of registration</th><th>Delete</th></tr>';
    // for(var i=0; i<userArray.length;i++){
    //     tr+='<tr><td>'+(i+1)+'</td><td>'+userArray[i].fullname+'</td><td>'+userArray[i].username+'</td><td>'+userArray[i].datesignup+'</td><td>'+ userArray[i].password +'</td><td><button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td></tr>';
    
    // }
    // document.getElementById('userlist').innerHTML=tr;
    for (let i = 0; i < userArray.length; i++) {
        table +=

            '<tr><td>' + (i + 1) +  '</td> <td>' + userArray[i].username + '</td><td>'+userArray[i].password + '</td> <td>' + userArray[i].usertype+'</td><td><button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td></tr>'

    }
    document.getElementById('table').innerHTML = table;
}

//su dung: push them phan tu vao cuoi mang, pop: xoa phan tu cuoi mang, unshit: them phan tu vao dau mang, shit: xoa phtu nam dau mang-----
//----------------------delete user-------------------------------
function deleteuser(usernamedelete){
    var userArray = JSON.parse(localStorage.getItem('userArr'));
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].username == usernamedelete){
            if(confirm('Are you sure you want to detele ?')){
                userArray.splice(i, 1);
            }
        }
    }
    localStorage.setItem('userArr',JSON.stringify(userArray));
    showUserList();
}
var user0;
function createnewCustomer()
{
    userArray = JSON.parse(localStorage.getItem('userArray'));
    user0 = {
        //id: document.getElementById('id').value,
        //fullname: document.getElementById('fullname').value,
        username: document.getElementById('user').value,
        password: document.getElementById('pass').value,
        //datesignup: document.getElementById('datesignup').value,
        usertype: 'Customer'
    };
    //var user1 = {username: 'user123', password: '123456', fullname: 'Nguyen Van C ', address: '273 An An Duong Vuong - P3 - Q5', phone: '0566490523' , datesignup: '23-11-1999'};
    //user1 = {username: document.getElementById("user").value, password: document.getElementById("pass").value, fullname, datesignup: document.querySelector('datesignup'), usertype:"kh"};
    console.log(user0.username);
    //console.log(user1.fullname);
    console.log("Type user 0:");
    console.log(typeof(user0));
    userArray.push(user0);
    
    localStorage.setItem('userArr',JSON.stringify(userArray));
    showUserList();
}
function createnewAdmin()
{
    userArray = JSON.parse(localStorage.getItem('userArray'));
    user1 = {
        //id: document.getElementById('id').value,
        //fullname: document.getElementById('fullname').value,
        username: document.getElementById('user').value,
        password: document.getElementById('pass').value,
        //datesignup: document.getElementById('datesignup').value,
        usertype: 'Admin'
    };

    console.log(user1.username);
    //console.log(user1.fullname);
    console.log("Type user 1:");
    console.log(typeof(user1));
    userArray.push(user1);
    
    localStorage.setItem('userArr',JSON.stringify(userArray));
    showUserList();
}
    window.onload=function()
    {
        
        showUserList();
        
    }