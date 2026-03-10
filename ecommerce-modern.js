// Animasi add to cart modern
document.addEventListener("click", function(e){

    if(e.target.tagName === "BUTTON"){

        let btn = e.target;

        let original = btn.innerText;

        btn.innerText = "✓ Ditambahkan";
        btn.style.background = "#2e7d32";

        setTimeout(()=>{
            btn.innerText = original;
        },1500);

    }

});

// Animasi muncul saat scroll
let cards = document.querySelectorAll(".produk-card");

let observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
    observer.observe(card);
});