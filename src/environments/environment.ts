// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDIleNvpenq36JahoMpRKpOy_a-P7tbi9I",
    authDomain: "shooping-9ea2f.firebaseapp.com",
    databaseURL: "https://shooping-9ea2f.firebaseio.com",
    projectId: "shooping-9ea2f",
    storageBucket: "shooping-9ea2f.appspot.com",
    messagingSenderId: "1002842492051"
  },


  apiBaseUrl: 'http://localhost:3000/api'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
