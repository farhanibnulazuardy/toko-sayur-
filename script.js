const products = [
    { id: 1, name: "Bayam", price: 5000, image: "https://i.pinimg.com/736x/24/d1/12/24d112d2e191235f72dd47e5c233bd2e.jpg" },
    { id: 2, name: "Wortel", price: 8000, image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4" },
    { id: 3, name: "Brokoli", price: 12000, image: "https://i.pinimg.com/736x/17/26/bd/1726bdf1691c5d12e28fd146c3ba737e.jpg" },
    { id: 4, name: "Tomat", price: 7000, image: "https://i.pinimg.com/736x/20/76/65/2076659bb3e2fec3686137e85ff04d5b.jpg" },
    { id: 5, name: "Sawi", price: 10000, image: "https://i.pinimg.com/1200x/41/f4/c1/41f4c12666dc12c22f926e70559f0bbd.jpg" },
    { id: 6, name: "Cabai", price: 20000, image: "https://i.pinimg.com/1200x/82/b7/29/82b729fb22b9e2fd02a08d995c1ffbd7.jpg" },
    { id: 7, name: "Bawang Merah", price: 10000, image: "https://i.pinimg.com/736x/53/6e/d9/536ed97faf24ff4c395ae732d6ad8cb2.jpg" },
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const produkList = document.getElementById("produk-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
// =======================
// RENDER PRODUK
// =======================
function renderProducts() {
    if(!produkList) return;
    produkList.innerHTML = "";
    products.forEach(product => {
        produkList.innerHTML += `
            <div class="produk-card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>Rp ${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Tambah
                </button>
            </div>
        `;
    });
}
// =======================
// TAMBAH KE CART
// =======================
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if(product){
        cart.push(product);
        saveCart();
        renderCart();
    }
}
// =======================
// HAPUS CART
// =======================
function removeFromCart(index){
    cart.splice(index,1);
    saveCart();
    renderCart();
}
// =======================
// RENDER CART
// =======================
function renderCart(){
    if(!cartItems) return;
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item,index)=>{
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} - Rp ${item.price}
                <button onclick="removeFromCart(${index})">
                    Hapus
                </button>
            </div>
        `;
    });
    if(totalPrice)
        totalPrice.textContent = total;
    if(cartCount)
        cartCount.textContent = cart.length;
}
// =======================
// SAVE LOCAL STORAGE
// =======================
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}
// =======================
// POPUP SUKSES
// =======================
function tampilkanSukses(){
    const popup = document.getElementById("successPopup");
    if(popup)
        popup.style.display="flex";
}
function tutupPopup(){
    const popup = document.getElementById("successPopup");
    if(popup)
        popup.style.display="none";

}
// =======================
// CHECKOUT
// =======================
const checkoutForm = document.getElementById("checkout-form");
if(checkoutForm){
checkoutForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(cart.length === 0){
        alert("Keranjang masih kosong!");
        return;
    }
    tampilkanSukses();
    cart = [];
    saveCart();
    renderCart();
    this.reset();
});
}
// =======================
// LOAD AWAL
// =======================
renderProducts();
renderCart();
cartItems.innerHTML += `
<div class="cart-item">
    <div>
        <div class="cart-item-name">${item.nama}</div>
        <div class="cart-item-price">Rp ${item.harga}</div>
    </div>
    <button class="remove-btn" onclick="hapusItem(${index})">
        Hapus
    </button>
</div>
`;