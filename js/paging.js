let perPage = 8;
let idPage = 1;
let start = 0;
let end = perPage;

const product = [
    { id: 1, 
    title: "Snake Plant Laurentii",
    image: "https://i.pinimg.com/564x/c6/b4/79/c6b479f74fad123ba6aac313b9d035a7.jpg",
    img1: "https://i.pinimg.com/564x/c6/b4/79/c6b479f74fad123ba6aac313b9d035a7.jpg",
    img2:"https://i.pinimg.com/564x/69/b0/fa/69b0faca111ff1333e323a3c1c0bcd38.jpg",
    img3:"https://i.pinimg.com/564x/0d/05/ae/0d05ae092a88b72ef33068679bfa223f.jpg",
    img4:"https://i.pinimg.com/564x/92/76/c9/9276c9502824266efb529c4804a46570.jpg",
    describe: "The Snake Plant Laurentii, or Sansevieria trifasciata 'Laurentii', is a succulent plant characterized by its upright sword-like leaves with vibrant yellow edges. It is popular for its incredibly easy-going nature (it can tolerate low light and drought) and its air-purifying capabilities. The easiest way to kill this plant is to overcare for it.", 
    cost: "350.000 vnd" },

    { id: 2, 
    title: "Calathea Rattlesnake", 
    image: "https://i.pinimg.com/564x/e0/86/74/e0867468f981ad418649e24781dea844.jpg",
    img1:"https://i.pinimg.com/564x/e0/86/74/e0867468f981ad418649e24781dea844.jpg",
    img2:"https://i.pinimg.com/564x/73/6c/78/736c7821a5b0ef777079631c5776328d.jpg",
    img3:"https://i.pinimg.com/564x/66/dd/6b/66dd6b4f4104126a921969a0dfe8c1ac.jpg",
    img4:"https://i.pinimg.com/564x/07/40/3f/07403f8a6051718038da2f26e1814a89.jpg",
    describe: "Calathea Rattlesnake or Calathea lancifolia houseplants are tropical plants with wavy rattlesnake shaped leaves, with a deep burgundy underside and vibrant green patterned top side. These beautiful indoor plants provide a colour filled focal point in any room. Similarly to other Calatheas, they need indirect light or light shade, a lot of humidity and constant soil moisture to thrive; so either keep them in a bathroom or kitchen or next to a humidifier.", 
    cost: "310.000 vnd" },

    { id: 3, 
    title: "Fiddle Leaf Fig",
    image: "https://i.pinimg.com/564x/26/36/1e/26361ea26931d9717d8671910c441346.jpg",
    img1:"https://i.pinimg.com/564x/26/36/1e/26361ea26931d9717d8671910c441346.jpg",
    img2:"https://i.pinimg.com/564x/33/81/96/338196ab499deeba30b1baa171a14d81.jpg",
    img3:"https://i.pinimg.com/564x/0c/b7/a0/0cb7a0310879aceddbbf5caaab4a0a62.jpg",
    img4:"https://i.pinimg.com/564x/37/58/de/3758def7c03687cf086096285dcacb84.jpg",
    describe: "The Fiddle Leaf Fig or Ficus lyrata is a beautiful plant with large violin-shaped, thick and leathery dark green leaves stemming from its woody stem. The Fiddle Leaf Fig is a statement piece and will add an architectural feature to your living room or bedroom.", 
      cost: "350.000 vnd" },

    { id: 4, 
    title: "Money Tree",     
    image: "https://i.pinimg.com/564x/27/9c/d1/279cd1ae58d6d8372a1c99045a32f5d4.jpg",
    img1:"https://i.pinimg.com/564x/27/9c/d1/279cd1ae58d6d8372a1c99045a32f5d4.jpg",
    img2:"https://i.pinimg.com/564x/0d/35/f4/0d35f48a3f5fdbec8f31bf1143ce536d.jpg",
    img3:"https://i.pinimg.com/564x/a5/84/5f/a5845fbe3517dd1a8da302d8597682af.jpg",
    img4:"https://i.pinimg.com/564x/90/98/5d/90985d8b6365dce206f6fb485bcf38c0.jpg",
    describe: "Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ", 
    cost: "410.000 vnd" },

    { id: 5, 
    title: "Autumn Fern",
    image: "https://i.pinimg.com/564x/49/48/08/494808c0f943927bf1e8707728d59bea.jpg",
    img1:"https://i.pinimg.com/564x/49/48/08/494808c0f943927bf1e8707728d59bea.jpg",
    img2:"https://i.pinimg.com/564x/80/fe/18/80fe181468f1f66ac2739b3f556d1c18.jpg",
    img3:"https://i.pinimg.com/564x/76/5a/f4/765af447a37e380ed9e33d3ba419cee6.jpg",
    img4:"",
    describe: "The lacey fronds of the Autumn Fern add color, dimension, and texture to your space. Newly unfurled fronds start off copper or bronze, then mature to deep green. It is relatively easy-going for a fern but is happiest in high humidity and indirect light, mimicking the environment of Asia’s cool and shady forests it is native to.    ", 
     cost: "370.000 vnd" },

    { id: 6, 
    title: "ZZ Plant",
    image: "https://i.pinimg.com/564x/a4/5f/55/a45f5562e8262cd94cf09597c09c0333.jpg",
    img1:"https://i.pinimg.com/564x/a4/5f/55/a45f5562e8262cd94cf09597c09c0333.jpg",
    img2:"https://i.pinimg.com/564x/fc/68/84/fc68844445612045994d896f691f1809.jpg",
    img3:"https://i.pinimg.com/564x/ea/58/50/ea5850f16357c2a09ebc6302c25d0ee5.jpg",
    img4:"https://i.pinimg.com/564x/71/a3/d7/71a3d7a3788b742875a95489c5c1a782.jpg",
    describe: "The ZZ Plant is an eye-catching architectural plant with waxy, dark green, oval-shaped leaves attached to its elegant, arching stems. It is an easy care plant, as it is drought tolerant and can cope well in a range of light conditions including light shade. One of our most popular plants, it can also be quick growing, so a great low stress way to have a high impact plant in your home. Works well in bedrooms, kitchens and living rooms.    ", 
    cost: "400.000 vnd" },

    { id: 7,
    title: "Monstera Deliciosa",  
    image: "https://i.pinimg.com/564x/ed/2b/30/ed2b301f19a5d83a6311c323e6f3272e.jpg",
    img1:"https://i.pinimg.com/564x/ed/2b/30/ed2b301f19a5d83a6311c323e6f3272e.jpg",
    img2:"https://i.pinimg.com/564x/e6/a2/ee/e6a2eec5627602fa7756a1248025aa8c.jpg",
    img3:"https://i.pinimg.com/564x/50/9f/b4/509fb4bcea5ccb5953477bb561c78ac8.jpg",
    img4:"https://i.pinimg.com/564x/1e/25/01/1e2501788551f731c25d448f6ae7520d.jpg",
    describe: "Nicknamed the swiss cheese plant, the Monstera Deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.", 
    cost: "350.000 vnd" },

    { id: 8, 
    title: "Golden pothos", 
    image: "https://i.pinimg.com/564x/37/1e/9c/371e9c9972d4c0e30e6ff965c9bbb612.jpg",
    img1:"https://i.pinimg.com/564x/37/1e/9c/371e9c9972d4c0e30e6ff965c9bbb612.jpg",
    img2:"https://i.pinimg.com/564x/7a/a1/95/7aa1953793b917374c362126a7f93a9e.jpg",
    img3:"https://i.pinimg.com/564x/e8/5a/31/e85a31ff716809c70416e3c94e6252ee.jpg",
    img4:"https://i.pinimg.com/564x/77/a8/db/77a8dbd58af71ce791af8983aa577e9b.jpg",
    describe: "Golden pothos or Epipremnum aureum are plants that love to hang, climb or trail. They have beautifully marbled, variegated leaves that are speckled with spots of cream and green. These trailing vines are one of the most popular houseplants due to their easy care requirements and ability to transform rooms into a lush tropical paradise. This golden pothos comes attached climbing a moss pole.  ", 
    cost: "310.000 vnd" },

    { id: 9,
    title: "Flamingo Flower Pink", 
    image: "https://i.pinimg.com/564x/31/61/d6/3161d6f3c74b65af5d47f10fbd8db409.jpg",
    img1:"https://i.pinimg.com/564x/31/61/d6/3161d6f3c74b65af5d47f10fbd8db409.jpg",
    img2:"https://i.pinimg.com/564x/1c/12/e4/1c12e4f6efee858058df7034b632d5f3.jpg",
    img3:"https://i.pinimg.com/564x/29/05/3e/29053e18bff19a74fb6a7c06a4a2ee60.jpg",
    img4:"https://i.pinimg.com/564x/30/64/f1/3064f1c00d943d52f4237ac15e8ee2f3.jpg", 
    describe: "The Flamingo Flower is a beautiful flowering indoor plant. With pink palette-like leaves that enclose yellow spikes and contrasting dark green foliage, it will make a colourful tropical splash in your home. With long lasting blooms, the Flamingo flower makes an attractive and eco alternative to replace cut flowers in your home or give as a gift.", 
    cost: "400.000 vnd" },

    { id: 10, 
    title: "Flamingo Flower Red", 
    image: "https://i.pinimg.com/564x/a6/e2/81/a6e281ebaab2709443c8020f6ec87486.jpg", 
    img1:"https://i.pinimg.com/564x/a6/e2/81/a6e281ebaab2709443c8020f6ec87486.jpg",
    img2:"https://i.pinimg.com/564x/39/a2/80/39a2809729f0cfe0940e494341477b3f.jpg",
    img3:"https://i.pinimg.com/564x/c4/87/88/c487887950e8e53ff5cf96356edb5467.jpg",
    img4:"https://i.pinimg.com/564x/33/a1/6a/33a16a7e2a281c88c7d67801efc77060.jpg",
    describe: "The Flamingo Flower is a beautiful flowering indoor plant. With red palette-like leaves that enclose yellow spikes and contrasting dark green foliage, it will make a colourful tropical splash in your home. With long-lasting blooms, the Flamingo flower makes an attractive and eco alternative to replace cut flowers in your home or give as a gift.", 
    cost: "400.000 vnd" },

    { id: 11, 
     title: "Schefflera Arboricola",
    image: "https://i.pinimg.com/564x/ae/9e/97/ae9e97a857e51518e3fd43fa7b245fa8.jpg", 
    img1:"https://i.pinimg.com/564x/ae/9e/97/ae9e97a857e51518e3fd43fa7b245fa8.jpg",
    img2:"https://i.pinimg.com/564x/89/1d/95/891d95afa201577bfbc6f948926db889.jpg",
    img3:"https://i.pinimg.com/564x/fe/6a/44/fe6a44d7430a8dc6ce7f16a62ae5a726.jpg",
    img4:"https://i.pinimg.com/564x/88/1e/94/881e9458c4c9aa87875815971cc5ffa5.jpg",
    describe: "The Schefflera Arboricola features a single or braided trunk and tree-like clusters of leaflets, which have been likened to umbrellas, wheels, and octopi! You can help it retain its foliage by placing it in bright light and spacing out waterings. Sized to ship best, our large Umbrella Tree arrives with room to grow as it adapts to your home’s conditions.",  
    cost: "320.000 vnd" },

    { id: 12, 
    title: "Chinese Money Plant", 
    image: "https://i.pinimg.com/564x/32/d3/15/32d3152fe8001067a558285c6ba722b6.jpg", 
    img1:"https://i.pinimg.com/564x/32/d3/15/32d3152fe8001067a558285c6ba722b6.jpg",
    img2:"https://i.pinimg.com/564x/33/5c/79/335c792aee9d679d99c20d426ada7277.jpg",
    img3:"https://i.pinimg.com/564x/c8/a3/a5/c8a3a5884de91950a15fce9e806b22a4.jpg",
    img4:"https://i.pinimg.com/564x/2d/08/80/2d088028dd7d2a34bacf1ba4e552d6d3.jpg",
    describe: "The Chinese Money Plant or Pilea peperomioides houseplant has cute, attractive, round leaves balancing almost like pancakes on long petioles attached to a central stem, which in time grows up vertically. Easy to look after, they make a perfect tabletop companion.", 
    cost: "350.000 vnd" },

    { id: 13,
    title: "Calathea Rattlesnake",  
    image: "https://i.pinimg.com/736x/58/f1/7d/58f17d1c9871380ff29084e486f56412.jpg", 
    img1:"https://i.pinimg.com/564x/e0/86/74/e0867468f981ad418649e24781dea844.jpg",
    img2:"https://i.pinimg.com/564x/73/6c/78/736c7821a5b0ef777079631c5776328d.jpg",
    img3:"https://i.pinimg.com/564x/66/dd/6b/66dd6b4f4104126a921969a0dfe8c1ac.jpg",
    img4:"https://i.pinimg.com/564x/07/40/3f/07403f8a6051718038da2f26e1814a89.jpg",
    describe: "Calathea Rattlesnake or Calathea lancifolia houseplants are tropical plants with wavy rattlesnake shaped leaves, with a deep burgundy underside and vibrant green patterned top side. These beautiful indoor plants provide a colour filled focal point in any room. Similarly to other Calatheas, they need indirect light or light shade, a lot of humidity and constant soil moisture to thrive; so either keep them in a bathroom or kitchen or next to a humidifier.", 
    cost: "420.000 vnd" },

    { id: 14, 
    title: "Alocasia Black Velvet", 
    image: "https://i.pinimg.com/564x/e2/6e/f4/e26ef4da3cfbf6e6735ee83e745e4722.jpg", 
    img1:"https://i.pinimg.com/564x/e2/6e/f4/e26ef4da3cfbf6e6735ee83e745e4722.jpg",
    img2:"https://i.pinimg.com/736x/b1/88/eb/b188ebba45a275df535a23ed1e3d9743.jpg",
    img3:"https://i.pinimg.com/564x/12/09/55/12095506887136ce2a7f5d83d8f21e42.jpg",
    img4:"https://i.pinimg.com/564x/95/3f/d1/953fd1b31f9f81d4931729ff090cfb67.jpg",
    describe: "The Alocasia Black Velvet boasts velvety black leaves with contrasting bright white veins. Why are the leaves black? The plant absorbs light energy from almost the entire visible spectrum—perhaps an evolutionary need in its native low-light environments. But don't stick the Black Velvet in a dark corner; it is happiest in bright indirect light. ", 
    cost: "500.000 vnd" },

    { id: 15, 
    title: "Desert Rose", 
    image: "https://i.pinimg.com/564x/3b/3a/94/3b3a94f1a7c37455a040a10bb2a8e2a4.jpg",
    img1:"https://i.pinimg.com/564x/3b/3a/94/3b3a94f1a7c37455a040a10bb2a8e2a4.jpg",
    img2:"https://i.pinimg.com/564x/4d/39/d8/4d39d8306741da1f0f76ebd2752be176.jpg",
    img3:"https://i.pinimg.com/564x/27/3e/1a/273e1a1c2e007c882d99f9366157e572.jpg",
    img4:"",
    describe: "Unlike Sting, this Desert Rose doesn’t need to dream of rain. A slow-growing succulent, the Adenium obesum holds water in its swollen trunk, helping it survive drought in the wild. In your home, it will do best in a spot that receives bright direct light. As part of its natural cycle, the Desert Rose may drop its foliage when winter arrives due to less light and lower temps, entering a period of dormancy. No need to worry as it will sprout new leaves come spring.", 
    cost: "350.000 vnd" },

    { id: 16, 
    title: "Philodendron Green", 
    image: "https://i.pinimg.com/564x/17/b4/a8/17b4a83ff314e47b9224dafd9aab96be.jpg",
    img1:"https://i.pinimg.com/564x/17/b4/a8/17b4a83ff314e47b9224dafd9aab96be.jpg",
    img2:"https://i.pinimg.com/564x/e7/30/ee/e730ee7c3e3cac000072e68b07e17b04.jpg",
    img3:"https://i.pinimg.com/564x/0b/37/aa/0b37aa4358e778587fee0b6c1627af2b.jpg",
    img4:"https://i.pinimg.com/564x/94/47/06/944706ff764c6343694edf6a8f53682f.jpg",
    describe: "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring the outdoors in.", 
    cost: "310.000 vnd" },

    { id: 15, 
    title: "Desert Rose", 
    image: "https://i.pinimg.com/564x/3b/3a/94/3b3a94f1a7c37455a040a10bb2a8e2a4.jpg",
    img1:"https://i.pinimg.com/564x/3b/3a/94/3b3a94f1a7c37455a040a10bb2a8e2a4.jpg",
    img2:"https://i.pinimg.com/564x/4d/39/d8/4d39d8306741da1f0f76ebd2752be176.jpg",
    img3:"https://i.pinimg.com/564x/27/3e/1a/273e1a1c2e007c882d99f9366157e572.jpg",
    img4:"",
    describe: "Unlike Sting, this Desert Rose doesn’t need to dream of rain. A slow-growing succulent, the Adenium obesum holds water in its swollen trunk, helping it survive drought in the wild. In your home, it will do best in a spot that receives bright direct light. As part of its natural cycle, the Desert Rose may drop its foliage when winter arrives due to less light and lower temps, entering a period of dormancy. No need to worry as it will sprout new leaves come spring.", 
    cost: "350.000 vnd" },

    { id: 16, 
     title: "Philodendron Green", 
    image: "https://i.pinimg.com/564x/17/b4/a8/17b4a83ff314e47b9224dafd9aab96be.jpg",
    img1:"https://i.pinimg.com/564x/17/b4/a8/17b4a83ff314e47b9224dafd9aab96be.jpg",
    img2:"https://i.pinimg.com/564x/e7/30/ee/e730ee7c3e3cac000072e68b07e17b04.jpg",
    img3:"https://i.pinimg.com/564x/0b/37/aa/0b37aa4358e778587fee0b6c1627af2b.jpg",
    img4:"https://i.pinimg.com/564x/94/47/06/944706ff764c6343694edf6a8f53682f.jpg",
    describe: "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring the outdoors in.", 
    cost: "310.000 vnd" },

]

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
productArr = product;

