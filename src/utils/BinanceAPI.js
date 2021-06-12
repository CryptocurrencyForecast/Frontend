import axios from 'axios';

export class BinanceApi {
    static instance

    static getInstance() {
        if(BinanceApi.instance == null) {
            BinanceApi.instance = new BinanceApi()
        }
        return BinanceApi.instance
    }

    async getCryptoNews() {
        try {
            const response = await axios ({
                url: "https://api.coindesk.com/v1/bpi/currentprice.json",
                method: "GET"
            })
            return response.data
        } catch {
            return null
        }
    }

    async test() {
        return 1;
    }
}