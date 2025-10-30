import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateApproachComponent } from './template-approach/template-approach.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LongTextPipe } from './long-text.pipe';
import { ReversePipe } from './reverse.pipe';
import { ShortenPipe } from './shorten.pipe';
import { HighlightDirective } from './highlight.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateApproachComponent,
    ReactiveApproachComponent,
    PipeDemoComponent,
    LongTextPipe,
    ReversePipe,
    ShortenPipe,
    HighlightDirective,
    DirectiveDemoComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
