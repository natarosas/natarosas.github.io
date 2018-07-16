var work = { 
	"jobs": [
	{
        "employer":  "Teleperformance",
        "title": "Agent",
        "location": "Bogotá, Colombia",
        "dates": "Jun/2017 - Currently",
        "description": "Monitoring each messaging service to verify its effectiveness and quality." + "<br>" + 
        "Management and coordination of motorized staff." + "<br>" + "Customer service on telephone at night shift." + "<br>" + 
        "Scheduling and assignment of delivery routes."
      },
      {
        "employer":  "Mensajeros Urbanos",
        "title": "Operations Manager",
        "location": "Bogotá, Colombia",
        "dates": "Oct/2015 - Apr/2016",
        "description": "Monitoring each messaging service to verify its effectiveness and quality." + "<br>" + 
        "Management and coordination of motorized staff." + "<br>" + "Customer service on telephone at night shift." + "<br>" + 
        "Scheduling and assignment of delivery routes."
      },
	  {
	  	"employer":  "University of los Andes",
		"title": "Tech Asistant",
		"location": "Bogotá, Colombia",
		"dates": "Ago/2015 - Oct/2015",
		"description": "Advice on technical processes in computer rooms." + "<br>" + "Attention and supervision of students in computer rooms."
	  }
	]
}

work.display = function()  {

	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
    	$(".work-entry:last").append(formattedEmployerTitle);
    	$(".work-entry:last").append(formattedLocation);
    	$(".work-entry:last").append(formattedDates);
    	$(".work-entry:last").append(formattedDescription);
	}
}

work.display();
