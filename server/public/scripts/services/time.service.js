TimeApp.service('TimeService', function($http) {


    console.log(`in TimeService`);
    let self = this;
    let TimeArray = [];

    self.getTime = function(url) {
        console.log(`in GET super service`);
        return $http({
            method: 'GET',
            url: `/${url}`
        }).then((response) => {
            console.log(response);
            console.log(`${url}`);
            self.TimeArray = response.data;
        }).catch((error) => {
            console.log(`error getting all super:`, error);
        });

    };


    self.postTime = function(url) {

        return $http({
            method: 'POST',
            url: `/${url}`,
            data: self.newTime
        }).then((response) => {
            console.log('back from POST with:', response);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    }; // end of Power post




    self.updateTime = function(url) {

        return $http({
            method: 'PUT',
            url: `/${url}`,
            data: self.req.params
        }).then((response) => {
            console.log('back from POST with:', req.params);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    };

    self.deleteTime = function(url, TimeDelete) {
        console.log('Delete!');
        console.log(TimeDelete);
        if (confirm('You gonna Kill Me?')) {
            $http({
                method: 'DELETE',
                url: `/${url}/${TimeDelete}`
            }).then(function(response) {
                self.getSuper();

            }).catch(function(error) {
                console.log('Error from DELETE', error);

            })
        }

    }

});