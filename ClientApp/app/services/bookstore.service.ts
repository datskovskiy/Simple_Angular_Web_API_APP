import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookstoreService {
    constructor(private http: Http) { }

    create(bookstore: any) {
        return this.http.post('/api/bookstores', bookstore)
            .map(res => res.json());
    }

    getBookstore(id: any) {
        return this.http.get('/api/bookstores/' + id)
            .map(res => res.json());
    }

    update(bookstore: any) {
        return this.http.put('/api/bookstores/' + bookstore.id, bookstore)
            .map(res => res.json());
    }

    delete(id: any) {
        return this.http.delete('/api/bookstores/' + id)
            .map(res => res.json());
    }

    getBookstores() {
        return this.http.get('/api/bookstores')
            .map(res => res.json());
    }
}