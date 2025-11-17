const {client} = require('./mangodb.js');
const { fetchData } = require('./connect.js');
const { instal } = require('./filter.js');

async function syncDataToDB(){
    try {
        const db = client.db('idosellDB');
        const collection = db.collection('orders');

        const data = await fetchData();
        if (!Array.isArray(data)) return;

        const processed = await instal(data);

        for (const order of processed) {
            const existingOrder = await collection.findOne({ orderId: order.orderId });
            if (!existingOrder) {
                await collection.insertOne(order);
            } else if (['finished', 'lost', false].includes(order.status)) {
                // skip updates for finished/lost/false statuses
            } else {
                await collection.updateOne(
                    { orderId: order.orderId },
                    { $set: order }
                );
            }
        }

    } catch (error) {
        console.error('Error in syncDataToDB:', error);
    }
}

module.exports = { syncDataToDB };
