AppViewModel = {

    surfSpot : [
        {
          breakName: 'Sunset Beach',
          location: 'Oahu, Hawaii',
          lat: 21.679011,
          lng: -158.041277,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Pipeline/Backdoor',
          location: 'Oahu, Hawaii',
          lat: 21.665244,
          lng: -158.053408,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Cannons',
          location: 'Kauai, Hawaii',
          lat: 22.224744,
          lng: -159.566712,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Tunnels',
          location: 'Kauai, Hawaii',
          lat: 22.224744,
          lng: -159.566712,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Anahola',
          location: 'Kauai, Hawaii',
          lat: 22.148311,
          lng: -159.300331,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Hanalei',
          location: 'Kauai, Hawaii',
          lat: 22.218315,
          lng: -159.502265,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Haleiwa',
          location: 'Oahu, Hawaii',
          lat: 21.596416,
          lng: -158.109121,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Waimea Bay',
          location: 'Oahu, Hawaii',
          lat: 21.642987,
          lng: -158.066743,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Rocky Point',
          location: 'Oahu, Hawaii',
          lat: 21.670862,
          lng: -158.049157,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Turtle Bay',
          location: 'Oahu, Hawaii',
          lat: 21.708047,
          lng: -158.002275,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Halawa Bay',
          location: 'Molokai, Hawaii',
          lat: 21.159132,
          lng: -156.735906,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Honolua Bay',
          location: 'Maui, Hawaii',
          lat: 21.024350,
          lng: -156.641890,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Jaws/Peahi',
          location: 'Maui, Hawaii',
          lat: 20.946401,
          lng: -156.297389,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'The Cove',
          location: 'Maui, Hawaii',
          lat: 20.728298,
          lng: -156.452353,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Maalaea',
          location: 'Maui, Hawaii',
          lat: 20.791860,
          lng: -156.508960,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Lahaina',
          location: 'Maui, Hawaii',
          lat: 20.869326,
          lng: -156.679025,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Lymans/Banyans',
          location: 'Big Island, Hawaii',
          lat: 19.606206,
          lng: -155.978016,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Pinetrees',
          location: 'Big Island, Hawaii',
          lat: 19.695131,
          lng: -156.045926,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Kiholo Bay',
          location: 'Big Island, Hawaii',
          lat: 19.854416,
          lng: -155.931340,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Honolii',
          location: 'Big Island, Hawaii',
          lat: 19.756298,
          lng: -155.089960,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        }
    ]
};

AppViewModel.Query = ko.observable("");

AppViewModel.locationGrid = ko.computed(function() {
      var q = AppViewModel.Query();
      return AppViewModel.surfSpot.filter(function(e) {
            return e.breakName.toLowerCase().indexOf(q.toLowerCase()) >= 0
            }
        )
    }
)


function initMap() {

    /* Create an empty array that will be filled with arrays representing each break's name and coordinates e.g. [[break name, lat, lng],[break name, lat, lng], etc.]*/
    var arrayOfBreakLocationArrays = [];

    // Loop through the surfspot array from model
    for(var i = 0; i < AppViewModel.surfSpot.length; i++) {

        // Filter out coordinates and break name info into arrayOfBreakLocationArrays
        arrayOfBreakLocationArrays.push([AppViewModel.surfSpot[i].breakName, AppViewModel.surfSpot[i].lat, AppViewModel.surfSpot[i].lng]);
    }

    // Create a new Google map centered on the Hawaiian Islands
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 20.67, lng: -157.505},
        zoom: 6
    });

    /* Loop through arrayOfBreakLocationArrays and filter out the coordinates
    & break name for each break, then extract the array they're in and
    save it in a variable. Save the break's coordinates and name
    in their own variables for easy referencing*/
    for(var i = 0; i < arrayOfBreakLocationArrays.length; i++) {

        // Create a variable to hold each individual array extracted from
        // arrayOfBreakLocationArrays e.g. [break name, lat, lng]
        var breakLocationArray = arrayOfBreakLocationArrays[i];

        // Create a variable to hold each break's coordinates
        var breakCoordinates = ({lat: breakLocationArray[1], lng: breakLocationArray[2]});

        // Create a variable to hold the name of the break
        var waveName = breakLocationArray[0];

        // Create a marker and set its position.
        var marker = new google.maps.Marker({

            // Set position using the newly created variable
            position: breakCoordinates,
            map: map,

            // Set the title for the break marker as name of the wave/location
            // of the break
            title: waveName + ' ' + ' (Click to zoom)'
        });

        /*Create an infoWindow displaying the break's name, which appears upon
        clicking the marker*/
        /* This is implemented using an event listener and a closure to ensure
        each infoWindow (and its content) is assigned to the appropriate marker
        . Without the closure the content for the infoWindow would be the last
        iterated location in the loop. The closure saves the environment
        attached to the inner function at the time of iteration, so when it's
        later clicked, it references the saved infoWindow content for that
        specific iteration*/
        google.maps.event.addListener(marker, 'click', (function(marker, waveName) {

            /* Create an inner function what will at the time of iteration save
            the individual break's name (waveName) within the infoWindow and
            attach it to the relevant marker*/
            return function() {

                // Create an info window that displays the break's name
                var infoWindow = new google.maps.InfoWindow({
                content: waveName
                })

                // Assign the info window the appropriate marker
                infoWindow.open(map, marker);

                // Zoom  in on location upon clicking the marker
                map.setZoom(16);
                map.setCenter(marker.getPosition());
            }
        // Pass the relevant marker and break name (waveName) for the current
        // iteration as an argument into the function
        })(marker, waveName));
    }
}


ko.applyBindings(AppViewModel);