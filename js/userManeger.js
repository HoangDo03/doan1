//----------------------show user----------------------------------
const isAdmin =  JSON.parse(window.localStorage.getItem('isAdmin'));
function showUserList(){
//alert("co vao day k");
    if(localStorage.getItem('userArr')===null){
        return false;
    }
     userArray = JSON.parse(localStorage.getItem('userArr'));
     var table = ` <thead>
         <tr>
            <th class="title">STT</th>
            <th class="title">ID</th>
            <th class="title">Username</th>
            <th class="title">Passsword</th>
            <th class="title">User type</th>
            <th class="title">Delete</th>
        </tr> 
    </thead>`
    
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].isAdmin)
         {
            userArray[i].usertype = "Admin";
        }
        else {
            userArray[i].usertype = "Customer";
        }
        table +=

            '<tr><td>' + (i + 1) +  '</td>  <td>' + userArray[i].id + '</td><td>' + userArray[i].username + '</td><td>'+userArray[i].password + '</td> <td>' + userArray[i].usertype+'</td><td><button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td></tr>'

    }
    document.getElementById('table-2').innerHTML = table;
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
    userArray = JSON.parse(localStorage.getItem('userArr'));
    user0 = {
       
        username: document.getElementById('user').value,
        password: document.getElementById('pass').value,
        isAdmin: false,
    };
    
    //console.log(user0.username);
    //console.log(user1.fullname);
    //console.log("Type user 0:");
    //console.log(typeof(user0));
    userArray.push(user0);
    
    localStorage.setItem('userArr',JSON.stringify(userArray));
    showUserList();
}
var user1;
function createnewAdmin()
{
    userArray = JSON.parse(localStorage.getItem('userArr'));
    user1 = {
        
        username: document.getElementById('user').value,
        password: document.getElementById('pass').value,
       isAdmin: true,
    };

    //console.log(user1.username);
    //console.log(user1.fullname);
    //console.log("Type user 1:");
   // console.log(typeof(user1));
    userArray.push(user1);
    
    localStorage.setItem('userArr',JSON.stringify(userArray));
    showUserList();
}
   
window.onload=function()
{
    redirect();
    //createProduct(productArray);
    let userArray= JSON.parse(localStorage.getItem('userArr'));
    //showUserList(userArray);
    //createnewAdmin();
    //createnewCustomer();
    deleteuser();
};