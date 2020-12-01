class Weather {
    constructor(city) {
        this.apiKey = '822d80f9e28cb6c690083d8a5f2fab15';
        this.city = city;
        this.lang = 'no';
        this.unit = 'metric';
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=${this.lang}&units=${this.unit}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
        // this.state = state;
    }

}