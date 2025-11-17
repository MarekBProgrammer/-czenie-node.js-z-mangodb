const fetch = require('node-fetch');
const apiUrl = 'https://idosell.readme.io/reference/ordersordersget-1';
const apiKey = 'YXBwbGljYXRpb24xNjpYeHI1K0MrNVRaOXBaY2lEcnpiQzBETUZROUxrRzFFYXZuMkx2L0RHRXZRdXNkcmF5R0Y3ZnhDMW1nejlmVmZP';

async function fetchData(){
    const lastfetch = new Date(Date.now() - 120000).toISOString();
    const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
    },
    });
    const data = await response.json();
    return data;
}
  

module.export = { fetchData };