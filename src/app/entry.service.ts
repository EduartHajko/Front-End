import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  baseUrl: string = 'http://localhost:64544/api/entries/'

  constructor(private http: HttpClient) { }

  getEntry(id){
    return this.http.get(this.baseUrl+'/'+id);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  createEntry(entry){
    return this.http.post(this.baseUrl, entry);
  }

  updateEntry(id, entry){
    return this.http.put(this.baseUrl+'/'+id,entry);
  }

  deleteEntry(id){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
