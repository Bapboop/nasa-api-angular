import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NasaApiService {
    private apiKey = 'cGqxjeZNj602iT9fU4vJ3jnNwWdg27tIW0VwJwRf';

    constructor(private http: HttpClient) {}
    
    getAstronomyPictureOfTheDay() {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

        return this.http.get(url);
    }
}