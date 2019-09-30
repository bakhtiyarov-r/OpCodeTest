import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { HttpService } from './services/http.service';
import { StatusDirective } from './directives/status.directive';
import { SearchPipe } from './pipes/search.pipe';
import { SortingPipe } from './pipes/sorting.pipe';



import { AppComponent }   from './components/main/app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
    declarations: [ AppComponent, StatusDirective, SearchPipe, SortingPipe ],
    bootstrap:    [ AppComponent ],
    providers:    [ Title, HttpService ],
})
export class AppModule { }
