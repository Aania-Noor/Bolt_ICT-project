
const products = [
    {
        id: 1,
        name: "Cat Body Harness",
        price: "Rs.350.00",
        image: "../img/product1.webp",
        description: "Comfortable and secure body harness for your feline friend. Perfect for safe outdoor adventures and walks. Made with soft, durable materials that won't irritate your cat's skin."
    },
    {
        id: 2,
        name: "Double Side Cat Face Food Bowl",
        price: "Rs.400.00",
        image: "../img/product2.webp",
        description: "Adorable dual-sided food bowl with cute cat face design. Perfect for keeping food and water separate while adding fun to mealtime."
    },
    {
        id: 3,
        name: "Rubber Ball Toy (Pack of 4)",
        price: "Rs.150.00",
        image: "../img/product3.jpg",
        description: "Set of 4 durable rubber balls in different colors. Perfect for playing fetch and keeping your pet active and entertained."
    },
    {
        id: 4,
        name: "Dog Jacket",
        price: "Rs.1,500.00",
        image: "../img/product4.webp",
        description: "Warm and stylish dog jacket to keep your furry friend comfortable during cold weather. Perfect for winter walks and outdoor activities."
    },
    {
        id: 5,
        name: "Dematting Comb for Cats and Dogs",
        price: "Rs.500.00",
        image: "../img/product5.webp",
        description: "Professional-grade dematting comb designed to gently remove tangles and mats from your pet's fur without causing discomfort."
    },
    {
        id: 6,
        name: "Natural Wood Bird Accessories - 7 PCS",
        price: "Rs.900.00",
        image: "../img/product6.jpg",
        description: "Complete set of natural wood accessories for your bird's cage. Includes perches, toys, and swings made from bird-safe materials."
    },
    {
        id: 7,
        name: "Hen Toy for Pets",
        price: "Rs.300.00",
        image: "../img/product7.webp",
        description: "Fun hen-shaped toy that makes realistic sounds. Great for interactive play and keeping your pet mentally stimulated."
    },
    {
        id: 8,
        name: "Premium Single Paw Top Scratching Post",
        price: "Rs.2000.00",
        image: "../img/product8.webp",
        description: "High-quality scratching post with a comfortable paw-shaped top. Helps protect your furniture while giving your cat a perfect scratching spot."
    },
    {
        id: 9,
        name: "Cozy Bed with Blanket",
        price: "Rs.3500.00",
        image: "../img/product9.webp",
        description: "Ultra-comfortable pet bed with removable blanket. Provides the perfect cozy spot for your pet to relax and sleep."
    },
    {
        id: 10,
        name: "Pet Travelling Bag",
        price: "Rs.7500.00",
        image: "../img/product10.webp",
        description: "Premium pet traveling bag with ventilation and safety features. Perfect for trips to the vet, travel, or outdoor adventures."
    }
    ,{
        id: 11,
        name: "White Persian Kitten",
        price: "Rs.20,000.00",
        image: "../img/product11.webp",
        description: "Adorable white Persian kitten with a fluffy coat and sweet temperament. Perfect addition to any loving home."
    }
    ,{
        id: 12,
        name: "Red Persian Kitten",
        price: "Rs.12,500.00",
        image: "../img/product12.webp",
        description: "Friendly and energetic Golden Retriever puppy. Great for families looking for a loyal and loving companion."
    }
    ,{
        id: 13,
        name: "Raw Parrot Chicks | Alexandrine Parrot",
        price: "Rs.15,000.00",
        image: "../img/product13.webp",
        description: "Friendly and energetic Raw Parrot. Great for families looking for a loyal and loving companion."
    }
    ,{
        id: 14,
        name: "Lutino Cream Cockatiel Pair",
        price: "Rs.7,000.00",
        image: "../img/product14.webp",
        description: "Friendly and energetic Cockataiel pair. Great for families looking for a loyal and loving companion."
    }
    ,{
        id: 15,
        name: "German Shepherd",
        price: "Rs.563,000.00",     
        image: "../img/product15.webp",
        description: "Friendly and energetic German Shepherd. Great for families looking for a loyal and loving companion."
    }
    ,{
        id: 16,
        name: "chow chow puppies",
        price: "Rs.195,000.00",
        image: "../img/product16.jpg",
        description: "Friendly and energetic chow chow puppies. Great for families looking for a loyal and loving companion."
    }
];


document.addEventListener('DOMContentLoaded', function() {
    const productId = localStorage.getItem('selectedProductId');
    
    if (productId) {
        loadProductDetails(productId);
    } else {
       
        window.location.href = 'products.html';
    }
});


function loadProductDetails(productId) {
    const product = products.find(p => p.id == productId);
    
    if (product) {
    
        document.title = `${product.name} - Bolt Pet Store`;
        
     
        document.getElementById('detail-product-image').src = product.image;
        document.getElementById('detail-product-image').alt = product.name;
        document.getElementById('detail-product-name').textContent = product.name;
        document.getElementById('detail-product-price').textContent = product.price;
        document.getElementById('detail-product-description').textContent = product.description;
        
    
        document.getElementById('add-to-cart-detail').addEventListener('click', function() {
            addToCart(product);
        });
        
    } else {
      
        window.location.href = 'products.html';
    }
}

// Add to Cart function
function addToCart(product) {
   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
 
    const existingItem = cart.find(item => item.id == product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
   
    localStorage.setItem('cart', JSON.stringify(cart));
    
   
}

function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}
