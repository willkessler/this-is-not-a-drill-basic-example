# Basic Example : This Is Not A Drill! User Alerting Service

<a href="https://this-is-not-a-drill.com"><img src="https://app.this-is-not-a-drill.com/ThisIsNotADrill1.png" width="250" height="250"></a>

**This is Not A Drill!** is a service with which you can popup
important service messages to grab your users' attention __in-app__.

Common use cases are :

* website outages / problems
* scheduled maintenance
* important updates to your user flow
* changes to your service offerings
* legal changes/updates, e.g. regarding privacy policy, SLA, or TOS

## What this demo is for

This demo shows how you can implement This Is Not A Drill! (`TINAD`) SDK in a `node` application.

1. Install the SDK via:

``` javascript
npm i @this-is-not-a-drill/vanillajs-sdk
or
yarn add @this-is-not-a-drill/vanillajs-sdk
```

2. Then, in your application, import and configure `TINAD`:

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

After this, you can always call `configureTinad({<new
configuration>})` to make `TINAD` operate in a new way (e.g. inline
notifications on certain pages).

You can read more in our <a
href="https://docs.this-is-not-a-drill.com">documentation.</a>
