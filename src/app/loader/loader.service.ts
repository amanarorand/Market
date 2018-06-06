import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class LoaderService {
    private subjects: Subject<string>[] = [];
    publish(eventName: string) {
        this.subjects[eventName] = this.subjects[eventName] || new Subject<string>();
        this.subjects[eventName].next();
    }
    on(eventName: string): Observable<string> {
        this.subjects[eventName] = this.subjects[eventName] || new Subject<string>();
        return this.subjects[eventName].asObservable();
    }
}