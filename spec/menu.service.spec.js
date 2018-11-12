describe('MenuService', function() {

    var $httpBackend;
    var menuService;
    var apiPath;
    var loadingHttpInterceptor;
    var item = {
        name: "Orange Chicken",
        price_large: 9.75,
        short_name: 'L1',
        description: 'chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat' +
            ' by request: for pint $1 extra, for large $2 extra'
    };

    beforeEach(function() {
        module('common');

        inject(function($injector) {
            menuService = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            apiPath = $injector.get('ApiPath');
            loadingHttpInterceptor = $injector.get('loadingHttpInterceptor');
        });
    });

    it('should return menu item', function() {
        $httpBackend.whenGET(apiPath + '/menu_items/L1.json').respond(item);
        menuService.getMenuItem('L1').then(function(response) {
            expect(response).toEqual(item);
        });
        $httpBackend.flush();
    });

    it('should return error/null object', function() {
        $httpBackend.whenGET(apiPath + '/menu_items/L35468.json').respond(null);
        menuService.getMenuItem('L35468').then(function(response) {
            expect(response).toBeNull();
        });
        $httpBackend.flush();
    });

});
