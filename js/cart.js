var cart = [
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
        amount: 1,
    },
]




function showCart(){
        
    var html = '';
    var cartList = JSON.parse(localStorage.getItem('cart'));
    //console.log(cartList);
    const carts = cartList.map((item,idx) => {
        html += `
        <tr>
            <td>
            <img src="${item.image}" style="width: 200px"></img>
            </td>
            <td>${item.title}</th>
            <td>${item.cost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</th>
            <th><input class="cart-quantity-input" type="number" value="${item.amount}" data-idx="${idx}" min="1"></th>

            <td>
                <span data-idx="${idx}" class="delete-cart">
                    <i class="fa-solid fa-delete-left"></i>
                </span>
            </td>
        </tr>
        `;
    })

    document.getElementById("mycart").innerHTML = html;

    var quantityList = document.querySelectorAll(".cart-quantity-input");
    var priceTotal = document.querySelector(".price-total span");
    var deleteBtnList = document.querySelectorAll(".delete-cart");
    priceTotal.innerText = cartList.reduce((curr, acc) => acc.amount*acc.cost + curr, 0);

    quantityList.forEach((quantity)=>{
        quantity.addEventListener("change", () => {
            var idx = Number(quantity.dataset.idx);
            cartList[idx].amount = Number(quantity.value);
            localStorage.setItem("cart", JSON.stringify(cartList));
            priceTotal.innerText = cartList.reduce((curr, acc) => acc.amount*acc.cost + curr, 0);
        })
    })
    deleteBtnList.forEach((btn)=>{
        btn.addEventListener("click", () => {
            var idx = Number(btn.dataset.idx);
            cartList.splice(idx, 1);
            localStorage.setItem("cart", JSON.stringify(cartList));
            priceTotal.innerText = cartList.reduce((curr, acc) => acc.amount*acc.cost + curr, 0);
            showCart();
        })
    })

    
}

showCart();


