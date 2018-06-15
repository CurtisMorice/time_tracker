TimeApp.controller('HomeController', ['TimeService', 'NgTableParams', function(NgTableParams, TimeService) {
    console.log(`in home.controller`);
    let self = this;
    let data = [{ project_id: 1, date: '1/12/2018', hours: 3 } /*,*/ ];
    self.tableParams = new NgTableParams({ count: data.length }, { dataset: data, counts: [] });

}]);