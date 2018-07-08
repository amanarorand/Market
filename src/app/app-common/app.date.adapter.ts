import { NativeDateAdapter } from '@angular/material';
export class AppDateAdapter extends NativeDateAdapter {
    parse(value: any): Date | null {
        if ((typeof value === 'string') && value.indexOf('/') > -1) {
            const str = value.split('/');
            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const day = Number(str[0]);
            return new Date(year, month, day);
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    }
    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            const year = date.getFullYear();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            return this._to2Digits(day) + '/' + this._to2Digits(month) + '/' + this._to2Digits(year);
        } else if (displayFormat === 'inputMonth') {
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return  this._to2Digits(month) + '/' + year;
         } else {
            return date.toDateString();
        }

    }

    private _to2Digits(n: Number) {
        return ('00' + n).slice(-2);
    }
}
