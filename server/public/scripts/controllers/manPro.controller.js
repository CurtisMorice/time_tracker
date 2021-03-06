TimeApp.controller('ManageController', ['TimeService', 'NgTableParams', function(TimeService, NgTableParams) {


    let self = this;
    class Projects {
        constructor(project) {
            this.project = project;

        }
    }

    let data = [{ project: 'Fix the Roof' }];
    self.tableParams = new NgTableParams({ dataset: data }, { count: data.length, counts: [] });


    self.addProject = function() {
        let newProjects = new Projects(self.project);
        console.log(`in addProjects in manPro controller`, newProjects);
        TimeService.postTime('projects', newProjects).then(function(result) {
            self.clearInputs();
            self.displayProjects();
            console.log(`successful addProject from manPro controller`, result);

        });
    };

    self.clearInputs = function() {
        self.project = "";
    };




    self.displayProjects = function() {
        console.log(`in displayProjects in manPro.controller`);
        TimeService.get('projects').then(function() {
            self.projects = TimeService.TimeArray;
        }).catch(function(err) {
            console.log(`error in displayProjects in manPro.controller`);
        });
    };

    self.updateProjects = function() {
        console.log(`in updateProject on manPro.controller`);
    };

    self.deleteProjects = function(click) {
        console.log('in deleteProjects', click.project.id);
        if (confirm('You gonna Kill Me?')) {
            TimeService.deleteTime('projects', click.project.id)
                .then(function() {
                    self.displayProjects();
                }).catch(function(err) {
                    console.log(`error in deleteProjects in manPro.controller`, err);
                });
        }
    };
    self.displayProjects();
}]);