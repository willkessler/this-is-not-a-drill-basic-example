# Basic Example for This Is Not A Drill! User Alerting service

<a href="https://this-is-not-a-drill.com"><img src="https://app.this-is-not-a-drill.com/ThisIsNotADrill1.png" width="250" height="250"></a>

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

// Generate some sensible default TINAD configuration values.
const newConfig = generateDefaultConfiguration();
// See 'environment.ts' in this directory.
newConfig.api.endpoint = environment.API_ENDPOINT;
// see 'environment.ts' in this directory.
newConfig.api.key = environment.API_KEY;
// Set this to whatever notification display mode you prefer:
// toast, modal, banner, inline.
newConfig.api.displayMode = 'toast';
// Finally, tell TINAD to start (over) with your settings.
configureTinad(newConfig);
```

After this point, you can always call `configureTinad({<new configuration>})` to make TINAD operate in a new way (e.g. inline notifications on certain pages).

You can read more in our <a href="https://docs.this-is-not-a-drill.com">documentation.</a>
