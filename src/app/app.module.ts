import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateApproachComponent } from './template-approach/template-approach.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateApproachComponent,
    ReactiveApproachComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
