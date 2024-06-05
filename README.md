# Basic Example for This Is Not A Drill! User Alerting service

<a href="https://this-is-not-a-drill.com"><img src="/ThisIsNotADrill_cutout.png" width="250" height="250"></a>

This example shows how you can implement the TINAD SDK for any node application.

You can simply do :

``` javascript
npm i @this-is-not-a-drill/vanillajs-sdk
```

or

``` javascript
yarn add @this-is-not-a-drill/vanillajs-sdk
```

and then:

``` javascript
import { 
  configureTinad, 
  generateDefaultConfiguration, 
  getCurrentConfiguration, 
  SDKConfiguration
} from '@this-is-not-a-drill/vanillajs-sdk';

const newConfig = generateDefaultConfiguration();   // Generate some sensible default TINAD configuration values.
newConfig.api.endpoint = environment.API_ENDPOINT;  // see 'environment.ts' in this directory.
newConfig.api.key = environment.API_KEY;            // see 'environment.ts' in this directory.
newConfig.api.displayMode = 'toast';                // set to whatever notification display mode you prefer: toast, modal, banner, inline.
configureTinad(newConfig);                          // tell TINAD to get going with your settings.
```

After this point, you can always call `configureTinad(<new config>)` to make TINAD operate in a new way (e.g. inline notifications on certain pages).

You can read more in our documentation: https://docs.this-is-not-a-drill.com

