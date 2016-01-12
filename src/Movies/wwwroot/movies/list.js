import {MovieData} from "./moviedata";
import {inject} from "aurelia-framework";

@inject(MovieData)
export class List {

    constructor(movieData) {
        this.movieData = movieData;
        this.formData = { field1: "1", field2: "2", field3: "3", field4: "4" };
        this.selectables = ["one", "two", "three", "four"];
    }

    activate() {
        return this.movieData.getAll()
                             .then(movies => this.movies = movies);
    }
}