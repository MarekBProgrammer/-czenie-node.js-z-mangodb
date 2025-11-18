const { client, connectDb } = require('./mangodb.js');

let fetchFn;
if (typeof globalThis.fetch === 'function') {
    fetchFn = globalThis.fetch.bind(globalThis);
} else {
    const nf = require('node-fetch');
    fetchFn = nf.default || nf;
}
const apiUrl = '';
const apiKey = 'WWYXBwbGljYXRpb24xNjpYeHI1K0MrNVRaOXBaY2lEcnpiQzBETUZROUxrRzFFYXZuMkx2L0RHRXZRdXNkcmF5R0Y3ZnhDMW1nejlmVmZP';

async function fetchData(){
    const lastfetch = new Date(Date.now() - 120000).toISOString();
    const response = await fetchFn(apiUrl, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
    },
    });
    if (!response.ok) {
        console.error('fetchData: non-OK response', response.status);
        return [];
    }
    try {
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('fetchData: invalid JSON response', err);
        return [];
    }
}
  
module.exports = { fetchData, client, connectDb };
