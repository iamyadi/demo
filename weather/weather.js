    navigator.geolocation.getCurrentPosition(function(position) {
        $.get('https://api.wunderground.com/api/686a817dcd0a4281/geolookup/conditions/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json',test);

        function test(data) {
            alert(JSON.stringify(data));

            $("#location").html(data.location.city + ', ' + data.location.country_name);
            $("#temperature").html(data.current_observation.temp_c);


        }

    });

