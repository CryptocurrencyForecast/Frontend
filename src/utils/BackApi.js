import axios from 'axios';

export class BackApi {
    static instance

    static getInstance() {
        if(BackApi.instance == null) {
            BackApi.instance = new BackApi()
        }
        return BackApi.instance
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