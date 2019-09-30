import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Title }     from '@angular/platform-browser';

import {Inspection} from '../../inspection';
     
@Component({
    selector: 'inspection-comp',
    styleUrls: ['./app.sass',],
    templateUrl: './app.html',
})
export class AppComponent implements OnInit { 

    title= 'Инспекция по ресторанам';
    inspectionList: [];
    inspectionHead= [
        {"title": "Наименование","code": "business_name", "checked": false},
        {"title": "Адрес","code": "business_address", "checked": false},
        {"title": "Город","code": "business_city", "checked": false},
        {"title": "Номер","code": "business_phone_number", "checked": false},
        {"title": "Индекс","code": "business_postal_code", "checked": false},
        {"title": "Дата","code": "inspection_date", "checked": false},
        {"title": "Статус","code": "inspection_description", "checked": false},
        {"title": "Тип","code": "inspection_type", "checked": false},
    ];
    optionsChecked= [
        "business_name",
        "business_address",
        "business_city",
        "business_phone_number",
        "business_postal_code",
        "inspection_date",
        "inspection_description",
        "inspection_type"
    ];
    position: number;
    sortingKey: string;


    constructor(private httpService: HttpService, private titleService: Title){}

    public setTitle( newTitle: string) {
        this.titleService.setTitle(this.title);
    }

    ngOnInit() {
    	this.httpService.getData()
	    	.subscribe((resp: []) => {
	    		this.inspectionList= resp;
	    	});
    }

    sorting(key: string) {
        this.sortingKey = key;
    }

    updateCheckedOptions(option: string, event: any) {
        if (!event.target.checked) {
            this.optionsChecked.push(option);
        } else {
            this.position = this.optionsChecked.indexOf(option);
            this.optionsChecked.splice(this.position, 1);
        }
    }
}
