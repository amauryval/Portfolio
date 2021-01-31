import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeViewComponent } from './home/home-view/home-view.component';
import { ResumeViewComponent } from './resume/resume-view/resume-view.component';
import { GalleryViewComponent } from './gallery/gallery-view/gallery-view.component';
import { NotesViewComponent } from './notes/notes-view/notes-view.component';

import { ResumeService } from './services/resume.service';

import { Routes } from '@angular/router';
import { ActivitiesGraphComponent } from './resume/activities-graph/activities-graph.component';
import { TopbarSubviewComponent } from './resume/topbar-subview/topbar-subview.component';
import { LeftbarSubviewComponent } from './resume/leftbar-subview/leftbar-subview.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'resume', component: ResumeViewComponent },
  { path: 'gallery', component: GalleryViewComponent },
  { path: 'notes', component: NotesViewComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ResumeViewComponent,
    GalleryViewComponent,
    NotesViewComponent,
    ActivitiesGraphComponent,
    TopbarSubviewComponent,
    LeftbarSubviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ResumeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
