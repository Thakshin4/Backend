import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import these modules
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  declarations: [AppComponent, PostComponent, PostCreateComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule], // Add these modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