const pageConfig = document.querySelector('.page-config select');
const mySelect = document.getElementById('mySelect');
const countTotalPage = document.querySelector('.total-page');
const countTotalProduct = document.querySelector('.total-item');

let totalPages = Math.ceil(productArr.length / perPage);
const searchText = document.querySelector('.search-boxx input');
const searchBtn = document.getElementById('search-button');
// console.log(totalPages);
const img_pr = document.querySelector('.img_pr');
console.log(img_pr);

function initRender(productAr, totalPage) {
    renderProduct(productAr);
    renderListPage(totalPage);
}

initRender(productArr, totalPages);

// const btnNext = document.querySelector('.btn-next');
// const btnPrev = document.querySelector('.btn-prev');
// console.log(btnNext);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
}

const deleteBtn = document.querySelectorAll('.divproduct .delete');

deleteBtn.forEach((item, index) => {
    deleteBtn[index].addEventListener('click', () => {
        product.splice(index, 1);
        productArr = product;
        renderProduct(productArr)
    });
});

getCurrentPage(1);

searchBtn.addEventListener('click', () => {
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        if (item.title.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()) != -1) {
            productArr.push(item);
        }
    });
    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
});

searchText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});
pageConfig.addEventListener('change', () => {
    idPage = 1;
    perPage = Number(pageConfig.value);
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    if (totalPages == 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    changePage();
});
const dt = document.getElementById('detail');
function renderProduct(container) {
    html = '';
    const content = container.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="divproduct" onclick=dt.style.display="block">';
            html += '<div class="box">';
            html += '<a>';
            html += `<div class="img_pr" id="${index}";" ><img src="` + item.image + '"></div>';
            html += '</a>';
            html += '<h4>' + item.title + '</h4>';
            html += '<div class="cost">' + item.cost + '</div>';
            html += '</div>';
            html += '<div class="btn"><i class="fa-solid fa-cart-plus"></i></div>';
            html += '</div>';
            // console.log(html);
            return html;

        }
    }
    )
    document.getElementById('container').innerHTML = html;
    // highlightText();
}

