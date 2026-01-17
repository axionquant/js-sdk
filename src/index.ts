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
    fund(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/fund`);
    }

    holdings(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/holdings`);
    }

    exposure(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `etfs/${ticker}/exposure`);
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
}

class EconAPI extends BaseAPI {
    search(query: string): Promise<ApiResponse> {
        return this._request("GET", "econ/search", { query });
    }

    dataset(seriesId: string): Promise<ApiResponse> {
        return this._request("GET", `econ/dataset/${seriesId}`);
    }

    calendar(params: { from?: string, to?: string, country?: string, minImportance?: number, currency?: string, category?: string } = {}): Promise<ApiResponse> {
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
    asset(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/asset`);
    }

    recommendation(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/recommendation`);
    }

    cashflow(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/cashflow`);
    }

    indexTrend(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/trend/index`);
    }

    statistics(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/statistics`);
    }

    income(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/income`);
    }

    fund(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/fund`);
    }

    summary(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/summary`);
    }

    insiders(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/insiders`);
    }

    calendar(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/calendar`);
    }

    balancesheet(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/balancesheet`);
    }

    earningsTrend(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/trend/earnings`);
    }

    institutionOwnership(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/institution`);
    }

    ownership(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/ownership`);
    }

    earnings(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/earnings`);
    }

    info(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/info`);
    }

    activity(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/activity`);
    }

    transactions(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/transactions`);
    }

    financials(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/financials`);
    }

    traffic(ticker: string): Promise<ApiResponse> {
        return this._request("GET", `profiles/${ticker}/traffic`);
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

        // Initialize nested API classes
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
}
