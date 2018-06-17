TimeApp.service('TimeService', function($http) {


    console.log(`in TimeService`);

    let self = this;
    let TimeArray = [];

    self.get = function(url) {
        console.log(`in GET time service`, url);
        return $http({
            method: 'GET',
            url: `/${url}`
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            self.TimeArray = response.data;
        }).catch((error) => {
            console.log(`error getting all timeStuff:`, error);
        });

    };


    self.postTime = function(url, data) {
        console.log(`in postTime`, data);

        return $http({
            method: 'POST',
            url: `/${url}`,
            data: data
        }).then((response) => {
            console.log('back from POST with:', response);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    }; // end of Power post




    // self.updateTime = function(url) {

    //     return $http({
    //         method: 'PUT',
    //         url: `/${url}`,
    //         data: self.req.params
    //     }).then((response) => {
    //         console.log('back from POST with:', req.params);
    //     }).catch((error) => {
    //         console.log('back from POST with:', error);
    //     });
    // };

    self.deleteTime = function(url, entry) {
        console.log('Delete!');
        console.log(entry);

        return $http({
            method: 'DELETE',
            url: `/${url}/${entry}`,
        }).then((response) => {
            self.get();

        }).catch((error) => {
            console.log('Error from DELETE', error);

        });
    };

});