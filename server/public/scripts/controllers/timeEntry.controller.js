TimeApp.controller('AddController', ['TimeService', 'NgTableParams', function(TimeService, NgTableParams) {

    let self = this;
    var data = [{ project_id: 1, date: '1/12/2018', hours: 3 }];
    self.tableParams = new NgTableParams({ count: data.length }, { dataset: data, counts: [] });
    class Entries {
        constructor(entries) {
            this.entries = entries;
        }
    }
    self.addEntries = function() {
        let newEntries = new Entries(self.entries);
        console.log(`in addEntries in manPro controller`, newEntries);
        TimeService.postTime(newEntries).then(function(result) {
            console.log(`successful addEntries from manPro controller`, TimeService.postTime());
        }).catch((err) => {
            console.log(`Error in addEntries on manPro.controller`, err);
        });
    };
    self.displayEntries = function() {
        console.log(`in displayEntries in manPro.controller`);
        TimeService.getTime('Entries').then(function() {
            self.getEntriesArray = TimeService.TimeArray;
        }).catch(function(err) {
            console.log(`error in displayEntries in manPro.controller`);
        });
    };

    self.updateEntries = function() {
        console.log(`in updateEntries on manPro.controller`);
        self.updatedEntry = req.params;
        TimeService.updateTime(updatedEntry).then(function(response) {
            console.log(`updated Entry in updateEntries in timeEntry.controller`, updatedEntry);

        });
    };

    self.deleteEntries = function() {
        TimeService.deleteTime(entries.id)
            .then(function() {
                self.displayEntries();
            }).catch(function(err) {
                console.log(`error in deleteEntries in manPro.controller`, err);
            });
    };
    self.displayEntries();
}]);