// renderProduct();//goi lai ham de ham hoat dong
// renderListPage();

function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('pagenumber').innerHTML = html;

}

function changePage() {
    const idPages = document.querySelectorAll('.pagenumber li');
    // console.log(idPages);
    const a = document.querySelectorAll('.pagenumber li a');
    for (let i = 0; i < idPages.length; i++) {
        //click vao trang i se hien ra nd trang i
        // idPages[i].addEventListener('click' , () => {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.classList.add('active');
            if (value > 1 && value < idPages.length) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                $('.btn-next').addClass('btn-active');
                $('.btn-prev').removeClass('btn-active');
            }
            // console.log(value);
            // console.log(idPages);
            idPage = value;
            getCurrentPage(idPage);
            // console.log(getCurrentPage(idPage));
            renderProduct(productArr);
        }
    }
}
changePage();

//sang trang kế
// btnNext.addEventListener('click', () => {
$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    // console.log(start,end);
    if (idPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    // console.log(idPage);
    const btnnPrev = document.querySelector('.btn-prev');
    btnnPrev.classList.remove('btn-active');
    $('.pagenumber li').removeClass('active');
    $(`.pagenumber li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
})

//quay lai trang truoc
// btnPrev.addEventListener('click', () => {
$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 1) {
        idPage = 1;
    }
    // console.log(start,end);
    if (idPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.pagenumber li').removeClass('active');
    $(`.pagenumber li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
})

