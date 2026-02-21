// example.js - Axion Library Usage Examples
const { Axion } = require('./index'); // Adjust path as needed

// Initialize the client with your API key
// If your API doesn't require authentication, you can omit the API key
const API_KEY = 'your-api-key-here'; // Replace with your actual API key
const client = new Axion(API_KEY);

// If you're running the example without an API key (for testing with local server)
// const client = new Axion();

async function runExamples() {
    console.log('=== Axion Library Examples ===\n');

    try {
        // --- 1. Credit API Examples ---
        console.log('1. Credit API Examples:');
        const creditSearch = await client.searchCredit('Apple Inc');
        console.log('Credit Search:', creditSearch.data.slice(0, 2)); // Show first 2 results

        if (creditSearch.data && creditSearch.data.length > 0) {
            const entityId = creditSearch.data[0].id;
            const ratings = await client.getCreditRatings(entityId);
            console.log('Credit Ratings for first result:', ratings.data);
        }
        console.log();

        // --- 2. ESG API Example ---
        console.log('2. ESG API Example:');
        const esgData = await client.getEsgData('AAPL');
        console.log('AAPL ESG Data:', esgData.data);
        console.log();

        // --- 3. ETF API Examples ---
        console.log('3. ETF API Examples:');
        const etfFund = await client.getEtfFundData('SPY');
        console.log('SPY Fund Data:', Object.keys(etfFund.data));

        const etfHoldings = await client.getEtfHoldings('SPY');
        console.log('SPY Holdings count:', etfHoldings.data?.length || 0);
        console.log();

        // --- 4. Stock API Examples ---
        console.log('4. Stock API Examples:');

        // Get available tickers
        const tickers = await client.getStockTickers({
            country: 'US',
            exchange: 'NASDAQ'
        });
        console.log('US NASDAQ Tickers (first 5):', tickers.data?.slice(0, 5));

        // Get specific stock data
        const stock = await client.getStockTickerBySymbol('AAPL');
        console.log('AAPL Stock Data:', Object.keys(stock.data));

        // Get stock prices with date range
        const prices = await client.getStockPrices('AAPL', {
            from: '2024-01-01',
            to: '2024-01-31',
            frame: 'daily'
        });
        console.log('AAPL Prices count:', prices.data?.length || 0);
        console.log();

        // --- 5. Profiles API Examples ---
        console.log('5. Profiles API Examples:');
        const stockInfo = await client.getStockInfo('MSFT');
        console.log('MSFT Company Info:', Object.keys(stockInfo.data));

        const stockFinancials = await client.getStockFinancials('MSFT');
        console.log('MSFT Financials available:', Object.keys(stockFinancials.data));
        console.log();

        // --- 6. News API Examples ---
        console.log('6. News API Examples:');
        const generalNews = await client.getNews();
        console.log('General news count:', generalNews.data?.length || 0);

        const companyNews = await client.getCompanyNews('TSLA');
        console.log('TSLA News count:', companyNews.data?.length || 0);
        console.log();

        // --- 7. Crypto API Examples ---
        console.log('7. Crypto API Examples:');
        const cryptoTickers = await client.getCryptoTickers({ type: 'spot' });
        console.log('Crypto Tickers (first 3):', cryptoTickers.data?.slice(0, 3));

        const btcPrices = await client.getCryptoPrices('BTC-USD', {
            from: '2024-01-01',
            to: '2024-01-07',
            frame: 'daily'
        });
        console.log('BTC Prices count:', btcPrices.data?.length || 0);
        console.log();

        // --- 8. Economic Data Examples ---
        console.log('8. Economic Data Examples:');
        const econSearch = await client.searchEcon('GDP');
        console.log('GDP Search Results:', econSearch.data?.slice(0, 3));

        const econCalendar = await client.getEconCalendar({
            from: '2024-01-01',
            to: '2024-01-31',
            country: 'US',
            minImportance: 2
        });
        console.log('Economic Calendar events:', econCalendar.data?.length || 0);
        console.log();

        // --- 9. Supply Chain Examples ---
        console.log('9. Supply Chain Examples:');
        try {
            const suppliers = await client.getSupplyChainSuppliers('AAPL');
            console.log('AAPL Suppliers count:', suppliers.data?.length || 0);
        } catch (error) {
            console.log('Supply chain data might not be available for AAPL');
        }
        console.log();

        // --- 10. Sentiment Analysis Examples ---
        console.log('10. Sentiment Analysis Examples:');
        const sentiment = await client.getSentimentAll('AAPL');
        console.log('AAPL Sentiment Data:', Object.keys(sentiment.data));

    } catch (error) {
        console.error('Error in example:', error.message);
        console.error('\nNote: Make sure:');
        console.error('1. The API server is running at http://localhost:3001');
        console.error('2. You have a valid API key (if required)');
        console.error('3. The endpoints you\'re calling are implemented');
    }
}

