
export const generateLinkWathsapp = (ticket) => {
    let mensaje = `¡Hola! Quiero realizar un pedido:%0A`;
    mensaje += `%0AFecha de compra: ${ticket.purchaseDate}%0A`;
    mensaje += `Fecha de entrega: ${ticket.deliveryDate}%0A`;

    mensaje += `%0AProductos en el carrito:%0A`;

    console.log(mensaje)
    
    ticket.cart.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.name} x ${producto.quantity} ----- $${producto.price}%0A`;
    });

    mensaje += `%0ATotal: ${ticket.total}`;
    console.log(mensaje);

    const mensajewaths = mensaje.replace(/ /g, "+");
    console.log(mensajewaths);

    return `https://wa.me/+5401169206183/?text=${(mensajewaths)}`;
};
