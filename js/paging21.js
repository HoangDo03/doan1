let perPage = 8;
let idPage = 1;
let start = 0;
let end = perPage;
const product =  JSON.parse(localStorage.getItem('product'));


localStorage.setItem("product",JSON.stringify(product));

// function highlightText() {
//     const title = document.querySelectorAll('.divproduct h4');
//     title.forEach((title, index) => {
//         let titleText = title.innerHTML;
//         let indexOf = Number(titleText.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()));
//         let searchTextLength = searchText.value.length;
//         titleText = titleText.substring(0, indexOf) + "<span class='highlight'>" + titleText.substring(indexOf, indexOf + searchTextLength) + "</span>" + titleText.substring(indexOf + searchTextLength, titleText.length);
//         title.innerHTML = titleText;
//         console.log(titleText);
//     })
// }
// const plant = document.querySelector("#plant");
// const setScrollPosition = () => {
//     plant.scrollTo({top:0, behavior:"smooth"});
// }
let productArr = product;

const pageConfig = document.querySelector(".page-config select");
const mySelect = document.getElementById("mySelect");
const countTotalPage = document.querySelector(".total-page");
const countTotalProduct = document.querySelector(".total-item");

let totalPages = Math.ceil(productArr.length / perPage);
const searchText = document.querySelector(".search-box input");
const searchBtn = document.getElementById("search-button");

const sortSelect = document.getElementById("sort-select");
const filterSelect = document.getElementById("filter-select");

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

//const pnli = document.querySelector("#pagenumber li");
//console.log(btnNext);
// console.log(totalPages);

function initRender(productAr, totalPage) {
    console.dir(productAr);
    renderProduct(productAr);
    renderListPage(totalPage);
}

initRender(productArr, totalPages);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`;
}

const deleteBtn = document.querySelectorAll(".divproduct .delete");

deleteBtn.forEach((item, index) => {
    deleteBtn[index].addEventListener("click", () => {
        product.splice(index, 1);
        productArr = product;
        renderProduct(productArr);
    });
});

getCurrentPage(1);
searchBtn.addEventListener("click", () => {
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        if (
            item.title
                .toLocaleLowerCase()
                .includes(searchText.value.toLocaleLowerCase())
        ) {
            productArr.push(item);
        }
    });

    if (productArr.length === 0) {
        document.getElementById("no-result").style.display = "block";
        //$('.no-result').css('display', 'block')
    } else {
        document.getElementById("no-result").style.display = "none";
        //$('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        btnPrev.classList.add("btn-active");
        btnNext.classList.add("btn-active");
        // $('.btn-prev').addClass('btn-active');
        // $('.btn-next').addClass('btn-active');
    } else {
        btnNext.classList.remove("btn-active");
    }
});


searchText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});
pageConfig.addEventListener("change", () => {
    idPage = 1;
    perPage = Number(pageConfig.value);
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    if (totalPages == 1) {
        btnPrev.classList.add("btn-active");
        btnNext.classList.add("btn-active");
        // $('.btn-prev').addClass('btn-active');
        // $('.btn-next').addClass('btn-active');
    } else {
        btnNext.classList.remove("btn-active");
        //$('.btn-next').removeClass('btn-active');
    }
    changePage();
});
function renderProduct() {
    html = "";
    const productList =  JSON.parse(localStorage.getItem('product'));
    const Product = productList.map((item, idx) => {
        if (idx >= start && idx < end) {
            html += '<div class="divproduct" onclick=document.getElementById("detail").style.display="block">';
            html += '<div class="box">';
            html += "<a>";
            html += `<div class="img_pr" data-idx="${idx}" ><img src="`+ item.image + '"></div>';
            // html += '<div class="img_pr"><img src="' + item.image + '"></div>';
            html += "</a>";
            html += "<h4>" + item.title + "</h4>";
            html += '<div class="cost">' + item.cost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + "</div>";
            html +=
                '<div class="category" style="display:none">' +
                item.category +
                "</div>";
            html += "</div>";
            html += '<div class="btn"><i class="fa-solid fa-cart-plus"></i></div>';
            html += "</div>";
            return html;
        }
    });
    document.getElementById("container").innerHTML = html;
    // highlightText();

    document.querySelectorAll('.img_pr').forEach((imgDetail)=>{
        imgDetail.addEventListener("click" , () => {
            var idx = Number(imgDetail.dataset.idx);
            alert(idx)
            var detail_Pr = productList[idx];
            show_detail(detail_Pr);
            // show_detail(idx);
        })
    })
    
    // $(document).on('click', '.img_pr', function (ev) {
