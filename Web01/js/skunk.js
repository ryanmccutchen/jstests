	function viewModel () {
		var self = this;
		self.teams = ko.observableArray([]);
		self.teamToAdd = ko.observable("");
		self.selectedTeams = ko.observableArray([]);
		self.addTeam = function () {
			if(self.teamToAdd() != ""){
				self.teams.push({
						favTeam: self.teamToAdd(), selected: ko.observable(false)
					}
				);
				self.teamToAdd("");
			}
		};
		self.removeTeams = function () {
			ko.utils.arrayForEach(self.teams(), function(team){

				if(team && team.selected() == true){
					self.selectedTeams.push(team);
				}
			});
			self.teams.removeAll(self.selectedTeams());
			self.selectedTeams([]);
		};
	}
	ko.applyBindings(new viewModel());	