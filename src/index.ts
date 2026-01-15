import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiResponse } from './models';

const BASE_URL = "http://localhost:3001";

export class Axion {
    private client: AxiosInstance;
    private apiKey?: string;

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
    }

    private async _request(method: string, path: string, params: Record<string, any> = {}, data: Record<string, any> = {}, authRequired: boolean = true): Promise<ApiResponse> {
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
            // The python version has a normalize function, which seems to coerce strings to numbers/booleans.
            // This is generally not needed in JS/TS as JSON parsing handles types correctly.
            // If the API returns numbers as strings, a normalization step would be needed here.
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

    // --- Credit API ---
    public searchCredit(query: string): Promise<ApiResponse> {
        return this._request("GET", "credit/search", { query });
    }

    public getCreditRatings(entityId: string): Promise<ApiResponse> {
        return this._request("GET", `credit/ratings/${entityId}`);
    }

    // --- ESG API ---
    public getEsgData(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `esg/${ticker}`);
    }

    // --- ETF API ---
    public getEtfFundData(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/fund`);
    }

    public getEtfHoldings(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/holdings`);
    }

    public getEtfExposure(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/exposure`);
    }

    // --- Supply Chain API ---
    public getSupplyChainCustomers(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `supply-chain/${ticker}/customers`);
    }

    public getSupplyChainPeers(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `supply-chain/${ticker}/peers`);
    }

    public getSupplyChainSuppliers(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `supply-chain/${ticker}/suppliers`);
    }

    // --- Stocks API ---
    public getStockTickers(params: { country?: string, exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "stocks/tickers", params);
    }

    public getStockTickerBySymbol(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `stocks/${ticker}`);
    }

    public getStockPrices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `stocks/${ticker}/prices`, params);
    }

    // --- Crypto API ---
    public getCryptoTickers(params: { type?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "crypto/tickers", params);
    }

    public getCryptoTickerBySymbol(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `crypto/${ticker}`);
    }

    public getCryptoPrices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `crypto/${ticker}/prices`, params);
    }

    // --- Forex API ---
    public getForexTickers(params: { country?: string, exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "forex/tickers", params);
    }

    public getForexTickerBySymbol(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `forex/${ticker}`);
    }

    public getForexPrices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `forex/${ticker}/prices`, params);
    }

    // --- Futures API ---
    public getFuturesTickers(params: { exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "futures/tickers", params);
    }

    public getFuturesTickerBySymbol(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `futures/${ticker}`);
    }

    public getFuturesPrices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `futures/${ticker}/prices`, params);
    }

    // --- Indices API ---
    public getIndexTickers(params: { exchange?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "indices/tickers", params);
    }

    public getIndexTickerBySymbol(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `indices/${ticker}`);
    }

    public getIndexPrices(ticker: string, params: { from?: string, to?: string, frame?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", `indices/${ticker}/prices`, params);
    }

    // --- Economic API ---
    public searchEcon(query: string): Promise<ApiResponse> {
        return this._request("GET", "econ/search", { query });
    }

    public getEconDataset(seriesId: string): Promise<ApiResponse> {
        return this._request("GET", `econ/dataset/${seriesId}`);
    }

    public getEconCalendar(params: { from?: string, to?: string, country?: string, minImportance?: number, currency?: string, category?: string } = {}): Promise<ApiResponse> {
        return this._request("GET", "econ/calendar", params);
    }

    // --- Profiles API ---
    /**
     * Get asset profile information for a stock
     */
    public getStockAsset(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/asset`);
    }

    /**
     * Get recommendation trend for a stock
     */
    public getStockRecommendation(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/recommendation`);
    }

    /**
     * Get cash flow statement history for a stock
     */
    public getStockCashflow(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/cashflow`);
    }

    /**
     * Get index trend estimates for a stock
     */
    public getStockTrendIndex(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/trend/index`);
    }

    /**
     * Get key statistics for a stock
     */
    public getStockStatistics(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/statistics`);
    }

    /**
     * Get income statement history for a stock
     */
    public getStockIncome(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/income`);
    }

    /**
     * Get fund ownership data for a stock
     */
    public getStockFund(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/fund`);
    }

    /**
     * Get summary detail for a stock
     */
    public getStockSummary(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/summary`);
    }

    /**
     * Get insider holders for a stock
     */
    public getStockInsiders(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/insiders`);
    }

    /**
     * Get calendar events for a stock
     */
    public getStockCalendar(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/calendar`);
    }

    /**
     * Get balance sheet history for a stock
     */
    public getStockBalancesheet(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/balancesheet`);
    }

    /**
     * Get earnings trend estimates for a stock
     */
    public getStockTrendEarnings(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/trend/earnings`);
    }

    /**
     * Get institution ownership for a stock
     */
    public getStockInstitution(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/institution`);
    }

    /**
     * Get major holders breakdown for a stock
     */
    public getStockOwnership(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/ownership`);
    }

    /**
     * Get earnings history for a stock
     */
    public getStockEarnings(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/earnings`);
    }

    /**
     * Get summary profile information for a stock
     */
    public getStockInfo(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/info`);
    }

    /**
     * Get net share purchase activity for a stock
     */
    public getStockActivity(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/activity`);
    }

    /**
     * Get insider transactions for a stock
     */
    public getStockTransactions(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/transactions`);
    }

    /**
     * Get financial data for a stock
     */
    public getStockFinancials(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/financials`);
    }

    /**
     * Get web traffic data for a company
     */
    public getStockTraffic(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/traffic`);
    }

    // --- News API ---
    public getNews(): Promise<ApiResponse> {
        return this._request("GET", "news");
    }

    public getCompanyNews(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `news/${ticker}`);
    }

    public getCountryNews(country: string): Promise<ApiResponse> {
        return this._request("GET", `news/country/${country}`);
    }

    public getCategoryNews(category: string): Promise<ApiResponse> {
        return this._request("GET", `news/category/${category}`);
    }

    // --- Sentiment API ---
    public getSentimentAll(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/all`);
    }

    public getSentimentSocial(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/social`);
    }

    public getSentimentNews(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/news`);
    }

    public getSentimentAnalyst(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `sentiment/${ticker}/analyst`);
    }
}
