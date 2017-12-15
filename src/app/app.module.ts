import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddingTutorialComponent } from './adding-tutorial/adding-tutorial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlockDiagramService } from './block-diagram.service';
import { AnimationTestComponent } from './animation-test/animation-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TheoryPresenterComponent } from './theory-presenter/theory-presenter.component';
import { AddingFormComponent } from './adding-form/adding-form.component';
import { RepresentationFormComponent } from './representation-form/representation-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingTutorialComponent,
    NavbarComponent,
    AnimationTestComponent,
    TheoryPresenterComponent,
    AddingFormComponent,
    RepresentationFormComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':id',
        component: AddingTutorialComponent
      }
    ])
  ],
  providers: [
    BlockDiagramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
