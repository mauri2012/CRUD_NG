// Import necessary modules
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Adjust imports as needed

// Bootstrap the application
bootstrapApplication(AppComponent, appConfig
).catch((err) => console.error(err));


