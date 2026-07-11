import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiResponse } from './models';

const BASE_URL = "https://api.axionquant.com";

class BaseAPI {
    constructor(protected client: Axion) {}

    protected async _request(method: string, path: string, params: Record<string, any> = {}, data: Record<string, any> = {}, authRequired: boolean = true): Promise<ApiResponse> {
        return this.client._request(method, path, params, data, authRequired);
    }
}

class CreditAPI extends BaseAPI {
    search(query: string): Promise<ApiResponse> {
        return this._request("GET", "credit/search", { query });
    }

    ratings(entityId: string): Promise<ApiResponse> {
        return this._request("GET", `credit/ratings/${entityId}`);
    }
}

class ESGAPI extends BaseAPI {
    data(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `esg/${ticker}`);
    }
}

class ETFAPI extends BaseAPI {
   tickers(params: { country?: string, exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "etfs/tickers", params);
    }

    ticker(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}`);
    }
    prices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/prices`, params);
    }

    fund(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/fund`);
    }

    holdings(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/holdings`);
    }

    exposure(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/exposure`);
    }
    weights(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/weights`);
    }

    gainers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "etfs/gainers", params);
    }

    losers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "etfs/losers", params);
    }

    listMarket(): Promise<ApiResponse> {
        return this._request("GET", "etfs/list/market");
    }

    listCountry(): Promise<ApiResponse> {
        return this._request("GET", "etfs/list/country");
    }

    listCurrency(): Promise<ApiResponse> {
        return this._request("GET", "etfs/list/currency");
    }

    listSector(): Promise<ApiResponse> {
        return this._request("GET", "etfs/list/sector");
    }

    listIndustry(): Promise<ApiResponse> {
        return this._request("GET", "etfs/list/industry");
    }

    listType(): Promise<ApiResponse> {
        return this._request("GET", "etfs/list/type");
    }

    list(column: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/list/${column}`);
    }

    quote(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/quote`);
    }
}

class SupplyChainAPI extends BaseAPI {
    customers(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `supply-chain/${ticker}/customers`);
    }

    peers(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `supply-chain/${ticker}/peers`);
    }

    suppliers(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `supply-chain/${ticker}/suppliers`);
    }
}

class StocksAPI extends BaseAPI {
    tickers(params: { country?: string, exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "stocks/tickers", params);
    }

    ticker(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `stocks/${ticker}`);
    }

    prices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `stocks/${ticker}/prices`, params);
    }

    gainers(params: { days?: number, limit?: number, market?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "stocks/gainers", params);
    }

    losers(params: { days?: number, limit?: number, market?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "stocks/losers", params);
    }

    listMarket(): Promise<ApiResponse> {
        return this._request("GET", "stocks/list/market");
    }

    listCountry(): Promise<ApiResponse> {
        return this._request("GET", "stocks/list/country");
    }

    listCurrency(): Promise<ApiResponse> {
        return this._request("GET", "stocks/list/currency");
    }

    listSector(): Promise<ApiResponse> {
        return this._request("GET", "stocks/list/sector");
    }

    listIndustry(): Promise<ApiResponse> {
        return this._request("GET", "stocks/list/industry");
    }

    listType(): Promise<ApiResponse> {
        return this._request("GET", "stocks/list/type");
    }

    list(column: string): Promise<ApiResponse> {
        return this._request("GET", `stocks/list/${column}`);
    }

    quote(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `stocks/${ticker}/quote`);
    }
}

class CryptoAPI extends BaseAPI {
    tickers(params: { type?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "crypto/tickers", params);
    }

    ticker(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `crypto/${ticker}`);
    }

    prices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `crypto/${ticker}/prices`, params);
    }

    gainers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "crypto/gainers", params);
    }

    losers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "crypto/losers", params);
    }

    listCategory(): Promise<ApiResponse> {
        return this._request("GET", "crypto/list/category");
    }

    listRating(): Promise<ApiResponse> {
        return this._request("GET", "crypto/list/rating");
    }

    listType(): Promise<ApiResponse> {
        return this._request("GET", "crypto/list/type");
    }

    list(column: string): Promise<ApiResponse> {
        return this._request("GET", `crypto/list/${column}`);
    }

    quote(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `crypto/${ticker}/quote`);
    }
}

