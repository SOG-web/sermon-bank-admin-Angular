// This file can be replaced during build by using the fileReplacements array.
// ng build --prod replaces environment.ts with environment.prod.ts.
// The list of file replacements can be found in angular.json.

export const environment = {
  firebase: {
    projectId: 'sermon-bank',
    appId: '1:701899005889:web:0c5a7304188e5fe3ddd940',
    databaseURL:
      'https://sermon-bank-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'sermon-bank.appspot.com',
    locationId: 'europe-west2',
    apiKey: 'AIzaSyA8HI_Pc_Lyoo7vPmoOy60F8znJeIbeIzs',
    authDomain: 'sermon-bank.firebaseapp.com',
    messagingSenderId: '701899005889',
    measurementId: 'G-E1Z9YYSLC5',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as zone.run, zoneDelegate.invokeTask.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
