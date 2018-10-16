import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { BookstoreFormComponent } from './components/bookstore-form/bookstore-form.component';
import { BookstoreListComponent } from './components/bookstore-list/bookstore-list.component';
import { BookstoreService } from './services/bookstore.service';
import { ChartModule } from 'angular2-chartjs'; 
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        BookstoreFormComponent,
        BookstoreListComponent,
        PieChartComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'bookstore/new', component: BookstoreFormComponent },
            { path: 'bookstore/:id', component: BookstoreFormComponent },
            { path: 'bookstore', component: BookstoreListComponent },
            { path: 'pie-chart', component: PieChartComponent },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        ChartModule
    ],
    providers: [
        BookstoreService
    ]
})
export class AppModuleShared {
}
