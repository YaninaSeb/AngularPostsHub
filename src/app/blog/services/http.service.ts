import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private BASE_URL: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    public getPosts(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>(this.BASE_URL);
    }

    public getPostById(id: number): Observable<PostModel> {
        return this.http.get<PostModel>(`${this.BASE_URL}/${id}`);
    }
}