//sort
// function low() {
//     document.getElementById(".cost").innerHTML=costs;
//     costs.sort(function(a,b) {return a - b});
//     document.getElementById(".cost").innerHTML=costs;
// }

// day la phan chi tiet sp
// function show_detail() {
//     html_detail = '';
//     const content_detail = product.map((item, index) => {
//         html_detail += '<div class="col-md-5"><img src="' + item.image + '"></div>';
//         html_detail += '<div class="col-md-7">';
//         html_detail += '<ul>';
//         html_detail += '<li>' + item.title + '</li>';
//         html_detail += '<li>' + item.cost + '</li>';
//         html_detail += '<li>Kích thước</li>';
//         html_detail += '<li>Số lượng';
//         html_detail += `<div id="buy-amount">
//         <button class="minus-btn" onclick="handle_minus(amount)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
//           </svg>
//           </button>
//         <input type="text" name="amount" id="amount" value="1"/>
//         <button class="plus" onclick="handle_plus(amount)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//           </svg>
//           </button>
//     </div>`;
//         html_detail += '</li>';
//         html_detail += '<li>add cart</li>';
//         html_detail += '</ul>';
//         html_detail += '</div>';
// document.getElementById('product-detail').innerHTML = html_detail;
//$('#product-detail').html(html_detail);
//     })
//     document.getElementById('product-detail').innerHTML = html_detail;
// }
//show_detail();
// declare var $: any ;
// interface IProduct{
//     id:Number;
//     image:String;
//     title:string;
//     name:String;
//     cost:Number;
// }
// var data : Array<IProduct> = [
//     { id: 1, image: "https://i.pinimg.com/564x/c6/b4/79/c6b479f74fad123ba6aac313b9d035a7.jpg", title: "Snake Plant Laurentii", cost: "350.000 vnd" },
//     { id: 2, image: "https://i.pinimg.com/564x/e0/86/74/e0867468f981ad418649e24781dea844.jpg", title: "Calathea Rattlesnake", cost: "310.000 vnd" },
//     { id: 3, image: "https://i.pinimg.com/564x/26/36/1e/26361ea26931d9717d8671910c441346.jpg", title: "Fiddle Leaf Fig", cost: "350.000 vnd" },
//     { id: 4, image: "https://i.pinimg.com/564x/27/9c/d1/279cd1ae58d6d8372a1c99045a32f5d4.jpg", title: "Money Tree", cost: "410.000 vnd" },
//     { id: 5, image: "https://i.pinimg.com/564x/49/48/08/494808c0f943927bf1e8707728d59bea.jpg", title: "Autumn Fern", cost: "370.000 vnd" },
//     { id: 6, image: "https://i.pinimg.com/564x/a4/5f/55/a45f5562e8262cd94cf09597c09c0333.jpg", title: "ZZ Plant", cost: "400.000 vnd" },
//     { id: 7, image: "https://i.pinimg.com/564x/ed/2b/30/ed2b301f19a5d83a6311c323e6f3272e.jpg", title: "Monstera Deliciosa", cost: "350.000 vnd" },
//     { id: 8, image: "https://i.pinimg.com/564x/37/1e/9c/371e9c9972d4c0e30e6ff965c9bbb612.jpg", title: "Golden pothos", cost: "310.000 vnd" },
//     { id: 9, image: "https://i.pinimg.com/564x/31/61/d6/3161d6f3c74b65af5d47f10fbd8db409.jpg", title: "Flamingo Flower Pink", cost: "400.000 vnd" },
//     { id: 10, image: "https://i.pinimg.com/564x/a6/e2/81/a6e281ebaab2709443c8020f6ec87486.jpg", title: "Flamingo Flower Red", cost: "400.000 vnd" },
//     { id: 11, image: "https://i.pinimg.com/564x/ae/9e/97/ae9e97a857e51518e3fd43fa7b245fa8.jpg", title: "Schefflera Arboricola", cost: "310.000 vnd" },
//     { id: 12, image: "https://i.pinimg.com/564x/32/d3/15/32d3152fe8001067a558285c6ba722b6.jpg", title: "Chinese Money Plant", cost: "350.000 vnd" },
//     { id: 13, image: "https://i.pinimg.com/736x/58/f1/7d/58f17d1c9871380ff29084e486f56412.jpg", title: "Calathea Rattlesnake", cost: "420.000 vnd" },
//     { id: 14, image: "https://i.pinimg.com/564x/e2/6e/f4/e26ef4da3cfbf6e6735ee83e745e4722.jpg", title: "Alocasia Black Velvet", cost: "500.000 vnd" },
//     { id: 15, image: "https://i.pinimg.com/564x/3b/3a/94/3b3a94f1a7c37455a040a10bb2a8e2a4.jpg", title: "Desert Rose", cost: "350.000 vnd" },
//     { id: 16, image: "https://i.pinimg.com/564x/17/b4/a8/17b4a83ff314e47b9224dafd9aab96be.jpg", title: "Philodendron Green", cost: "310.000 vnd" },
//     { id: 15, image: "https://i.pinimg.com/564x/3b/3a/94/3b3a94f1a7c37455a040a10bb2a8e2a4.jpg", title: "Desert Rose", cost: "350.000 vnd" },
//     { id: 16, image: "https://i.pinimg.com/564x/17/b4/a8/17b4a83ff314e47b9224dafd9aab96be.jpg", title: "Philodendron Green", cost: "310.000 vnd" },
// ]



