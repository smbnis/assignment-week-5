import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../../interfaces/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = 'http://localhost:3000/api/classes';

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.apiUrl);
  }

  createClass(cls: Class): Observable<Class> {
    return this.http.post<Class>(this.apiUrl, cls);
  }

  updateClass(id: string, cls: Class): Observable<Class> {
    return this.http.put<Class>(`${this.apiUrl}/${id}`, cls);
  }

  deleteClass(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