class ForexAPI extends BaseAPI {
    tickers(params: { country?: string, exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "forex/tickers", params);
    }

    ticker(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `forex/${ticker}`);
    }

    prices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `forex/${ticker}/prices`, params);
    }

    gainers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "forex/gainers", params);
    }

    losers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "forex/losers", params);
    }

    listExchange(): Promise<ApiResponse> {
        return this._request("GET", "forex/list/exchange");
    }

    listRating(): Promise<ApiResponse> {
        return this._request("GET", "forex/list/rating");
    }

    listCountry(): Promise<ApiResponse> {
        return this._request("GET", "forex/list/country");
    }

    list(column: string): Promise<ApiResponse> {
        return this._request("GET", `forex/list/${column}`);
    }

    quote(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `forex/${ticker}/quote`);
    }
}

class FuturesAPI extends BaseAPI {
    tickers(params: { exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "futures/tickers", params);
    }

    ticker(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `futures/${ticker}`);
    }

    prices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `futures/${ticker}/prices`, params);
    }

    gainers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "futures/gainers", params);
    }

    losers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "futures/losers", params);
    }

    listExchange(): Promise<ApiResponse> {
        return this._request("GET", "futures/list/exchange");
    }

    listCurrency(): Promise<ApiResponse> {
        return this._request("GET", "futures/list/currency");
    }

    listTimezone(): Promise<ApiResponse> {
        return this._request("GET", "futures/list/timezone");
    }

    listCountry(): Promise<ApiResponse> {
        return this._request("GET", "futures/list/country");
    }

    list(column: string): Promise<ApiResponse> {
        return this._request("GET", `futures/list/${column}`);
    }

    quote(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `futures/${ticker}/quote`);
    }
}

class IndicesAPI extends BaseAPI {
    tickers(params: { exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "indices/tickers", params);
    }

    ticker(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `indices/${ticker}`);
    }

    prices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `indices/${ticker}/prices`, params);
    }

    gainers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "indices/gainers", params);
    }

    losers(params: { days?: number, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "indices/losers", params);
    }

    listExchange(): Promise<ApiResponse> {
        return this._request("GET", "indices/list/exchange");
    }

    listTimezone(): Promise<ApiResponse> {
        return this._request("GET", "indices/list/timezone");
    }

    listCountry(): Promise<ApiResponse> {
        return this._request("GET", "indices/list/country");
    }

    list(column: string): Promise<ApiResponse> {
        return this._request("GET", `indices/list/${column}`);
    }

    quote(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `indices/${ticker}/quote`);
    }

    // GET /:ticker/components - Get index components
    components(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `indices/${ticker}/components`);
    }

    // GET /:ticker/exposure - Which indices hold a ticker
    exposure(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `indices/${ticker}/exposure`);
    }
}

class EconAPI extends BaseAPI {
    // GET /find - AI-powered FRED series search
    find(query: string): Promise<ApiResponse> {
        return this._request("GET", "econ/find", { query });
    }

    search(query: string): Promise<ApiResponse> {
        return this._request("GET", "econ/search", { query });
    }

    dataset(seriesId: string): Promise<ApiResponse> {
        return this._request("GET", `econ/dataset/${seriesId}`);
    }

    calendar(params: { from?: string, to?: string, country?: string, minImportance?: number, currency?: string, category?: string, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", "econ/calendar", params);
    }
}

class NewsAPI extends BaseAPI {
    general(): Promise<ApiResponse> {
        return this._request("GET", "news");
    }

    company(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `news/${ticker}`);
    }

    country(country: string): Promise<ApiResponse> {
        return this._request("GET", `news/country/${country}`);
    }

    category(category: string): Promise<ApiResponse> {
        return this._request("GET", `news/category/${category}`);
    }
}

class SentimentAPI extends BaseAPI {
    all(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/all`);
    }

    social(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/social`);
    }

    news(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/news`);
    }

    analyst(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/analyst`);
    }
}

class ProfilesAPI extends BaseAPI {
    // GET /:ticker - Returns asset profile
    profile(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}`);
    }

    // GET /:ticker/recommendation - Returns recommendation trend
    recommendation(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/recommendation`);
    }

    // GET /:ticker/statistics - Returns key statistics
    statistics(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/statistics`);
    }

    // GET /:ticker/summary - Returns summary detail
    summary(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/summary`);
    }

    // GET /:ticker/calendar - Returns calendar events (earnings, dividends)
    calendar(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/calendar`);
    }

    // GET /:ticker/info - Returns company info (summary profile)
    info(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/info`);
    }
}

