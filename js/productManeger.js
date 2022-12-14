// inventory


// const product = [
//     {
//         id: 1,
//         title: "Snake Plant Laurentii",
//         image: "img/snakelauren1.jpg",
//         img1: "img/snakelauren1.jpg",
//         img2: "img/snakelauren2.jpg",
//         img3: "img/snakelauren3.jpg",
//         img4: "img/snakelauren4.jpg",
//         describe: "The Snake Plant Laurentii, or Sansevieria trifasciata 'Laurentii', is a succulent plant characterized by its upright sword-like leaves with vibrant yellow edges. It is popular for its incredibly easy-going nature (it can tolerate low light and drought) and its air-purifying capabilities. The easiest way to kill this plant is to overcare for it.",
//         cost: 350000,
//         category: "indoor",
//     },
//     {
//         id: 2,
//         title: "Calathea Rattlesnake",
//         image: "img/calathea1.jpg",
//         img1: "img/calathea1.jpg",
//         img2: "img/calathea2.jpg",
//         img3: "img/calathea3.jpg",
//         img4: "img/calathea4.jpg",
//         describe: "Calathea Rattlesnake or Calathea lancifolia houseplants are tropical plants with wavy rattlesnake shaped leaves, with a deep burgundy underside and vibrant green patterned top side. These beautiful indoor plants provide a colour filled focal point in any room. Similarly to other Calatheas, they need indirect light or light shade, a lot of humidity and constant soil moisture to thrive; so either keep them in a bathroom or kitchen or next to a humidifier.",
//         cost: 310000,
//         category: "indoor",
//     },
//     {
//         id: 3,
//         title: "Fiddle Leaf Fig",
//         image: "img/fiddle1.jpg",
//         img1: "img/fiddle1.jpg",
//         img2: "img/fiddle2.jpg",
//         img3: "img/fiddle3.jpg",
//         img4: "img/fiddle4.jpg",
//         describe: "The Fiddle Leaf Fig or Ficus lyrata is a beautiful plant with large violin-shaped, thick and leathery dark green leaves stemming from its woody stem. The Fiddle Leaf Fig is a statement piece and will add an architectural feature to your living room or bedroom.",
//         cost: 350000,
//         category: "outdoor",
//     },
//     {
//         id: 4,
//         title: "Money Tree",
//         image: "img/moneytree1.jpg",
//         img1: "img/moneytree1.jpg",
//         img2: "img/moneytree2.jpg",
//         img3: "img/moneytree3.jpg",
//         img4: "img/moneytree4.jpg",
//         describe: "Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. ",
//         cost: 410000,
//         category: "indoor",
//     },
//     {
//         id: 5,
//         title: "Autumn Fern",
//         image: "img/autumn1.png",
//         img1: "img/autumn1.png",
//         img2: "img/autumn2.png",
//         img3: "img/autumn3.png",
//         img4: "",
//         describe: "The lacey fronds of the Autumn Fern add color, dimension, and texture to your space. Newly unfurled fronds start off copper or bronze, then mature to deep green. It is relatively easy-going for a fern but is happiest in high humidity and indirect light, mimicking the environment of Asia’s cool and shady forests it is native to.",
//         cost: 370000,
//         category: "indoor",
//     },
//     {
//         id: 6,
//         title: "ZZ Plant",
//         image: "img/zzplant1.jpg",
//         img1: "img/zzplant1.jpg",
//         img2: "img/zzplant2.jpg",
//         img3: "img/zzplant3.jpg",
//         img4: "img/zzplant4.jpg",
//         describe: "The ZZ Plant is an eye-catching architectural plant with waxy, dark green, oval-shaped leaves attached to its elegant, arching stems. It is an easy care plant, as it is drought tolerant and can cope well in a range of light conditions including light shade. One of our most popular plants, it can also be quick growing, so a great low stress way to have a high impact plant in your home. Works well in bedrooms, kitchens and living rooms.    ",
//         cost: 450000,
//         category: "indoor",
//     },
//     {
//         id: 7,
//         title: "Monstera Deliciosa",
//         image: "img/monstera1.png",
//         img1: "img/monstera1.png",
//         img2: "img/monstera2.png",
//         img3: "img/monstera3.png",
//         img4: "img/monstera4.png",
//         describe: "Nicknamed the swiss cheese plant, the Monstera Deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.",
//         cost: 350000,
//         category: "indoor",
//     },
//     {
//         id: 8,
//         title: "Golden pothos",
//         image: "img/golden1.jpg",
//         img1: "img/golden1.jpg",
//         img2: "img/golden2.jpg",
//         img3: "img/golden3.jpg",
//         img4: "img/golden4.jpg",
//         describe: "Golden pothos or Epipremnum aureum are plants that love to hang, climb or trail. They have beautifully marbled, variegated leaves that are speckled with spots of cream and green. These trailing vines are one of the most popular houseplants due to their easy care requirements and ability to transform rooms into a lush tropical paradise. This golden pothos comes attached climbing a moss pole.  ",
//         cost: 300000,
//         category: "indoor",
//     },
//     {
//         id: 9,
//         title: "Flamingo Flower Pink",
//         image: "img/flamingo_pink1.jpg",
//         img1: "img/flamingo_pink1.jpg",
//         img2: "img/flamingo_pink2.jpg",
//         img3: "img/flamingo_pink3.jpg",
//         img4: "img/flamingo_pink4.jpg",
//         describe: "The Flamingo Flower is a beautiful flowering indoor plant. With pink palette-like leaves that enclose yellow spikes and contrasting dark green foliage, it will make a colourful tropical splash in your home. With long lasting blooms, the Flamingo flower makes an attractive and eco alternative to replace cut flowers in your home or give as a gift.",
//         cost: 400000,
//         category: "indoor",
//     },
//     {
//         id: 10,
//         title: "Flamingo Flower Red",
//         image: "img/flamingo_red1.jpg",
//         img1: "img/flamingo_red1.jpg",
//         img2: "img/flamingo_red2.jpg",
//         img3: "img/flamingo_red3.jpg",
//         img4: "img/flamingo_red4.jpg",
//         describe: "The Flamingo Flower is a beautiful flowering indoor plant. With red palette-like leaves that enclose yellow spikes and contrasting dark green foliage, it will make a colourful tropical splash in your home. With long-lasting blooms, the Flamingo flower makes an attractive and eco alternative to replace cut flowers in your home or give as a gift.",
//         cost: 400000,
//         category: "indoor",
//     },
//     {
//         id: 11,
//         title: "Schefflera Arboricola",
//         image: "img/schefflera1.jpg",
//         img1: "img/schefflera1.jpg",
//         img2: "img/schefflera2.jpg",
//         img3: "img/schefflera3.jpg",
//         img4: "img/schefflera4.jpg",
//         describe: "The Schefflera Arboricola features a single or braided trunk and tree-like clusters of leaflets, which have been likened to umbrellas, wheels, and octopi! You can help it retain its foliage by placing it in bright light and spacing out waterings. Sized to ship best, our large Umbrella Tree arrives with room to grow as it adapts to your home’s conditions.",
//         cost: 310000,
//         category: "indoor",
//     },
//     {
//         id: 12,
//         title: "Chinese Money Plant",
//         image: "img/chinese_money1.jpg",
//         img1: "img/chinese_money1.jpg",
//         img2: "img/chinese_money2.jpg",
//         img3: "img/chinese_money3.jpg",
//         img4: "img/chinese_money4.jpg",
//         describe: "The Chinese Money Plant or Pilea peperomioides houseplant has cute, attractive, round leaves balancing almost like pancakes on long petioles attached to a central stem, which in time grows up vertically. Easy to look after, they make a perfect tabletop companion.",
//         cost: 350000,
//         category: "indoor",
//     },
//     {
//         id: 13,
//         title: "Calathea Rattlesnake",
//         image: "img/calathea_rattlesnake.jpg",
//         img1: "img/calathea_rattlesnake.jpg",
//         img2: "img/calathea2.jpg",
//         img3: "img/calathea3.jpg",
//         img4: "img/calathea4.jpg",
//         describe: "Calathea Rattlesnake or Calathea lancifolia houseplants are tropical plants with wavy rattlesnake shaped leaves, with a deep burgundy underside and vibrant green patterned top side. These beautiful indoor plants provide a colour filled focal point in any room. Similarly to other Calatheas, they need indirect light or light shade, a lot of humidity and constant soil moisture to thrive; so either keep them in a bathroom or kitchen or next to a humidifier.",
//         cost: 420000,
//         category: "outdoor",
//     },
//     {
//         id: 14,
//         title: "Alocasia Black Velvet",
//         image: "img/alocasia1.jpg",
//         img1: "img/alocasia1.jpg",
//         img2: "img/alocasia2.jpg",
//         img3: "img/alocasia3.jpg",
//         img4: "img/alocasia4.jpg",
//         describe: "The Alocasia Black Velvet boasts velvety black leaves with contrasting bright white veins. Why are the leaves black? The plant absorbs light energy from almost the entire visible spectrum—perhaps an evolutionary need in its native low-light environments. But don't stick the Black Velvet in a dark corner; it is happiest in bright indirect light. ",
//         cost: 500000,
//         category: "outdoor",
//     },
//     {
//         id: 15,
//         title: "Desert Rose",
//         image: "img/desert_rose1.jpg",
//         img1: "img/desert_rose1.jpg",
//         img2: "img/desert_rose2.jpg",
//         img3: "img/desert_rose3.jpg",
//         img4: "",
//         describe: "Unlike Sting, this Desert Rose doesn’t need to dream of rain. A slow-growing succulent, the Adenium obesum holds water in its swollen trunk, helping it survive drought in the wild. In your home, it will do best in a spot that receives bright direct light. As part of its natural cycle, the Desert Rose may drop its foliage when winter arrives due to less light and lower temps, entering a period of dormancy. No need to worry as it will sprout new leaves come spring.",
//         cost: 350000,
//         category: "outdoor",
//     },
//     {
//         id: 16,
//         title: "Philodendron Green",
//         image: "img/philodendron1.jpg",
//         img1: "img/philodendron1.jpg",
//         img2: "img/philodendron2.jpg",
//         img3: "img/philodendron3.jpg",
//         img4: "img/philodendron4.jpg",
//         describe: "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring the outdoors in.",
//         cost: 310000,
//         category: "indoor",
//     },
//     {
//         id: 17,
//         title: "Desert Rose",
//         image: "img/desert_rose1.jpg",
//         img1: "img/desert_rose1.jpg",
//         img2: "img/desert_rose2.jpg",
//         img3: "img/desert_rose3.jpg",
//         img4: "",
//         describe: "Unlike Sting, this Desert Rose doesn’t need to dream of rain. A slow-growing succulent, the Adenium obesum holds water in its swollen trunk, helping it survive drought in the wild. In your home, it will do best in a spot that receives bright direct light. As part of its natural cycle, the Desert Rose may drop its foliage when winter arrives due to less light and lower temps, entering a period of dormancy. No need to worry as it will sprout new leaves come spring.",
//         cost: 350000,
//         category: "indoor",
//     },
//     {
//         id: 18,
//         title: "Philodendron Green",
//         image: "img/philodendron1.jpg",
//         img1: "img/philodendron1.jpg",
//         img2: "img/philodendron2.jpg",
//         img3: "img/philodendron3.jpg",
//         img4: "img/philodendron4.jpg",
//         describe: "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring the outdoors in.",
//         cost: 310000,
//         category: "outdoor",
//     },
//     {
//         id: 19,
//         title: "Peperomia Obtusifolia",
//         image: "img/peperomia1.jpg",
//         img1: "img/peperomia1.jpg",
//         img2: "img/peperomia2.jpg",
//         img3: "img/peperomia3.jpg",
//         img4: "img/peperomia4.jpg",
//         describe: "The Peperomia obtusifolia, also known as the baby rubber plant, is an easy-going houseplant characterized by its thick, succulent-like green leaves. A popular variety of Peperomia, it does not need much to thrive and might even reward you with white flower spikes once a year.",
//         cost: 350000,
//         category: "indoor",
//     },
// ];

