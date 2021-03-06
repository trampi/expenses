import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './category.service';
import { AppRoutingModule } from './/app-routing.module';
import { IncomesComponent } from './incomes/incomes.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeService } from './income.service';
import { ExpenseService } from './expense.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    IncomesComponent,
    ExpensesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoryService, IncomeService, ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
