(function () {
    var angularModule = angular.module;
    var requestedDependencies = [];
    var requestedModule = ['ng'];

    window.__angularCheckMissingDependencies = function () {
        var i;
        var message;

        for (i = 0; i < requestedDependencies.length; i++) {
            if (requestedModule.indexOf(requestedDependencies[i]) === -1) {
                message = 'Dependency not loaded: ' + requestedDependencies[i];
                if (angular.isDefined(console)) {
                    console.error(message);
                } else {
                    alert(message);
                }
            }
        }
    };

    window.__angularListModule = function () {
        console.log('initialized module', requestedModule);
        console.log('requested dependencies', requestedDependencies);
    };

    angular.module = function (moduleName, dependencies) {
        var i;

        if (angular.isDefined(dependencies)) {
            for (i = 0; i < dependencies.length; i++) {
                if (requestedDependencies.indexOf(dependencies[i]) === -1) {
                    requestedDependencies.push(dependencies[i]);
                }
            }
        }

        if (requestedModule.indexOf(moduleName) === -1) {
            requestedModule.push(moduleName);
        }


        //call to standard angular function
        return angularModule.apply(angular, arguments);
    };
}());
