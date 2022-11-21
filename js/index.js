function redirect(){
    var url = window.location.href;//cac href hien co tren trang 
    var id = url.split('?');//truot den ?
    id=id[1];
    console.log = (id);
    switch(id)
    {
        case "plants":
        {
            document.getElementById('plant').style.display="block";
            document.getElementById('change').style.display="none";
            break;
        }
        case "contactus":
        {
            document.getElementById('change').innerHTML='<div>contactus</div>';
            break;
        }
        case "plantcare":
        {
            document.getElementById('change').style.display='none';
            document.getElementById('takecare').style.display='flex';
            break;
        }
        case "cart":
        {
                       
            document.getElementById('change').innerHTML='<div>cart</div>';
            break;
        }
    }
}
window.onload=function()//chuyen huong trang web
{
    redirect_page();
}
window.onload=function()//chuyen huong trang web
{
    redirect();
}
function home_redirect(){
    // alert('Home');
    window.location="http://127.0.0.1:5500/doan/index.html";//chuyen huong den trang chu 
}
function pr_redirect(){
    window.location="http://127.0.0.1:5500/doan/index.html?plants";
}
function Subscribe_redirect(){
    alert('Subscribed!');
}

//  giu header
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
            
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        } else {
        header.classList.remove("sticky");
        }
}
            // var x=document.getElementById('login');
            // var y=document.getElementById('register');
            // var z=document.getElementById('btn');
            // function register()
            // {
            //     x.style.left='400px'; dinh vi phan tu -400 tu canh trai
            //     y.style.left='50px';
            //     z.style.left='110px';
            // }
            // function login()
            // {
            //     x.style.left='50px';
            //     y.style.left='450px';
            //     z.style.left='0px';
            // }
            // var modal = document.getElementById('login-form');
            // window.onclick = function(event) 
            // {
            //     if (event.target == modal) 
            //     {
            //         modal.style.display = "none";
            //     }
            // } 
            /* dung chuot click thi no nhay vao ham. Neu click vao dung doi tuong(target) la modal 
            thi doi style display cua modal element thanh none*/
            
// san pham

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
// document.addEventListener("click", closeAllSelect);

function changeImage(id){
    // console.log(id);
    let image_path = document.getElementById(id).getAttribute('src');
    // console.log(image_path);
    document.getElementById('image_main').setAttribute('src',image_path);
}