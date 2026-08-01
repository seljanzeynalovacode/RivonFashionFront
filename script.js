// ---------- Product Data ----------
const featuredProducts = [
  { name: "Brown hat craft", price: "m.944.00", oldPrice: null, tag: null, rating: 5, img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" },
  { name: "Slim-Fit Formal Suit Blazer", price: "m.922.00", oldPrice: null, tag: null, rating: 1, img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" },
  { name: "Half sleeve T-shirt", price: "m.1,110.00", oldPrice: null, tag: null, rating: 4, img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80" },
  { name: "Geometric Print Relaxed Fit Tee", price: "m.1,300.00", oldPrice: null, tag: null, rating: 5, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
  { name: "Warm Fit-and-Flare Winter Dress with Fleece Lining", price: "m.1,129.00", oldPrice: "m.1,302.00", tag: "SALE", rating: 2, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
  { name: "Retro Tie-Dye Color Splash T-Shirt", price: "m.938.00", oldPrice: null, tag: null, rating: 5, img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80" },
  { name: "Floral Pattern Colorful Summer Tee", price: "m.1,321.00", oldPrice: "m.1,512.00", tag: "SALE", rating: 5, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
  { name: "Black hat craft", price: "m.751.00", oldPrice: null, tag: null, rating: 5, img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" }
];

const newArrivals = [
  { name: "Brown hat craft", price: "m.944.00", oldPrice: null, tag: null, img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" },
  { name: "Warm Fit-and-Flare Winter Dress with Fleece Lining", price: "m.1,129.00", oldPrice: "m.1,302.00", tag: "SALE", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
  { name: "Smooth Shine Bald Head Moisturizer", price: "m.919.00", oldPrice: null, tag: "Sold out", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
  { name: "Black hat craft", price: "m.751.00", oldPrice: null, tag: null, img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" }
];

function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "<span class='empty'>★</span>";
  }
  return stars;
}

function renderProductCard(p, showRating) {
  return `
    <div class="product-card">
      <div class="product-image">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        <img src="${p.img}" alt="${p.name}">
      </div>
      ${showRating ? `<p class="product-stars">${renderStars(p.rating)}</p>` : ""}
      <p class="product-name">${p.name}</p>
      <p class="product-price">${p.price}${p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : ""}</p>
    </div>
  `;
}

function renderGrid(containerId, data, showRating) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = data.map(p => renderProductCard(p, showRating)).join("");
}

renderGrid("featured-grid", featuredProducts, true);
renderGrid("arrivals-grid", newArrivals, false);

// ---------- Product Detail: Thumbnails ----------
const mainImg = document.getElementById("pd-main-img");
const thumbs = document.querySelectorAll(".pd-thumb");
thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
    mainImg.src = thumb.src.replace("w=200", "w=700");
  });
});

// ---------- Product Detail: Color Swatches ----------
const swatches = document.querySelectorAll(".swatch");
swatches.forEach(sw => {
  sw.addEventListener("click", () => {
    swatches.forEach(s => s.classList.remove("active"));
    sw.classList.add("active");
  });
});

// ---------- Product Detail: Size Selector ----------
const sizeBtns = document.querySelectorAll(".size-btn");
const sizeLabel = document.getElementById("size-label");
sizeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sizeBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    sizeLabel.textContent = btn.dataset.size;
  });
});

// ---------- Quantity Control ----------
const qtyInput = document.getElementById("qty-input");
document.getElementById("qty-minus").addEventListener("click", () => {
  let val = parseInt(qtyInput.value, 10);
  if (val > 1) qtyInput.value = val - 1;
});
document.getElementById("qty-plus").addEventListener("click", () => {
  let val = parseInt(qtyInput.value, 10);
  qtyInput.value = val + 1;
});

// ---------- Accordion ----------
const accordionData = [
  "This unisex t-shirt features a vibrant rainbow gradient print, made from soft breathable cotton for all-day comfort. Perfect for casual everyday wear.",
  "Items can be returned within 30 days of delivery for a full refund. Item must be unworn, unwashed, and in original packaging."
];
document.querySelectorAll(".accordion-toggle").forEach((btn, i) => {
  const content = btn.nextElementSibling;
  content.textContent = accordionData[i] || "";
  btn.addEventListener("click", () => {
    const isOpen = content.classList.contains("open");
    document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));
    if (!isOpen) content.classList.add("open");
  });
});

// ---------- Add to Cart / Buy Now feedback ----------
document.querySelector(".btn-outline-cart")?.addEventListener("click", () => {
  const cartBadge = document.querySelectorAll(".badge")[1];
  cartBadge.textContent = parseInt(cartBadge.textContent, 10) + parseInt(qtyInput.value, 10);
});
document.querySelector(".btn-buy-now")?.addEventListener("click", () => {
  alert("Proceeding to checkout...");
});

// ---------- Newsletter ----------
document.getElementById("newsletter-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for subscribing!");
  e.target.reset();
});

// ---------- Video Play Button ----------
document.querySelector(".play-btn")?.addEventListener("click", () => {
  alert("Video would play here.");
});

// ---------- Hero Arrows (cosmetic slider) ----------
document.querySelector(".hero-arrow-left")?.addEventListener("click", () => {
  console.log("Previous slide");
});
document.querySelector(".hero-arrow-right")?.addEventListener("click", () => {
  console.log("Next slide");
});
