(function(){
    'use strict';

    angular.module('delta.controller',[]);
    angular.module('delta.service',[]);
    angular.module('delta.factory',[]);
    angular.module('delta.directive',[]);
    angular.module('delta.filter',[]);

    //declaração do module principal
    angular.module('delta',[
        'ngMessages',
        'toastr',
        'ui.grid',
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad',
        'delta.controller',
        'delta.service',
        'delta.directive',
        'delta.factory',
        'delta.filter'
    ]);
})();