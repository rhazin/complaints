// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gapiClient:
    '831953009356-i63ck97la40u6140taahoa2tk9n2091u.apps.googleusercontent.com',
  gapiKey: 'AIzaSyCVdmEKP9qizXEqlQ2AFfdZkRwC95F4f44',
  discoveryDoc: 'https://sheets.googleapis.com/$discovery/rest?version=v4',
  gapiScopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
  spreadSheetId: '1QKWnUq_fZpdRZAYBNjkNDzyuUCtQqR0s7eDIF7LJ1GA',
  complaintsSchema: 'Complaints',
  apiUrl: 'http://localhost:8888/.netlify/functions',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
