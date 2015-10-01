# angular-silent-fail-helper
Expose function to help diagnose when angularjs fails sliently because of missing dependency (tested with 1.4)
Probably related to: https://github.com/angular/angular.js/issues/1779

Until the issue is fixed, this helper can save you a lot of time by identifying missing dependencies.

## how to use 
Include this script right after angularjs script, before the other modules initialization. The scripts replaces angular.module 
original function to keep track of modules behing loaded, before calling the original angular.module function.

When your app won't load and you are not recieving an error, open the browser console and call ```__angularCheckMissingDependencies()```. 
If the silent fail was related to a missing dependency, it will be listed in the console.