class EarningsAPI extends BaseAPI {
    // GET /:ticker/history - Returns earnings history
    history(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `earnings/${ticker}/history`);
    }

    // GET /:ticker/trend - Returns earnings trend
    trend(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `earnings/${ticker}/trend`);
    }

    // GET /:ticker/index - Returns index trend
    index(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `earnings/${ticker}/index`);
    }

    // GET /:ticker/report - Returns earnings report (requires year and quarter query params)
    report(ticker: string, params: { year: string, quarter: string }): Promise<ApiResponse> {
        return this._request("GET", `earnings/${ticker}/report`, params);
    }

    // GET /:ticker/transcript - Get earnings call transcript
    transcript(ticker: string, params: { year: string, quarter: string }): Promise<ApiResponse> {
        return this._request("GET", `earnings/${ticker}/transcript`, params);
    }

    // GET /transcript/sentiment - Get earnings transcript sentiment
    transcriptSentiment(id: string): Promise<ApiResponse> {
        return this._request("GET", "earnings/transcript/sentiment", { id });
    }
}


class FilingsAPI extends BaseAPI {
    // GET /:ticker - Get recent filings for a company
    filings(ticker: string, params: { limit?: number, form?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `filings/${ticker}`, params);
    }

    // GET /:ticker/forms/:formType - Get specific form type filings
    forms(ticker: string, formType: string, params: { year?: string, quarter?: string, limit?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `filings/${ticker}/forms/${formType}`, params);
    }

    // GET /desc/forms - List available form types and their descriptions
    descForms(): Promise<ApiResponse> {
        return this._request("GET", "filings/desc/forms");
    }

    // GET /search - Search filings by year/quarter
    search(params: { year: string, quarter: string, form?: string, ticker?: string }): Promise<ApiResponse> {
        return this._request("GET", "filings/search", params);
    }

    // GET /document/text - Get raw text of a filing document
    documentText(documentId: string): Promise<ApiResponse> {
        return this._request("GET", "filings/document/text", { documentId });
    }

    // GET /document/sentiment - Get sentiment of a filing document
    documentSentiment(documentId: string): Promise<ApiResponse> {
        return this._request("GET", "filings/document/sentiment", { documentId });
    }
}

class FinancialsAPI extends BaseAPI {
    // GET /statements/:ticker/balance - Get balance sheet
    balanceSheet(ticker: string, params: { year?: string, quarter?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/statements/${ticker}/balance`, params);
    }

    // GET /statements/:ticker/income - Get income statement
    incomeStatement(ticker: string, params: { year?: string, quarter?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/statements/${ticker}/income`, params);
    }

    // GET /statements/:ticker/cashflow - Get cash flow statement
    cashFlowStatement(ticker: string, params: { year?: string, quarter?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/statements/${ticker}/cashflow`, params);
    }

    // GET /:ticker/revenue - Get revenue data
    revenue(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/revenue`, params);
    }

    // GET /:ticker/netincome - Get net income data
    netIncome(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/netincome`, params);
    }

    // GET /:ticker/total/assets - Get total assets data
    totalAssets(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/total/assets`, params);
    }

    // GET /:ticker/total/liabilities - Get total liabilities data
    totalLiabilities(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/total/liabilities`, params);
    }

    // GET /:ticker/stockholdersequity - Get stockholders equity data
    stockholdersEquity(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/stockholdersequity`, params);
    }

    // GET /:ticker/current/assets - Get current assets data
    currentAssets(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/current/assets`, params);
    }

    // GET /:ticker/current/liabilities - Get current liabilities data
    currentLiabilities(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/current/liabilities`, params);
    }

    // GET /:ticker/cashflow/operating - Get operating cash flow data
    operatingCashFlow(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/cashflow/operating`, params);
    }

    // GET /:ticker/capitalexpenditures - Get capital expenditures data
    capitalExpenditures(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/capitalexpenditures`, params);
    }

    // GET /:ticker/cashflow/free - Get free cash flow data
    freeCashFlow(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/cashflow/free`, params);
    }

    // GET /:ticker/sharesoutstanding/basic - Get basic shares outstanding data
    sharesOutstandingBasic(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/sharesoutstanding/basic`, params);
    }

    // GET /:ticker/sharesoutstanding/diluted - Get diluted shares outstanding data
    sharesOutstandingDiluted(ticker: string, params: { periods?: number } = {}): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/sharesoutstanding/diluted`, params);
    }

    // GET /:ticker/metrics - Get calculated financial metrics
    metrics(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/metrics`);
    }

    // GET /:ticker/snapshot - Get financial data snapshot
    snapshot(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `financials/${ticker}/snapshot`);
    }
}

