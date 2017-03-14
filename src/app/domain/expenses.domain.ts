import {Injectable} from '@angular/core';

@Injectable()
export class Expenses{

    id:number;
    detail:String;
    value: number;
    
    constructor(){
    }

    setDetailValue( id:number, detail:String, value:number ){
        this.id = id;
        this.detail = detail;
        this.value = value;
    }

}