// Alternative: Individual function examples with better error handling
async function exampleWithErrorHandling() {
    console.log('\n=== Example with Better Error Handling ===\n');

    const client = new Axion(API_KEY);

    // Example 1: Get stock information
    try {
        console.log('Fetching AAPL stock information...');
        const response = await client.getStockTickerBySymbol('AAPL');
        console.log('Success! Data structure:', Object.keys(response.data));
    } catch (error) {
        console.error('Failed to get stock data:', error.message);
    }

    // Example 2: Get stock prices with parameters
    try {
        console.log('\nFetching AAPL stock prices for January 2024...');
        const response = await client.getStockPrices('AAPL', {
            from: '2024-01-01',
            to: '2024-01-31',
            frame: 'daily'
        });

        if (response.data && response.data.length > 0) {
            console.log(`Retrieved ${response.data.length} price points`);
            console.log('Sample data:', {
                date: response.data[0].date,
                close: response.data[0].close
            });
        }
    } catch (error) {
        console.error('Failed to get stock prices:', error.message);
    }

    // Example 3: Get company news
    try {
        console.log('\nFetching news for Microsoft...');
        const response = await client.getCompanyNews('MSFT');
        console.log(`Retrieved ${response.data?.length || 0} news articles`);

        if (response.data && response.data.length > 0) {
            console.log('Latest news title:', response.data[0].title);
        }
    } catch (error) {
        console.error('Failed to get news:', error.message);
    }
}

// Run the examples
runExamples().then(() => {
    console.log('\n=== All examples completed ===');
}).catch(error => {
    console.error('Unhandled error:', error);
});

// For running individual examples separately
module.exports = {
    client: new Axion(API_KEY),
    exampleFunctions: {
        getStockData: async (symbol) => {
            try {
                const stock = await client.getStockTickerBySymbol(symbol);
                const prices = await client.getStockPrices(symbol, {
                    from: '2024-01-01',
                    to: '2024-01-31'
                });
                const news = await client.getCompanyNews(symbol);

                return {
                    stockInfo: stock.data,
                    priceCount: prices.data?.length || 0,
                    newsCount: news.data?.length || 0
                };
            } catch (error) {
                throw new Error(`Failed to fetch data for ${symbol}: ${error.message}`);
            }
        },

        searchAndAnalyze: async (companyName) => {
            try {
                // Search for credit rating
                const creditSearch = await client.searchCredit(companyName);

                // Get ESG data if available
                let esgData = null;
                try {
                    // Assuming we have a ticker, try to get ESG data
                    const ticker = creditSearch.data?.[0]?.ticker;
                    if (ticker) {
                        esgData = await client.getEsgData(ticker);
                    }
                } catch (error) {
                    console.log('ESG data not available');
                }

                return {
                    creditResults: creditSearch.data,
                    esgData: esgData?.data
                };
            } catch (error) {
                throw new Error(`Search failed: ${error.message}`);
            }
        }
    }
};