//     let index = ev.target.id;
//     let detail1 = product[index];
//     show_detail(detail1);
//     })

}

// renderProduct();//goi lai ham de ham hoat dong
// renderListPage();

function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = '';
    }
    document.getElementById("pagenumber").innerHTML = html;
}
function changePage() {
    const idPages = document.querySelectorAll(".pagenumber li");
    // console.log(idPages);
    const a = document.querySelectorAll(".pagenumber li a");
    for (let i = 0; i < idPages.length; i++) {
        //click vao trang i se hien ra nd trang i
        //idPages[i].addEventListener('click' , () => {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            //current[0].className=current[0].className.replace("active", "");
            this.classList.add("active");
            if (value > 1 && value < idPages.length) {
                btnPrev.classList.remove("btn-active");
                btnNext.classList.remove("btn-active");
                //$('.btn-prev').removeClass('btn-active');
                //$('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                btnPrev.classList.add("btn-active");
                btnNext.classList.remove("btn-active");
                //$('.btn-prev').addClass('btn-active');
                //$('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                btnNext.classList.add("btn-active");
                btnPrev.classList.remove("btn-active");
                //$('.btn-next').addClass('btn-active');
                //$('.btn-prev').removeClass('btn-active');
            }
            //console.log(value);
            //console.log(idPages);
            idPage = value;
            getCurrentPage(idPage);
            // console.log(getCurrentPage(idPage));
            renderProduct(productArr);
        };
    }
}
changePage();

//sang trang kế

