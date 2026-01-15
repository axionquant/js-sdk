// To run this example, you would typically use this module in another project.
// For demonstration purposes, we'll pretend we're importing from the local build.

// In a real project, you would do:
// import { Axion } from '@axion/sdk';

// For this example, we import directly from the compiled file:
const { Axion } = require('./dist/index.js');

// 1. Initialize the client with your API key
const apiKey = process.env.AXION_API_KEY || 'YOUR_API_KEY';
if (apiKey === 'YOUR_API_KEY') {
    console.warn("Using default API key. Please set the AXION_API_KEY environment variable.");
}
const client = new Axion(apiKey);

// 2. Use the methods to fetch data
async function getStockInfo() {
    try {
        console.log("Fetching ticker info for 'AAPL'...");
        const tickerInfo = await client.getStockTickerBySymbol('AAPL');
        console.log("Ticker Info:", tickerInfo);

        console.log("\nFetching daily prices for 'AAPL'...");
        const prices = await client.getStockPrices('AAPL', { frame: 'daily' });
        console.log("Price Data (first 5 entries):", prices.slice(0, 5));

    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

getStockInfo();
