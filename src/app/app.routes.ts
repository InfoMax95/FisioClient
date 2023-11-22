import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage' },
  {path: 'homepage', title: "Homepage Fisio App", component: HomepageComponent },
  {path: 'posts', component: PostListComponent },
  {path: 'posts/new', component: AddPostComponent },
  {path: 'posts/edit/:id', component: EditPostComponent },
  // {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
  //   children: [
  //     {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
  //     {path: 'add-post', component: AddPostComponent, canActivate: [AdminGuard]},
  //     {path: 'user-manager', component: UserManagerComponent, canActivate: [AdminGuard]},
  //   ]},
  // {path: 'apps', component: AppsComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'about', component: AboutComponent},
  // {path: 'post/:id', component: PostComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
  {
    path: '404',
    component: NotFoundComponent
  },
  // questo va sempre inserito come ultima path altrimenti rischiamo che prenda sempre questo
  {
    path: '**', // questo indica qualsiasi indirizzo diverso dai nostri
    redirectTo: '404'
  }
];
