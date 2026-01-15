# Axion SDK

A TypeScript/JavaScript SDK for the Axion financial data API.

## Installation

```bash
npm install axion-sdk
```

## Quick Start

```typescript
import { Axion } from 'axion-sdk';

// Initialize with API key
const client = new Axion('your-api-key');

// Get stock price data
const prices = await client.getStockPrices('AAPL', {
  from: '2024-01-01',
  to: '2024-12-31'
});
```

## Authentication

Some endpoints require authentication. Provide your API key when initializing the client:

```typescript
const client = new Axion('your-api-key');
```

For endpoints that don't require authentication, you can initialize without an API key:

```typescript
const client = new Axion();
```

## API Reference

### Credit

```typescript
// Search for credit entities
await client.searchCredit('Apple Inc');

// Get credit ratings for an entity
await client.getCreditRatings('entity-id');
```

### ESG

```typescript
// Get ESG data for a stock
await client.getEsgData('AAPL');
```

### ETFs

```typescript
// Get ETF fund data
await client.getEtfFundData('SPY');

// Get ETF holdings
await client.getEtfHoldings('SPY');

// Get ETF exposure data
await client.getEtfExposure('SPY');
```

### Supply Chain

```typescript
// Get company customers
await client.getSupplyChainCustomers('AAPL');

// Get company peers
await client.getSupplyChainPeers('AAPL');

// Get company suppliers
await client.getSupplyChainSuppliers('AAPL');
```

### Stocks

```typescript
// Get all stock tickers
await client.getStockTickers({ country: 'US', exchange: 'NASDAQ' });

// Get ticker information
await client.getStockTickerBySymbol('AAPL');

// Get historical prices
await client.getStockPrices('AAPL', {
  from: '2024-01-01',
  to: '2024-12-31',
  frame: '1d' // daily
});
```

### Crypto

```typescript
// Get all crypto tickers
await client.getCryptoTickers({ type: 'coin' });

// Get crypto ticker information
await client.getCryptoTickerBySymbol('BTC');

// Get crypto prices
await client.getCryptoPrices('BTC', {
  from: '2024-01-01',
  to: '2024-12-31',
  frame: '1h'
});
```

### Forex

```typescript
// Get forex tickers
await client.getForexTickers({ country: 'US' });

// Get forex ticker information
await client.getForexTickerBySymbol('EURUSD');

// Get forex prices
await client.getForexPrices('EURUSD', {
  from: '2024-01-01',
  to: '2024-12-31'
});
```

### Futures

```typescript
// Get futures tickers
await client.getFuturesTickers({ exchange: 'CME' });

// Get futures ticker information
await client.getFuturesTickerBySymbol('ES');

// Get futures prices
await client.getFuturesPrices('ES', {
  from: '2024-01-01',
  to: '2024-12-31'
});
```

### Indices

```typescript
// Get index tickers
await client.getIndexTickers({ exchange: 'NYSE' });

// Get index ticker information
await client.getIndexTickerBySymbol('SPX');

// Get index prices
await client.getIndexPrices('SPX', {
  from: '2024-01-01',
  to: '2024-12-31'
});
```

### Economic Data

```typescript
// Search for economic datasets
await client.searchEcon('unemployment rate');

// Get economic dataset
await client.getEconDataset('UNRATE');

// Get economic calendar
await client.getEconCalendar({
  from: '2024-01-01',
  to: '2024-12-31',
  country: 'US',
  minImportance: 3
});
```

### Company Profiles

```typescript
// Asset profile
await client.getStockAsset('AAPL');

// Recommendations
await client.getStockRecommendation('AAPL');

// Financial statements
await client.getStockCashflow('AAPL');
await client.getStockIncome('AAPL');
await client.getStockBalancesheet('AAPL');
await client.getStockFinancials('AAPL');

// Company statistics
await client.getStockStatistics('AAPL');
await client.getStockSummary('AAPL');
await client.getStockInfo('AAPL');

// Ownership and holders
await client.getStockFund('AAPL');
await client.getStockInsiders('AAPL');
await client.getStockInstitution('AAPL');
await client.getStockOwnership('AAPL');

// Earnings and trends
await client.getStockEarnings('AAPL');
await client.getStockTrendEarnings('AAPL');
await client.getStockTrendIndex('AAPL');

// Insider activity
await client.getStockActivity('AAPL');
await client.getStockTransactions('AAPL');

// Calendar events
await client.getStockCalendar('AAPL');

// Web traffic
await client.getStockTraffic('AAPL');
```

### News

```typescript
// Get latest news
await client.getNews();

// Get company-specific news
await client.getCompanyNews('AAPL');

// Get country news
await client.getCountryNews('US');

// Get category news
await client.getCategoryNews('technology');
```

### Sentiment

```typescript
// Get all sentiment data
await client.getSentimentAll('AAPL');

// Get social media sentiment
await client.getSentimentSocial('AAPL');

// Get news sentiment
await client.getSentimentNews('AAPL');

// Get analyst sentiment
await client.getSentimentAnalyst('AAPL');
```

## Error Handling

The SDK throws errors for failed requests. Use try-catch blocks to handle them:

```typescript
try {
  const data = await client.getStockPrices('AAPL');
  console.log(data);
} catch (error) {
  console.error('Error fetching data:', error.message);
}
```

## TypeScript Support

This SDK is written in TypeScript and includes type definitions. Import types as needed:

```typescript
import { Axion, ApiResponse } from 'axion-sdk';
```

## Base URL

By default, the SDK connects to `http://localhost:3001`. To use a different base URL, modify the `BASE_URL` constant in the source code.