//import{product} from "./js/data.js"
function createProduct() {
    localStorage.setItem('product', JSON.stringify(product));
}

if (localStorage.getItem('product') == null) {
    createProduct(product);
}

function showProductList() {
    if (localStorage.getItem('product') == null) {
        return false;
    }
    var productArr = JSON.parse(localStorage.getItem('product'));
    var table = ` <thead>
         <tr>
            <th class="title">ID</th>
            <th class="title">Image</th>
            <th class="title">Name</th>
            <th class="title">Category</th>
            <th class="title">Cost</th>
            <th class="title">Action</th>
        </tr> 
    </thead>`
    for (let i = 0; i < productArr.length; i++) {
        table +=

            '<tr><td>' + (i + 1) + '</td><td><img src="' + productArr[i].image + '" width=100px , height=130px></td><td>' + productArr[i].title + '</td><td>' + productArr[i].category + '</td> <td>' + productArr[i].cost + '</td><th><button onclick="deleteItem(\'' + productArr[i].id + '\')"><i class="fa-solid fa-delete-left"></i><button onclick="editItem(\'' + productArr[i].id + '\')"><i class="fa-solid fa-pen-to-square"></i></th></tr>'
        
    }

    document.getElementById('table').innerHTML = table;
}
// var item_id = document.getElementById('id').value;
// var item_title = document.getElementById('title').value;
// var item_image = document.getElementById('image').value;
// var item_cost = document.getElementById('cost').value;
function add() {
    validate_form();
    let productArr = JSON.parse(localStorage.getItem('product'));

    var item =
    {
        id: document.getElementById('id').value,
        image: document.getElementById('preview').attributes['src'].value,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        cost: document.getElementById('cost').value,
    };

    let index = productArr.findIndex((c) => c.id == item.id)

    if (index >= 0) {
        productArr.splice(index, 1, item)
    } else {
        data.push(item);
    }

    console.log(item);
    console.log(productArr);
    
    localStorage.setItem('product', JSON.stringify(productArr))
    showProductList();
    // clear()
}
function clear() {
    document.getElementById('id').value = "";
    document.getElementById('image').value = "";
    document.getElementById('title').value = "";
    document.getElementById('category').value = "";
    document.getElementById('cost').value = "";
}

