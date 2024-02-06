import { writable } from 'svelte/store';

export const APP_STATUS = {
          INIT: 0,
          LOADING: 1,
          SUCCESS: 3,
          ERROR: -1,
};

export const appStatus = writable(APP_STATUS.INIT);