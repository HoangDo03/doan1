let perPage = 8;
let idPage = 1;
let start = 0;
let end = perPage;

const product = [
    {
        id: 1,
        title: "Snake Plant Laurentii",
        image: "img/snakelauren1.jpg",
        img1: "img/snakelauren1.jpg",
        img2:"img/snakelauren2.jpg",
        img3:"img/snakelauren3.jpg",
        img4:"img/snakelauren4.jpg",
        describe: "The Snake Plant Laurentii, or Sansevieria trifasciata 'Laurentii', is a succulent plant characterized by its upright sword-like leaves with vibrant yellow edges. It is popular for its incredibly easy-going nature (it can tolerate low light and drought) and its air-purifying capabilities. The easiest way to kill this plant is to overcare for it.",
        cost: 350000,
        category: "indoor",
    },
    {
        id: 2,
        title: "Calathea Rattlesnake",
        image: "img/calathea1.jpg",
        img1:"img/calathea1.jpg",
        img2:"img/calathea2.jpg",
        img3:"img/calathea3.jpg",
        img4:"img/calathea4.jpg",
        describe: "Calathea Rattlesnake or Calathea lancifolia houseplants are tropical plants with wavy rattlesnake shaped leaves, with a deep burgundy underside and vibrant green patterned top side. These beautiful indoor plants provide a colour filled focal point in any room. Similarly to other Calatheas, they need indirect light or light shade, a lot of humidity and constant soil moisture to thrive; so either keep them in a bathroom or kitchen or next to a humidifier.",
        cost: 310000,
        category: "indoor",
    },
    {
        id: 3,
        title: "Fiddle Leaf Fig",
        image: "img/fiddle1.jpg",
        img1:"img/fiddle1.jpg",
        img2:"img/fiddle2.jpg",
        img3:"img/fiddle3.jpg",
        img4:"img/fiddle4.jpg",
        describe: "The Fiddle Leaf Fig or Ficus lyrata is a beautiful plant with large violin-shaped, thick and leathery dark green leaves stemming from its woody stem. The Fiddle Leaf Fig is a statement piece and will add an architectural feature to your living room or bedroom.",
        cost: 350000,
        category: "outdoor",
    },
    {
        id: 4,
        title: "Money Tree",     
        image: "img/moneytree1.jpg",
        img1:"img/moneytree1.jpg",
        img2:"img/moneytree2.jpg",
        img3:"img/moneytree3.jpg",
        img4:"img/moneytree4.jpg",
        describe: "Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ",
        cost: 410000,
        category: "indoor",
    },
    {
        id: 5,
        title: "Autumn Fern",
        image: "img/autumn1.png",
        img1:"img/autumn1.png",
        img2:"img/autumn2.png",
        img3:"img/autumn3.png",
        img4:"",
        describe: "The lacey fronds of the Autumn Fern add color, dimension, and texture to your space. Newly unfurled fronds start off copper or bronze, then mature to deep green. It is relatively easy-going for a fern but is happiest in high humidity and indirect light, mimicking the environment of Asia’s cool and shady forests it is native to.",
        cost: 370000,
        category: "indoor",
    },
    {
        id: 6,
        title: "ZZ Plant",
        image: "img/zzplant1.jpg",
        img1:"img/zzplant1.jpg",
        img2:"img/zzplant2.jpg",
        img3:"img/zzplant3.jpg",
        img4:"img/zzplant4.jpg",
        describe: "The ZZ Plant is an eye-catching architectural plant with waxy, dark green, oval-shaped leaves attached to its elegant, arching stems. It is an easy care plant, as it is drought tolerant and can cope well in a range of light conditions including light shade. One of our most popular plants, it can also be quick growing, so a great low stress way to have a high impact plant in your home. Works well in bedrooms, kitchens and living rooms.    ",
        cost: 450000,
        category: "indoor",
    },
    {
        id: 7,
        title: "Monstera Deliciosa",  
        image: "img/monstera1.png",
        img1:"img/monstera1.png",
        img2:"img/monstera2.png",
        img3:"img/monstera3.png",
        img4:"img/monstera4.png",
        describe: "Nicknamed the swiss cheese plant, the Monstera Deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.",
        cost: 350000,
        category: "indoor",
    },
    {
        id: 8,
        title: "Golden pothos", 
        image: "img/golden1.jpg",
        img1:"img/golden1.jpg",
        img2:"img/golden2.jpg",
        img3:"img/golden3.jpg",
        img4:"img/golden4.jpg",
        describe: "Golden pothos or Epipremnum aureum are plants that love to hang, climb or trail. They have beautifully marbled, variegated leaves that are speckled with spots of cream and green. These trailing vines are one of the most popular houseplants due to their easy care requirements and ability to transform rooms into a lush tropical paradise. This golden pothos comes attached climbing a moss pole.  ",
        cost: 300000,
        category: "indoor",
    },
    {
        id: 9,
        title: "Flamingo Flower Pink", 
        image: "img/flamingo_pink1.jpg",
        img1:"img/flamingo_pink1.jpg",
        img2:"img/flamingo_pink2.jpg",
        img3:"img/flamingo_pink3.jpg",
        img4:"img/flamingo_pink4.jpg", 
        describe: "The Flamingo Flower is a beautiful flowering indoor plant. With pink palette-like leaves that enclose yellow spikes and contrasting dark green foliage, it will make a colourful tropical splash in your home. With long lasting blooms, the Flamingo flower makes an attractive and eco alternative to replace cut flowers in your home or give as a gift.",
        cost: 400000,
        category: "indoor",
    },
    {
        id: 10,
        title: "Flamingo Flower Red", 
        image: "img/flamingo_red1.jpg",
        img1:"img/flamingo_red1.jpg",
        img2:"img/flamingo_red2.jpg",
        img3:"img/flamingo_red3.jpg",
        img4:"img/flamingo_red4.jpg",
        describe: "The Flamingo Flower is a beautiful flowering indoor plant. With red palette-like leaves that enclose yellow spikes and contrasting dark green foliage, it will make a colourful tropical splash in your home. With long-lasting blooms, the Flamingo flower makes an attractive and eco alternative to replace cut flowers in your home or give as a gift.",
        cost: 400000,
        category: "indoor",
    },
    {
        id: 11,
        title: "Schefflera Arboricola",
        image: "img/schefflera1.jpg", 
        img1:"img/schefflera1.jpg",
        img2:"img/schefflera2.jpg",
        img3:"img/schefflera3.jpg",
        img4:"img/schefflera4.jpg",
        describe: "The Schefflera Arboricola features a single or braided trunk and tree-like clusters of leaflets, which have been likened to umbrellas, wheels, and octopi! You can help it retain its foliage by placing it in bright light and spacing out waterings. Sized to ship best, our large Umbrella Tree arrives with room to grow as it adapts to your home’s conditions.",
        cost: 310000,
        category: "indoor",
    },
    {
        id: 12,
        title: "Chinese Money Plant", 
        image: "img/chinese_money1.jpg", 
        img1:"img/chinese_money1.jpg",
        img2:"img/chinese_money2.jpg",
        img3:"img/chinese_money3.jpg",
        img4:"img/chinese_money4.jpg",
        describe: "The Chinese Money Plant or Pilea peperomioides houseplant has cute, attractive, round leaves balancing almost like pancakes on long petioles attached to a central stem, which in time grows up vertically. Easy to look after, they make a perfect tabletop companion.",
        cost: 350000,
        category: "indoor",
    },
    {
        id: 13,
        title: "Calathea Rattlesnake",
        image: "img/calathea_rattlesnake.jpg",
        img1:"img/calathea_rattlesnake.jpg",
        img2:"img/calathea2.jpg",
        img3:"img/calathea3.jpg",
        img4:"img/calathea4.jpg",
        describe: "Calathea Rattlesnake or Calathea lancifolia houseplants are tropical plants with wavy rattlesnake shaped leaves, with a deep burgundy underside and vibrant green patterned top side. These beautiful indoor plants provide a colour filled focal point in any room. Similarly to other Calatheas, they need indirect light or light shade, a lot of humidity and constant soil moisture to thrive; so either keep them in a bathroom or kitchen or next to a humidifier.",
        cost: 420000,
        category: "outdoor",
    },
    {
        id: 14,
        title: "Alocasia Black Velvet", 
        image: "img/alocasia1.jpg", 
        img1:"img/alocasia1.jpg",
        img2:"img/alocasia2.jpg",
        img3:"img/alocasia3.jpg",
        img4:"img/alocasia4.jpg",
        describe: "The Alocasia Black Velvet boasts velvety black leaves with contrasting bright white veins. Why are the leaves black? The plant absorbs light energy from almost the entire visible spectrum—perhaps an evolutionary need in its native low-light environments. But don't stick the Black Velvet in a dark corner; it is happiest in bright indirect light. ",
        cost: 500000,
        category: "outdoor",
    },
    {
        id: 15,
        title: "Desert Rose", 
        image: "img/desert_rose1.jpg",
        img1:"img/desert_rose1.jpg",
        img2:"img/desert_rose2.jpg",
        img3:"img/desert_rose3.jpg",
        img4:"",
        describe: "Unlike Sting, this Desert Rose doesn’t need to dream of rain. A slow-growing succulent, the Adenium obesum holds water in its swollen trunk, helping it survive drought in the wild. In your home, it will do best in a spot that receives bright direct light. As part of its natural cycle, the Desert Rose may drop its foliage when winter arrives due to less light and lower temps, entering a period of dormancy. No need to worry as it will sprout new leaves come spring.",
        cost: 350000,
        category: "outdoor",
    },
    {
        id: 16,
        title: "Philodendron Green", 
        image: "img/philodendron1.jpg",
        img1:"img/philodendron1.jpg",
        img2:"img/philodendron2.jpg",
        img3:"img/philodendron3.jpg",
        img4:"img/philodendron4.jpg",
        describe: "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring the outdoors in.",
        cost: 310000,
        category: "indoor",
    },
    {
        id: 15,
        title: "Desert Rose", 
        image: "img/desert_rose1.jpg",
        img1:"img/desert_rose1.jpg",
        img2:"img/desert_rose2.jpg",
        img3:"img/desert_rose3.jpg",
        img4:"",
        describe: "Unlike Sting, this Desert Rose doesn’t need to dream of rain. A slow-growing succulent, the Adenium obesum holds water in its swollen trunk, helping it survive drought in the wild. In your home, it will do best in a spot that receives bright direct light. As part of its natural cycle, the Desert Rose may drop its foliage when winter arrives due to less light and lower temps, entering a period of dormancy. No need to worry as it will sprout new leaves come spring.",
        cost: 350000,
        category: "indoor",
    },
    {
        id: 16,
        title: "Philodendron Green", 
        image: "img/philodendron1.jpg",
        img1:"img/philodendron1.jpg",
        img2:"img/philodendron2.jpg",
        img3:"img/philodendron3.jpg",
        img4:"img/philodendron4.jpg",
        describe: "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring the outdoors in.",
        cost: 310000,
        category: "outdoor",
    },
    { 
        id: 17, 
        title: "Peperomia Obtusifolia", 
        image: "img/peperomia1.jpg",
        img1:"img/peperomia1.jpg",
        img2:"img/peperomia2.jpg",
        img3:"img/peperomia3.jpg",
        img4:"img/peperomia4.jpg",
        describe: "The Peperomia obtusifolia, also known as the baby rubber plant, is an easy-going houseplant characterized by its thick, succulent-like green leaves. A popular variety of Peperomia, it does not need much to thrive and might even reward you with white flower spikes once a year.", 
        cost: 350.000,
        category: "indoor",
    },
];

