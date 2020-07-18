import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './AppRouter';
import { FirebaseAppProvider } from 'reactfire';
import {firebaseConfig} from './firebaseConfig';


ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la app'}>
  <AppRouter />
  </Suspense>
  </FirebaseAppProvider>
),
  document.getElementById('root')
);

