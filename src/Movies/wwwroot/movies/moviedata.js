import {HttpClient} from "aurelia-http-client";
import {inject} from "aurelia-framework";


let baseUrl = "/movies.json";

@inject(HttpClient)
export class MovieData {
    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll(){
        return this.http.get(baseUrl)
                        .then(response => {
                            return response.content;
                        });
    }

    getById(id){
        return this.http.get(baseUrl)
                        .then(response => {
                            for (var i = 0; i < response.content.length; i++) {
                                if (response.content[i].id === parseInt(id)) {
                                    return response.content[i];
                                }
                            }
                        });
    }

    save(movie){
        if(false){
            var request = this.http.createRequest();
            request.asPut()
                    .withUrl(baseUrl)
                    .withHeader("Accept", "application/json")
                    .withHeader("Content-Type", "application/json")
                    .withContent(movie)
            return request.send().then(response => response.content);
        }
        console.log(movie);
        return movie;
    }
}