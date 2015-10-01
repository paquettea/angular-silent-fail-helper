(function () {
    var angularModule = angular.module;
    var requestedDependencies = ['ng'];
    var requestedModule = [];

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

    angular.module = function (moduleName, depedencies) {

        if (angular.isDefined(depedencies)) {
            angular.extend(requestedDependencies, depedencies);
        }

        requestedModule.push(moduleName);

        //call to standard angular function
        return angularModule.apply(angular, arguments);
    };
}());

