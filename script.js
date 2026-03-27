function orderProduct(productName, price) {
    const phoneNumber = "201103216003"; 
    
    const message = `Hello AURA, I would like to order:
    
- Product: ${productName}
- Price: ${price} EGP

Please let me know the available sizes and delivery details.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}