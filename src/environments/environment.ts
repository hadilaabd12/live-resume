// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // replace the data below with your personal data
  personal: {
    caricature: "hadil-illustration.png",
    name: "Hadil Abdelaoui",
    birth: "1999-08-06",
    email: "hadilaabdelaoui@gmail.com",
    phone: "+216 58 914 598",
    location: "Sousse, Tunisia"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    apiKey: "AIzaSyC7glKN5j7RLxldUQlh4Vk9Lew2b5_n6ec",
    authDomain: "bywings.firebaseapp.com",
    projectId: "bywings",
    storageBucket: "bywings.appspot.com",
    messagingSenderId: "1028383440413",
    appId: "1:1028383440413:web:1618cef4334936716e10f4",
    measurementId: "G-Y2BDB7P3LV"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
