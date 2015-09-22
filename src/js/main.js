var viewModel = {
    locations: [{
        breakName: "Pipeline",
        place: "Oahu, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Reef",
        waveSize: "4-25 ft (1.2-7.6 m)",
        bestTime: "November - February",
        hazards: "Extremely powerful, heavily crowded",
        bestSwell: "W-NW",
        bestWind: "E",
        bestTide: "Mid",
        waveType: "Left and right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Sunset Beach",
        place: "Oahu, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Reef",
        waveSize: "4-15+ ft (1.2-4.6+ m)",
        bestTime: "November - February",
        hazards: "Powerful currents, crowds",
        bestSwell: "W",
        bestWind: "E",
        bestTide: "Mid",
        waveType: "Right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Waimea Bay",
        place: "Oahu, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Reef",
        waveSize: "4-30+ ft (1.8-9.1+ m)",
        bestTime: "November - February",
        hazards: "Extremely powerful, heavily crowded",
        bestSwell: "NW-N",
        bestWind: "E",
        bestTide: "All",
        waveType: "Right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Turtle Bay",
        place: "Oahu, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "All levels",
        breakType: "Reef",
        waveSize: "3-6 ft (.9-1.8 m)",
        bestTime: "November - February",
        hazards: "Rocks",
        bestSwell: "NW-N",
        bestWind: "SE",
        bestTide: "Mid",
        waveType: "Left and right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Rocky Point",
        place: "Oahu, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Reef",
        waveSize: "3-8 ft (.9-2.4 m)",
        bestTime: "November - February",
        hazards: "Crowds, rocks",
        bestSwell: "NW",
        bestWind: "E",
        bestTide: "All",
        waveType: "Left and right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Cannons",
        place: "Kauai, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Reef",
        waveSize: "4-15 ft (1.2-4.6+ m)",
        bestTime: "November - February",
        hazards: "Currents, sharks, long paddle",
        bestSwell: "W-NW",
        bestWind: "SE",
        bestTide: "All",
        waveType: "Left",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Tunnels",
        place: "Kauai, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Reef",
        waveSize: "4-20+ ft (1.2-6.1+ m)",
        bestTime: "November - February",
        hazards: "Currents, sharks",
        bestSwell: "W-NW",
        bestWind: "SE",
        bestTide: "All",
        waveType: "Right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Hanalei",
        place: "Kauai, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Point",
        waveSize: "4-20+ ft (1.2-6.1+ m)",
        bestTime: "November - February",
        hazards: "Rocks, crowds",
        bestSwell: "N",
        bestWind: "SE",
        bestTide: "Mid",
        waveType: "Right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Anahola",
        place: "Kauai, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Point",
        waveSize: "4-15+ ft (1.2-4.6+ m)",
        bestTime: "November - February",
        hazards: "Shallow reef on the  point",
        bestSwell: "NW-NE",
        bestWind: "S",
        bestTide: "Mid - high",
        waveType: "Right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Haleiwa",
        place: "Oahu, Hawaii",
        wetsuit: "Boardshorts",
        skillLevel: "Advanced",
        breakType: "Reef",
        waveSize: "6-20+ ft (1.8-6.1+ m)",
        bestTime: "November - February",
        hazards: "Crowds, currents",
        bestSwell: "W-NW",
        bestWind: "E",
        bestTide: "All",
        waveType: "Right",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }]
};

viewModel.Query = ko.observable("");

viewModel.locationList = ko.computed(function() {
    var q = viewModel.Query();
    return viewModel.locations.filter(function(e) {
        return e.breakName.toLowerCase().indexOf(q.toLowerCase()) >= 0
    })
});

ko.applyBindings(viewModel);