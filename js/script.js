'use strict';

function orderProduct(productName) {
    const phoneNumber = "2348000000000";

    const message = `Hello Koko Bakehouse! I would like to order ${productName}.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}