(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ekim138-module10.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
