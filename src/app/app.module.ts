import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PersonComponent } from './pages/person/person.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersService } from './services/users.service';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './pages/album/album.component';
import { PhotosComponent } from './pages/photos/photos.component';




const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: 'user',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: PersonComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'albums/:id',
    component: PhotosComponent
  },
  {
    path: 'posts',
    component: UserPostsComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    NotFoundComponent,
    PersonComponent,
    UserPostsComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} /*debugging purpose*/
    )
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
