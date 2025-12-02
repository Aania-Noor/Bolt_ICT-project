document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
});

function selectPayment(element) {
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('active');
    });
    element.classList.add('active');
}

function loadCartItems() {
    const orderItems = document.getElementById('orderItems');
    const totalAmount = document.getElementById('totalAmount');
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    orderItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const priceStr = item.price.replace('Rs.', '').replace(',', '').trim();
        const itemPrice = parseFloat(priceStr);
        const itemTotal = itemPrice * item.quantity;
        total += itemTotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>Rs. ${itemTotal.toFixed(2)}</span>
        `;
        orderItems.appendChild(itemDiv);
    });
    
    totalAmount.textContent = 'Rs. ' + total.toFixed(2);
}

function placeOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    if (!name || !email || !phone || !address) {
        alert('Please fill all required fields!');
        return;
    }
    
   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before placing an order.');
        return;
    }
    
    const btn = document.querySelector('.btn-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;
    
    const orderId = 'PET-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    
    setTimeout(() => {
        document.getElementById('orderId').textContent = orderId;
        document.getElementById('successModal').style.display = 'flex';
        
        btn.innerHTML = '<i class="fas fa-lock"></i> PLACE ORDER';
        btn.disabled = false;
        
      
        localStorage.removeItem('cart');
        
        startCountdown();
    }, 1500);
}

function startCountdown() {
    let seconds = 10;
    const countdownElement = document.getElementById('countdown');
    
    const timer = setInterval(function() {
        seconds--;
        countdownElement.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(timer);
            goToProducts();
        }
    }, 1000);
}

function goToProducts() {
    window.location.href = "products.html";
}   