const {client} = require('./mangodb.js');
const { fetchData } = require('./connect.js');
const {instal} = require('filter.js');

async function syncDataToDB(){
    try {
        const db = client.db('idosellDB');
        const collection = db.collection('orders');
        try {
            const data = await fetchData();
            instal(data);
            for (const order of data) {
                const existingOrder = await collection.findOne({ orderId: order.orderId });
                const numberOrder = Number(order.orderId);
                const quantity = Number(order.quantity);
                const price = Number(order.price);
                const id = Number(order.id);
            }
            if (!existingOrder) {
                await collection.insertOne(order);
            }else if ([finished, lost, false].includes(order.status)){
            } else {
                await collection.updateOne(
                    { orderId: order.orderId },
                    { $set: order }
                );
            }
        }
     catch (error) {
        console.error('Error in syncDataToDB:', error);
    }      
    } finally {
        await client.close();
    }
}

export { syncDataToDB };
