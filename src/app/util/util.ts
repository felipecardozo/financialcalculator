import { Injectable } from '@angular/core';

@Injectable()
export class Util {

    static months: any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    constructor() {

    }

    static getCurrentYear() {
        return new Date().getFullYear();
    }

    static getCurrentMonthString() {
        return Util.months[new Date().getMonth()];
    }

}