localStorage.setItem("product",JSON.stringify(product));


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
const dt=document.getElementById('detail');
function renderProduct(container) {
    html = "";
    const productList = JSON.parse(localStorage.getItem('product'));
    const content = container.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="divproduct" onclick=dt.style.display="block">';
            html += '<div class="box">';
            html += "<a>";
            html += `<div class="img_pr" id="`+index +`" ><img src="`+ item.image + '"></div>';
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
    document.querySelectorAll('.img_pr').forEach((imgDetail) => {
        imgDetail.addEventListener("click", (ev) => {
            // var idx = imgDetail.dataset.idx;
            // alert(idx)
            // var detail_Pr = productList[idx];
            // alert(detail_Pr)
            // show_detail(detail_Pr);
            ev.preventDefault();
            var idx = ev.target.id;
            // alert(detail_Pr)
            show_detail(productList,idx);
            // show_detail(idx);
        })
    })
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


function show_detail(container,idx) {
    //const detail = product;
    // alert(index)
    let html_detail= "";
    //const productList =  JSON.parse(localStorage.getItem('product'));
    //const detail =container.map((item,idx) => {
        // lay du lieu tu vi tri index = idx tren localStorage;
    var item= Object.values(productArr)[idx];
    // if (index === item.id) {
    
    html_detail+= `<div class="col-md-5"> 
    <ul> 
            <li><img src="`+item.img1+`" onclick="changeImage('one')" id="one"></li>
            <li><img src="`+item.img2+`" onclick="changeImage('two')" id="two"></li>
            <li><img src="`+item.img3+`" onclick="changeImage('three')" id="three"></li>
            <li><img src="`+item.img4+`" onclick="changeImage('four')" id="four"></li>
        </ul>
        <div id="main-image">
            <img src="`+item.image+`" id="image_main"></li>
        </div></div>
     <div class="col-md-7">
         <ul>
            <li>`+item.title+`</li>
            <li> `+item.cost+`</li>
            <li> `+item.describe+`</li>
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
}





