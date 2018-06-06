import { Observable, Subject } from 'rxjs';
import { Injectable} from '@angular/core';
@Injectable()
export class LoaderService {
    private subjects: Subject<string>[] = [];
    public publish(eventName: string)
    {
        this.subjects[eventName] = this.subjects[eventName] = new Subject();
        this.subjects[eventName].next();
    }
    public on(eventName: string): Observable<string>
    {
        this.subjects[eventName] = this.subjects[eventName] = new Subject();
        return this.subjects[eventName].asObservable();
    }
}