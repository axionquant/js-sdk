# Axion SDK

A TypeScript/JavaScript SDK for the [Axion](https://axionquant.com) financial data API.

## Installation

```bash
npm install @axionquant/sdk
```

## Quick Start

[Get your free API key](https://axionquant.com/dashboard/api-keys)

```js
const { Axion } = require('@axionquant/sdk');

const client = new Axion('your-api-key');

// Get stock tickers
const tickers = await client.stocks.tickers({ country: 'US', exchange: 'NASDAQ' });

// Get historical prices
const prices = await client.stocks.prices('AAPL', {
  from: '2024-01-01',
  to: '2024-12-31',
  frame: '1d'
});
```

## Authentication

Most endpoints require an API key. Pass it when initializing the client:

```js
const client = new Axion('your-api-key');
```

## API Reference

### Stocks

```js
// Get all stock tickers
await client.stocks.tickers({ country: 'US', exchange: 'NASDAQ' });

// Get ticker info
await client.stocks.ticker('AAPL');

// Get historical prices
await client.stocks.prices('AAPL', { from: '2024-01-01', to: '2024-12-31', frame: '1d' });

// Get gainers and losers
await client.stocks.gainers({ days: 5, limit: 10, market: 'america' });
await client.stocks.losers({ days: 5, limit: 10 });

// Get stock quote
await client.stocks.quote('AAPL');
```

### Crypto

```js
await client.crypto.tickers({ type: 'coin' });
await client.crypto.ticker('BTC');
await client.crypto.prices('BTC', { from: '2024-01-01', to: '2024-12-31', frame: '1h' });
await client.crypto.gainers({ days: 5, limit: 10 });
await client.crypto.losers({ limit: 5 });
await client.crypto.quote('BTC');
```

### Forex

```js
await client.forex.tickers({ country: 'US' });
await client.forex.ticker('EURUSD');
await client.forex.prices('EURUSD', { from: '2024-01-01', to: '2024-12-31' });
await client.forex.gainers({ limit: 5 });
await client.forex.losers();
await client.forex.quote('EURUSD');
```

### Futures

```js
await client.futures.tickers({ exchange: 'CME' });
await client.futures.ticker('ES');
await client.futures.prices('ES', { from: '2024-01-01', to: '2024-12-31' });
await client.futures.gainers({ limit: 5 });
await client.futures.losers();
await client.futures.quote('ES');
```

### Indices

```js
await client.indices.tickers({ exchange: 'NYSE' });
await client.indices.ticker('SPX');
await client.indices.prices('SPX', { from: '2024-01-01', to: '2024-12-31' });
await client.indices.components('SPX');
await client.indices.exposure('AAPL');
```

### Financials

```js
// Financial statements (balance sheet, income, cash flow)
await client.financials.balanceSheet('AAPL', { year: '2024', quarter: '1' });
await client.financials.incomeStatement('AAPL', { year: '2024', quarter: '1' });
await client.financials.cashFlowStatement('AAPL', { year: '2024', quarter: '1' });

// Historical financial metrics
await client.financials.revenue('AAPL', { periods: 8 });
await client.financials.netIncome('AAPL');
await client.financials.totalAssets('AAPL');
await client.financials.totalLiabilities('AAPL');
await client.financials.stockholdersEquity('AAPL');
await client.financials.currentAssets('AAPL');
await client.financials.currentLiabilities('AAPL');
await client.financials.operatingCashFlow('AAPL');
await client.financials.capitalExpenditures('AAPL');
await client.financials.freeCashFlow('AAPL');
await client.financials.sharesOutstandingBasic('AAPL');
await client.financials.sharesOutstandingDiluted('AAPL');
await client.financials.metrics('AAPL');
await client.financials.snapshot('AAPL');

// Historical valuation ratios
await client.financials.eps('AAPL', { from: '2024-01-01', to: '2024-12-31' });
await client.financials.pe('AAPL');
await client.financials.marketCap('AAPL');
await client.financials.roe('AAPL');
await client.financials.enterpriseValue('AAPL');
await client.financials.ebitda('AAPL');
await client.financials.debtToEquity('AAPL');

// DCF analysis
await client.financials.dcfValue('AAPL');
await client.financials.dcfRate('AAPL');
```

### Earnings

```js
await client.earnings.history('AAPL');
await client.earnings.trend('AAPL');
await client.earnings.index('AAPL');
await client.earnings.report('AAPL', { year: '2024', quarter: 'Q1' });
await client.earnings.transcript('AAPL', { year: '2024', quarter: '2' });
await client.earnings.transcriptSentiment('base64-encoded-id');
```

### Filings

```js
// Get recent filings
await client.filings.filings('AAPL', { limit: 10, form: '10-K' });

// Get specific form type
await client.filings.forms('AAPL', '10-K', { year: '2024', quarter: 'Q1' });

// List available form types
await client.filings.descForms();

// Search filings by year/quarter
await client.filings.search({ year: '2024', quarter: 'Q1', form: '10-Q', ticker: 'AAPL' });

// Get document text/sentiment
await client.filings.documentText('document-id');
await client.filings.documentSentiment('document-id');
```

### Insiders

```js
await client.insiders.funds('AAPL');
await client.insiders.individuals('AAPL');
await client.insiders.institutions('AAPL');
await client.insiders.ownership('AAPL');
await client.insiders.activity('AAPL');
await client.insiders.transactions('AAPL');
```

### Company Profiles

```js
await client.profiles.profile('AAPL');
await client.profiles.recommendation('AAPL');
await client.profiles.statistics('AAPL');
await client.profiles.summary('AAPL');
await client.profiles.info('AAPL');
await client.profiles.calendar('AAPL');
```

### Sentiment

```js
await client.sentiment.all('AAPL');
await client.sentiment.social('AAPL');
await client.sentiment.news('AAPL');
await client.sentiment.analyst('AAPL');
```

### News

```js
await client.news.general();
await client.news.company('AAPL');
await client.news.country('US');
await client.news.category('technology');
```

### Economic Data

```js
// AI-powered FRED dataset finder (natural language)
await client.econ.find('semiconductor spending');

// Search datasets
await client.econ.search('unemployment rate');

// Get a dataset
await client.econ.dataset('UNRATE');

// Get economic calendar
await client.econ.calendar({
  from: '2024-01-01',
  to: '2024-12-31',
  country: 'US',
  minImportance: 3,
  currency: 'USD',
  category: 'employment',
  limit: 25
});
```

### Credit

```js
await client.credit.search('Apple Inc');
await client.credit.ratings('entity-id');
```

### ESG

```js
await client.esg.data('AAPL');
```

### ETFs

```js
await client.etfs.fund('SPY');
await client.etfs.holdings('SPY');
await client.etfs.holdingsAll('SPY');
await client.etfs.exposure('SPY');
await client.etfs.weights('SPY');
await client.etfs.gainers({ limit: 5 });
await client.etfs.losers();
await client.etfs.quote('SPY');
```

### Supply Chain

```js
await client.supplyChain.customers('AAPL');
await client.supplyChain.peers('AAPL');
await client.supplyChain.suppliers('AAPL');
```

### Web Traffic

```js
await client.webTraffic.traffic('AAPL');
```

## Error Handling

```js
try {
  const data = await client.stocks.prices('AAPL');
  console.log(data);
} catch (error) {
  console.error('Error:', error.message);
}
```

## Get Started

For detailed API documentation, support, or to obtain an API key, visit the [Axion](https://axionquant.com) website.

## License

MIT