//xoa han cai san pham

function deleteItem(IDproductDel) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id == IDproductDel)
            if (
                confirm(
                    "Are you sure you want to delete this product?"
                )
            ) {
                //ham xoa phan tu
                productArray.splice(i, 1);
            }
        

    }
    localStorage.setItem('product', JSON.stringify(productArray));
    showProductList(productArray)
}

function validateSelect(obj){
    var options = obj.children;
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            document.getElementById('category').value = options[i].value; 
        }
    }
}

function editItem(id) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    document.getElementById('btn').innerText = "Update";
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            // gán giá trị trong mảng đó cho giá trị sửa
            document.getElementById('id').value = productArray[i].id;
            document.getElementById('preview').attributes['src'].value = productArray[i].image;//lay link anh
            document.getElementById('title').value = productArray[i].title;
            document.getElementById('category').value= productArray[i].category;
            document.getElementById('cost').value = productArray[i].cost;
        }
    }
    validate_form();
    localStorage.setItem('product', JSON.stringify(productArray));
    showProductList(productArray);
}
function validate_form() {
    let formElement = document.querySelector(".form");
    let inputElement = formElement.querySelectorAll(".form_group");

    for (let i = 0; i < inputElement.length; i++) {
        if (inputElement[i].value == "") {
            inputElement[i].parentElement.querySelector(
                ".error_message"
            ).innerHTML = `Please enter Product's ${inputElement[i].id}`;
        }
    }
}

window.onload = function () {
    let productArray = JSON.parse(localStorage.getItem('product'));
    deleteItem(productArray);
    //editItem(productArray);
    //createProduct(productArray);
    showProductList(productArray);
}