function show_detail(product) {
    const detail = product;
    html_detail = `<div class="col-md-5"> 
    <ul>
            <li><img src="${detail.img1}" onclick="changeImage('one')" id="one"></li>
            <li><img src="${detail.img2}" onclick="changeImage('two')" id="two"></li>
            <li><img src="${detail.img3}" onclick="changeImage('three')" id="three"></li>
            <li><img src="${detail.img4}" onclick="changeImage('four')" id="four"></li>
        </ul>
        <div id="main-image">
            <img src="${detail.image}" id="image_main"></li>
        </div></div>
     <div class="col-md-7">
         <ul>
            <li> ${detail.title}</li>
            <li>  ${detail.cost}</li>
            <li> ${detail.describe}</li>
            <li><p>Amount</p>
            <div id="buy-amount">
            <button class="minus-btn" onclick="handle_minus()"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
          </svg>
          </button>
        <input type="text" name="amount" value="1" id="amount" class="amount" />
        <button class="plus-btn" onclick="handle_plus()"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          </button>
        </div>
        <div class="cart">add cart</div>
            </li>
        </ul>
    </div>`;
    $('#product-detail').html(html_detail);
}


//$('#product-detail').html(html_detail);

// var detail= product.filter(function(d,index,array){
//     return d;
// })

$(document).on('click', '.img_pr', function (ev) {
    let index = ev.target.id;
    let detail = product[index];
    show_detail(detail);
})



