
    const products = [
        {
            name: "iPhone 15",
            price: "-22% ₹61,999",
            description: "128GB, Midnight Black, A16 Bionic Chip",
            img: "image/iiphone.webp", 
            link: "https://amzn.in/d/a8nqJIr"
        },
        {
            name: "Samsung Galaxy S23",
            price: "Price:	₹65,999 <br> You Save:	₹96,000 (59%)",
            description: "256GB, Phantom Black, 200MP Camera",
            img: "image/samsung.webp",  
            link: "https://amzn.in/d/7MGiXNP"
        },
        {
            name: "MacBook Air M2",
            price: "-47% ₹78,990 <br> M.R.P.: ₹1,49,900.00M.R.P.: ₹1,49,900",
            description: "M2 Chip, 8GB RAM, 256GB SSD",
            img: "image/macbook.webp",
            link: "https://amzn.in/d/6DDq0aa"
        },
        {
            name: "Sony Pulse Elite Wireless",
            price: "-3% ₹12,568 <br> M.R.P.: ₹12,990.00M.R.P.: ₹12,990",
            description: "Noise Cancelling, 30hr Battery Life",
            img: "image/sonyhar.jpg",
            link: "https://amzn.in/d/anb8KjH"
        },
        {
            name: "Panasonic 1.5 Ton 5 Star Premium Wi-Fi Inverter Smart Split AC",
            price: "-30% ₹44,990 <br> M.R.P.: ₹64,400.00M.R.P.: ₹64,400",
            description: "128GB, Midnight Black, A16 Bionic Chip",
            img: "image/ac.jpg", 
            link: "https://amzn.in/d/3zc8zmS"
        },
        {
            name: "One94Store 3D Crystal Moon Lamp, Creative Engraved Crystal Ball Night Light, USB LED Wooden Crystal Lamp for Home Office Decoration Birthday Gift Adults (Warm White)",
            price: "-80% ₹199 <br> M.R.P.: ₹999",
            description: "glow and lovly gift",
            img: "image/gift1.jpg",  
            link: "https://amzn.in/d/e9RcXS0"
        },
        {
            name: "Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0, Immersive Spatial Audio, 44H Playtime with 6 mic ENC, Dual Pairing, IPX5 Ear Buds TWS (Titanium)",
            price: "₹7,999 Inclusive of all taxes <br> EMI starts at ₹388. No Cost EMI available",
            description: "Tuned by Experts: With Sound by Bose, enjoy meticulously tuned audio.",
            img: "image/hphn2.jpg",
            link: "https://amzn.in/d/23Hhawm"
        },
        {
            name: "SKYWALL 81.28 cm (32 inches) HD Ready Smart LED TV 32SWELS-PRO (Black)",
            price: "-60% ₹8,499 <br> M.R.P.: ₹21,250",
            description: "Inclusive of all taxes <br> EMI starts at ₹412. No Cost EMI available",
            img: "image/32tv.jpg",
            link: "https://amzn.in/d/gYt4L97"
        },
        {
            name: "Whirlpool 235 L 2 Star Frost Free Double Door Refrigerator (NEO DF278 PRM RADIANT STEEL(2S)-TL)",
            price: "₹21,990 <br> M.R.P: ₹30,200 (27% off)",
            description: "Save ₹1,000 with coupon <br> FREE delivery as soon as Sun, 16 Mar, 7 am - 9 pm",
            img: "image/hire.jpg", 
            link: "https://amzn.in/d/cuf1IeN"
        },
        {
            name: "Whirlpool 235 L Frost Free Triple-Door Refrigerator (FP 253D PROTTON ROY RADIANT STEEL(Z) Double Door Refrigerator space)",
            price: "₹25,990 M.R.P: ₹34,190 (24% off)",
            description: "Save ₹1,000 with coupon <br> FREE delivery as soon as Sun, 16 Mar, 7 am - 9 pm",
            img: "image/fridge.jpg",  
            link: "https://amzn.in/d/iMI3tMT"
        },
        {
            name: "Ganesh 14 in 1 Multipurpose Chopper, Fruits & Vegetable Cutters, Grater Peeler Chipser, Unbreakable Food Grade Body, Easy Push to Clean Button Slicer Dicer, Chopper for Kitchen (Green, Plastic)",
            price: "Lowest price in 30 days <br> ₹589.00 with 51 percent savings-51% ₹589",
            description: "Large break resistant container with rubber grip base which holds the device firmly in place",
            img: "image/vegcutter.jpg",
            link: "https://amzn.in/d/1MMYhTq"
        },
        {
            name: "Fastrack Astor FR2 Pro Smart Watch, 1.43” AMOLED Display, 466 * 466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes and Smartwatch Faces, IP68 (Black)",
            price: "-45% ₹2,999 <br> M.R.P.: ₹5,499.00M.R.P.: ₹5,499",
            description: "Inclusive of all taxes <br> EMI starts at ₹145. No Cost EMI available ",
            img: "image/watch.jpg",
            link: "https://amzn.in/d/b2awzaY"
        }
    ];
    
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slides img");
    const slider = document.querySelector(".slider");
    let sliderInterval;
    
    // Function to show the correct slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    
    // Function to move slides
    function moveSlide(step) {
        currentSlide += step;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showSlide(currentSlide);
    }
    
    // Auto-slide every 3 seconds
    function startSlider() {
        sliderInterval = setInterval(() => moveSlide(1), 3000);
    }
    
    startSlider();
    showSlide(currentSlide);
    
    // Function to display products
    function displayProducts(containerId, filter = "") {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID '${containerId}' not found.`);
            return;
        }
    
        container.innerHTML = ""; // Clear previous products
    
        if (!Array.isArray(products)) {
            console.error("Products array is not defined.");
            return;
        }
    
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        );
    
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.onclick = () => window.open(product.link, "_blank");
    
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="details">
                    <div class="title">${product.name}</div>
                    <div class="price">${product.price}</div>
                    <div class="description">${product.description}</div>
                </div>
            `;
    
            container.appendChild(productDiv);
        });
    
        // Hide slider if search is active
        if (filter.trim() !== "") {
            slider.style.display = "none"; // Hide slider
            clearInterval(sliderInterval); // Stop the slider
        } else {
            slider.style.display = "block"; // Show slider
            startSlider(); // Restart slider
        }
    }
    
    // Search Event Listener
    document.getElementById("search").addEventListener("input", (event) => {
        displayProducts("productContainer", event.target.value);
    });
    
    // Confirmation for Login Redirect
    function myFunction() {
        let confirmRedirect = confirm("Are you sure you want to LogOut?");
        if (confirmRedirect) {
            window.location.href = "index.html"; // Redirect to login page
        }
    }
    
    // Initial Display of All Products
    displayProducts("productContainer");
   

    