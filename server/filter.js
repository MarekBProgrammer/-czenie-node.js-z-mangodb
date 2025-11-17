async function instal(data){
    const extracteddData = data.map(order => ({
        orderId: order.orderId,
        customerName: order.customerName,
        products: order.products ? order.products.map(p => ({ id: p.id, quantity: p.quantity })) : [],
        price: order.price,
        status: order.status,
        id: order.id,
}
    ));
    return extracteddData;
}
module.exports = { instal };