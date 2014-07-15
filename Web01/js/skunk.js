	function viewModel () {
		var self = this;
		self.teams = ko.observableArray([]);
		self.teamToAdd = ko.observable("");
		self.selectedTeams = ko.observableArray();
		self.addTeam = function () {
			if(self.teamToAdd() != ""){
				self.teams.push({favTeam: self.teamToAdd()});
				self.teamToAdd("");
			}
		};
		self.removeTeams = function () {
			self.teams.removeAll("self.selectedTeams()");
			self.selectedTeams.removeAll();
		};
	}
	ko.applyBindings(new viewModel());	