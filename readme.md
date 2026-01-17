# Axion SDK

A TypeScript/JavaScript SDK for the Axion financial data API.

## Installation

```bash
npm install @axionquant/sdk
```

## Quick Start

```typescript
import { Axion } from 'axion-sdk';

// Initialize with API key
const client = new Axion('your-api-key');

// Get stock price data
const prices = await client.stocks.prices('AAPL', {
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
await client.credit.search('Apple Inc');

// Get credit ratings for an entity
await client.credit.ratings('entity-id');
```

### ESG

```typescript
// Get ESG data for a stock
await client.esg.data('AAPL');
```

### ETFs

```typescript
// Get ETF fund data
await client.etfs.fund('SPY');

// Get ETF holdings
await client.etfs.holdings('SPY');

// Get ETF exposure data
await client.etfs.exposure('SPY');
```

### Supply Chain

```typescript
// Get company customers
await client.supplyChain.customers('AAPL');

// Get company peers
await client.supplyChain.peers('AAPL');

// Get company suppliers
await client.supplyChain.suppliers('AAPL');
```

### Stocks

```typescript
// Get all stock tickers
await client.stocks.tickers({ country: 'US', exchange: 'NASDAQ' });

// Get ticker information
await client.stocks.ticker('AAPL');

// Get historical prices
await client.stocks.prices('AAPL', {
  from: '2024-01-01',
  to: '2024-12-31',
  frame: '1d' // daily
});
```

### Crypto

```typescript
// Get all crypto tickers
await client.crypto.tickers({ type: 'coin' });

// Get crypto ticker information
await client.crypto.ticker('BTC');

// Get crypto prices
await client.crypto.prices('BTC', {
  from: '2024-01-01',
  to: '2024-12-31',
  frame: '1h'
});
```

### Forex

```typescript
// Get forex tickers
await client.forex.tickers({ country: 'US' });

// Get forex ticker information
await client.forex.ticker('EURUSD');

// Get forex prices
await client.forex.prices('EURUSD', {
  from: '2024-01-01',
  to: '2024-12-31'
});
```

### Futures

```typescript
// Get futures tickers
await client.futures.tickers({ exchange: 'CME' });

// Get futures ticker information
await client.futures.ticker('ES');

// Get futures prices
await client.futures.prices('ES', {
  from: '2024-01-01',
  to: '2024-12-31'
});
```

### Indices

```typescript
// Get index tickers
await client.indices.tickers({ exchange: 'NYSE' });

// Get index ticker information
await client.indices.ticker('SPX');

// Get index prices
await client.indices.prices('SPX', {
  from: '2024-01-01',
  to: '2024-12-31'
});
```

### Economic Data

```typescript
// Search for economic datasets
await client.econ.search('unemployment rate');

// Get economic dataset
await client.econ.dataset('UNRATE');

// Get economic calendar
await client.econ.calendar({
  from: '2024-01-01',
  to: '2024-12-31',
  country: 'US',
  minImportance: 3,
  currency: 'USD',
  category: 'employment'
});
```

### News

```typescript
// Get latest general news
await client.news.general();

// Get company-specific news
await client.news.company('AAPL');

// Get country news
await client.news.country('US');

// Get category news
await client.news.category('technology');
```

### Sentiment

```typescript
// Get all sentiment data
await client.sentiment.all('AAPL');

// Get social media sentiment
await client.sentiment.social('AAPL');

// Get news sentiment
await client.sentiment.news('AAPL');

// Get analyst sentiment
await client.sentiment.analyst('AAPL');
```

### Company Profiles

```typescript
// Asset profile
await client.profiles.asset('AAPL');

// Recommendations
await client.profiles.recommendation('AAPL');

// Financial statements
await client.profiles.cashflow('AAPL');
await client.profiles.income('AAPL');
await client.profiles.balancesheet('AAPL');
await client.profiles.financials('AAPL');

// Company statistics
await client.profiles.statistics('AAPL');
await client.profiles.summary('AAPL');
await client.profiles.info('AAPL');

// Ownership and holders
await client.profiles.fund('AAPL');
await client.profiles.insiders('AAPL');
await client.profiles.institutionOwnership('AAPL');
await client.profiles.ownership('AAPL');

// Earnings and trends
await client.profiles.earnings('AAPL');
await client.profiles.earningsTrend('AAPL');
await client.profiles.indexTrend('AAPL');

// Insider activity
await client.profiles.activity('AAPL');
await client.profiles.transactions('AAPL');

// Calendar events
await client.profiles.calendar('AAPL');

// Web traffic
await client.profiles.traffic('AAPL');
```

## Error Handling

The SDK throws errors for failed requests. Use try-catch blocks to handle them:

```typescript
try {
  const data = await client.stocks.prices('AAPL');
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

By default, the SDK connects to `https://api.axionquant.com`. To use a different base URL, modify the `BASE_URL` constant in the source code.
