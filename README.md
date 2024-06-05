# Basic Example for This Is Not A Drill! User Alerting service

<a href="https://this-is-not-a-drill.com"><img src="https://app.this-is-not-a-drill.com/ThisIsNotADrill1.png" width="250" height="250"></a>

This example shows how you can implement the This Is Not A Drill! (`TINAD`) SDK for any `node` application.

Install the SDK via:

``` javascript
npm i @this-is-not-a-drill/vanillajs-sdk
or
yarn add @this-is-not-a-drill/vanillajs-sdk
```

Then in your node application:

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

// Lastly, tell TINAD to start (or restart) with your configuration.
configureTinad(newConfig);
```

After this, you can always call `configureTinad({<new configuration>})` to make `TINAD` operate in a new way (e.g. inline notifications on certain pages).

You can read more in our <a href="https://docs.this-is-not-a-drill.com">documentation.</a>
