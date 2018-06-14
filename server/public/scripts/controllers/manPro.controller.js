TimeApp.controller('ManageController', ['TimeService', function(TimeService) {


    let self = this;
    class Projects {
        constructor(projects) {
            this.projects = projects;
        }
    }
    self.addProject = function() {
        let newProjects = new Projects(self.projects);
        console.log(`in addProjects in manPro controller`, newProjects);
        TimeService.postTime(newProjects).then(function(result) {
            console.log(`successful addProject from manPro controller`, TimeService.postTime());
        }).catch((err) => {
            console.log(`Error in addProject on manPro.controller`, err);
        });
    };
    self.displayProjects = function() {
        console.log(`in displayProjects in manPro.controller`);
        TimeService.getTime('projects').then(function() {
            self.getProjectsArray = TimeService.TimeArray;
        }).catch(function(err) {
            console.log(`error in displayProjects in manPro.controller`);
        });
    };

    self.updateProjects = function() {
        console.log(`in updateProject on manPro.controller`);
    };

    self.deleteProjects = function() {
        TimeService.deleteTime(projects.id).then(function() {
            self.displayProjects();
        }).catch(function(err) {
            console.log(`error in deleteProjects in manPro.controller`, err);
        });
    };

}]);