//const pnli = document.querySelector("#pagenumber li");
document.querySelector(".btn-next").addEventListener("click", function () {
    //$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    //console.log(start,end);
    if (idPage == totalPages) {
        btnNext.classList.add("btn-active");
    } else {
        btnNext.classList.remove("btn-active");
    }
    const btnnPrev = document.querySelector(".btn-prev");
    btnnPrev.classList.remove("btn-active");
    const pnli = document.querySelector(".pagenumber li");
    pnli.classList.remove('active');
    const allPages = document.querySelectorAll(".pagenumber li")
    if(allPages)
    {
        //allPages[idPage].classList.remove('active');
        allPages[idPage - 1].classList.add('active');
    }
    //$(`.pagenumber li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

//quay lai trang truoc
document.querySelector(".btn-prev").addEventListener("click", function () {
    //$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    // console.log(start,end);
    if (idPage == 1) {
        btnPrev.classList.add("btn-active");
    } else {
        btnPrev.classList.remove("btn-active");
    }
    const btnNext = document.querySelector(".btn-next");
    btnNext.classList.remove("btn-active");
    //const pnli = document.querySelector(".pagenumber li");
    //pnli.classList.remove('active');
    const allPages = document.querySelectorAll(".pagenumber li")
    if(allPages)
    {
        allPages[idPage].classList.remove('active');
        allPages[idPage - 1].classList.add('active');
    }
    // for( let i=idPage-1; i<idPage; i++)
    // {
    //     pnli.classList.add('active');
    // }
    //const pnnli=idPage - 1;
    // if (idPage -1)
    // {
    //     pnli.classList.add('active');
    // }
    //const pli = document.querySelector('pnnli');
    //pli.classList.add('active');
    //$('.pagenumber li').removeClass('active');
    //$(`.pagenumber li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

//sort
sortSelect.addEventListener("change", sortChange);

function sortChange(e) {
    idPage = 1;
    productArr = [...product];
    console.dir(e.target.value);

    switch (e.target.value) {
        case "HighToLow":
            productArr.sort((a, b) => b.cost - a.cost);
            break;
        case "LowToHigh":
            productArr.sort((a, b) => a.cost - b.cost);
            break;
        case "A-Z":
            productArr.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
            break;
        case "Z-A":
            productArr.sort((a, b) => {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
                return 0;
            });
            break;
        default:
            break;
    }

    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        btnPrev.classList.add("btn-active");
        btnNext.classList.add("btn-active");
    } else {
        btnNext.classList.remove("btn-active");
    }
}

//filter

filterSelect.addEventListener("change", filterChange);

function filterChange(e) {
    idPage = 1;
    productArr = [...product];

    switch (e.target.value) {
        case "indoor":
            productArr = productArr.filter((product) => product.category === 'indoor');
            break;
        case "outdoor":
            productArr = productArr.filter((product) => product.category === 'outdoor');
            break;
        default:
            break;
    }

    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        btnPrev.classList.add("btn-active");
        btnNext.classList.add("btn-active");
    } else {
        btnNext.classList.remove("btn-active");
    }
}

//product detail
//let d = product;
function show_detail() {
    // const detail = product;
    const productList =  JSON.parse(localStorage.getItem('product'));

    const detail =productList.map((item,idx) => {
    html_detail = `<div class="col-md-5"> 
    <ul>
            <li><img src="${item.img1}" onclick="changeImage('one')" id="one"></li>
            <li><img src="${item.img2}" onclick="changeImage('two')" id="two"></li>
            <li><img src="${item.img3}" onclick="changeImage('three')" id="three"></li>
            <li><img src="${item.img4}" onclick="changeImage('four')" id="four"></li>
        </ul>
        <div id="main-image">
            <img src="${item.image}" id="image_main"></li>
        </div></div>
     <div class="col-md-7">
         <ul>
            <li> ${item.title}</li>
            <li>  ${item.cost}</li>
            <li> ${item.describe}</li>
            <li><p>Amount</p>
            <div id="buy-amount">
            <button class="minus-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
          </svg>
          </button>
        <input type="text" name="amount" value="1" id="amount" class="amount" />
        <button class="plus-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          </button>
        </div>
        <div class="cart">add cart</div>
            </li>
        </ul>
    </div>`;
    const productDetail = document.getElementById("product-detail");
    productDetail.innerHTML = html_detail;

// productDetail.addEventListener('click', '.img_pr', (ev) => {
//     let index = ev.target.id;
//     let detail1 = product[index];
//     show_detail(detail1);
// })
// $(document).on('click', '.img_pr', function (ev) {
//     let index = ev.target.id;
//     let detail1 = product[index];
//     show_detail(detail1);
//     })

    let amountElement = document.getElementById('amount');
    const minus = productDetail.querySelector(".minus-btn");
    const plus = productDetail.querySelector(".plus-btn");
    let amount = amountElement.value;
    let render = (amount) => {
        amountElement.value = amount;
    }
    //handle plus
    plus.addEventListener("click",() => {
        amount++;
        render(amount);
        // console.log(amount);
    })

    minus.addEventListener("click", () => {
        if (amount > 1)
            amount--;
        render(amount);
        // console.log(amount);
    })
    //handle minus
    amountElement.addEventListener('change', () => {
        amount = amountElement.value;
        amount = parseInt(amount);
        amount = (isNaN(amount) || amount == 0) ? 1 : amount;
        //console.log(amount);
    })
})
}


//$('#product-detail').html(html_detail);

// var detail= product.filter(function(d,index,array){
//     return d;
// })
// document.querySelector('.img_pr').addEventListener('click', (ev) =>{
//     let index = ev.target.id;
//     let detail = product[index];
//     show_detail(detail);
// })

// $(document).on('click', '.img_pr', function (ev) {
//     let index = ev.target.id;
//     let detail1 = product[index];
//     show_detail(detail1);
// })