TimeApp.controller('AddController', ['TimeService', 'NgTableParams', function(TimeService, NgTableParams) {

    let self = this;
    let data = [{ project_id: 1, date: '1/12/2018', hours: 3 }];
    self.tableParams = new NgTableParams({ dataset: data }, { count: data.length, counts: [] });
    class Entries {
        constructor(entry, date, hours, project_id) {
            this.entry = entry;
            this.date = date;
            this.hours = hours;
            this.project_id = project_id;
        }
    }
    self.addEntries = function() {
        let newEntries = new Entries(self.entryIn, self.dateIn, self.hoursIn, self.projectIn);
        console.log(`in addEntries in timeEntry controller`, newEntries);
        TimeService.postTime('entries', newEntries).then(function(result) {
            console.log(`successful addEntries from timeEntry controller`);
            self.clearInputs();
            self.displayEntries();

        }).catch((err) => {
            console.log(`Error in addEntries on timeEntry.controller`, err);
        });
    };
    self.displayEntries = function() {
        console.log(`in displayEntries in timeEntry.controller`);
        TimeService.get('entries').then(function() {
            self.getEntriesArray = TimeService.TimeArray;

        }).catch(function(err) {
            console.log(`error in displayEntries in timeEntry.controller`);
        });
    };

    self.clearInputs = function() {
        self.entryIn = "";
        self.dateIn = "";
        self.hoursIn = "";
        self.projectIn = "";

    };

    self.displayProjects = function() {
        console.log(`in displayEntries in timeEntry.controller`);
        TimeService.get('projects').then(function() {
            self.dropDown = TimeService.TimeArray;

        }).catch(function(err) {
            console.log(`error in displayEntries in timeEntry.controller`);
        });
    };
    self.updateEntries = function() {
        console.log(`in updateEntries on timeEntry.controller`);
        self.updatedEntry = req.params;
        TimeService.updateTime('entries', updatedEntry).then(function(response) {
            console.log(`updated Entry in updateEntries in timeEntry.controller`, updatedEntry);

        });
    };

    self.deleteEntries = function(click) {

        if (confirm('You gonna Kill Me?')) {
            TimeService.deleteTime('entries', click.entry.id)
                .then(function() {
                    self.displayEntries();
                }).catch(function(err) {
                    console.log(`error in deleteEntries in timeEntry.controller`, err);
                });
        }
    };
    self.displayEntries();
    self.displayProjects();

}]);