class InsidersAPI extends BaseAPI {
    // GET /:ticker/funds - Get fund ownership data
    funds(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `insiders/${ticker}/funds`);
    }

    // GET /:ticker/individuals - Get insider holders (individuals)
    individuals(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `insiders/${ticker}/individuals`);
    }

    // GET /:ticker/institutions - Get institutional ownership data
    institutions(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `insiders/${ticker}/institutions`);
    }

    // GET /:ticker/ownership - Get major holders breakdown
    ownership(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `insiders/${ticker}/ownership`);
    }

    // GET /:ticker/activity - Get net share purchase activity
    activity(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `insiders/${ticker}/activity`);
    }

    // GET /:ticker/transactions - Get insider transactions
    transactions(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `insiders/${ticker}/transactions`);
    }
}

class WebTrafficAPI extends BaseAPI {
    // GET /:ticker/traffic - Get web traffic data for a company's website
    traffic(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `webtraffic/${ticker}/traffic`);
    }
}

export class Axion {
    private client: AxiosInstance;
    private apiKey?: string;

    public credit: CreditAPI;
    public esg: ESGAPI;
    public etfs: ETFAPI;
    public supplyChain: SupplyChainAPI;
    public stocks: StocksAPI;
    public crypto: CryptoAPI;
    public forex: ForexAPI;
    public futures: FuturesAPI;
    public indices: IndicesAPI;
    public econ: EconAPI;
    public news: NewsAPI;
    public sentiment: SentimentAPI;
    public profiles: ProfilesAPI;
    public earnings: EarningsAPI;
    public filings: FilingsAPI;
    public financials: FinancialsAPI;
    public insiders: InsidersAPI;
    public webTraffic: WebTrafficAPI;

    constructor(apiKey?: string) {
        this.apiKey = apiKey;
        this.client = axios.create({
            baseURL: BASE_URL,
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (apiKey) {
            this.client.defaults.headers.common["Authorization"] = `Bearer ${this.apiKey}`;
        }

        this.credit = new CreditAPI(this);
        this.esg = new ESGAPI(this);
        this.etfs = new ETFAPI(this);
        this.supplyChain = new SupplyChainAPI(this);
        this.stocks = new StocksAPI(this);
        this.crypto = new CryptoAPI(this);
        this.forex = new ForexAPI(this);
        this.futures = new FuturesAPI(this);
        this.indices = new IndicesAPI(this);
        this.econ = new EconAPI(this);
        this.news = new NewsAPI(this);
        this.sentiment = new SentimentAPI(this);
        this.profiles = new ProfilesAPI(this);
        this.earnings = new EarningsAPI(this);
        this.filings = new FilingsAPI(this);
        this.financials = new FinancialsAPI(this);
        this.insiders = new InsidersAPI(this);
        this.webTraffic = new WebTrafficAPI(this);
    }

    async _request(method: string, path: string, params: Record<string, any> = {}, data: Record<string, any> = {}, authRequired: boolean = true): Promise<ApiResponse> {
        const config = {
            method,
            url: path,
            params,
            data,
            headers: { ...this.client.defaults.headers.common }
        };

        if (!authRequired) {
            delete config.headers["Authorization"];
        } else if (authRequired && !this.apiKey) {
            throw new Error("Authentication required but no API key provided to client.");
        }

        try {
            const response = await this.client.request(config);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const errorData = axiosError.response.data as { message?: string };
                throw new Error(`HTTP Error ${axiosError.response.status}: ${errorData?.message || 'Unknown HTTP error'}`);
            } else if (axiosError.request) {
                throw new Error(`Connection Error: Could not connect to ${BASE_URL}`);
            } else {
                throw new Error(`Request Error: ${axiosError.message}`);
            }
        }
    }
}
