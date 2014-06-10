	  		var output="<ul>";
			$.getJSON(‘CHTeamsContent.json’, function(voTopNav) { $(data.users).each(function() {
			      	output+="<li><a href='" + CHTeamsContent.voTopNav[i].href + "'>" + CHTeamsContent.voTopNav[i].name + "</a> | </li>";
				});

			output+="</ul>";
			$("#NavPlaceholder").append(output);
			});