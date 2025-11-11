import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { __runInitializers } from 'tslib';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app'

import {provideFirestore, getFirestore} from '@angular/fire/firestore'
import { environments } from './environments/environments';
import { provideAuth} from '@angular/fire/auth'
import {getAuth } from 'firebase/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(environments.firebaseconfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
  ]
};
