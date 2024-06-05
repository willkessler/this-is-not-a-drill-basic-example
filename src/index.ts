import { 
  configureTinad, 
  generateDefaultConfiguration, 
  getCurrentConfiguration, 
  SDKConfiguration
} from '@this-is-not-a-drill/vanillajs-sdk';

import environment from './environment';

// Here is an example of an SDKConfiguration object with some basic defaults set.
// Depending on the displayMode
// you choose, you will actually only need the property that's relevant to it, e.g.
// if you choose displayMode: 'toast', then you actually only need to include the
// 'toast' property. 
// You will also want to add a userId (if you want to test a specific user id; 
// if you don't provide one, the SDK will autogenerate one) and add your API key in the
// api block.
/*
{
    api: {
      displayMode : 'toast',
      userId: undefined, // will be set later by either your code or it will be set automatically by the SDK
      key: '', // set your API key in this portion of the SDKConfiguration object
      endpoint: 'https://api.this-is-not-a-drill.com',
      environments: [ 'Development' ],
      domains: [],
    },
    toast: {
      position: 'bottom-end',
      duration: 5000,
    },
    modal: {
      confirmButtonLabel: 'OK',
      show: {
        confirm: true,
        dismiss: true,
      },
    },
    inline: {
      target: {
        outer: 'tinad-inline-container',
        content: 'tinad-inline-content',
        confirm: 'tinad-inline-confirm',
        dismiss: 'tinad-inline-dismiss',
      },
      show: {
        confirm: true,
        dismiss: true,
      },
    },
    banner: {
      duration: 5000,
      target: {
        useDefaults: true,
      },
      show: {
        dismiss: true,
      },
    },
  };
*/

console.log('Configurating TINAD SDK...');

const newConfig = generateDefaultConfiguration();
newConfig.api.endpoint = environment.API_ENDPOINT;
newConfig.api.key = environment.API_KEY;
newConfig.api.displayMode = 'toast';
configureTinad(newConfig);

// const currentConfig = getCurrentConfiguration();
// console.log(`Current TINAD config: ${JSON.stringify(currentConfig,null,2)}`);

console.log('TINAD configuration complete.');

const resetButton = document.getElementById('reset-notifications');

// When you reconfigure TINAD with the same configuration a second
// time, this has the effect of resetting the views for the current
// userId (as well as stopping any notification display in progress).

resetButton.onclick = function() {
  console.log ('Resetting views'); 
  const currentConfig = getCurrentConfiguration();
  configureTinad(currentConfig);
};
