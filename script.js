mapboxgl.accessToken = 'pk.eyJ1IjoiYW1leWoyOTA1IiwiYSI6ImNrbTU3Y2ozeTBiam0yb3FiaTNiN3podzgifQ.S9iUYp20Lybp_i-YmO3sIQ';


navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {
    enableHighAccuracy:true

})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude,position.coords.latitude ])

}

function errorLocation(){
    setupMap([-2.23, 43.78])

}


function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });

      var nav = new mapboxgl.NavigationControl();
      map.addControl(nav)

      var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiYW1leWoyOTA1IiwiYSI6ImNrbTVhNnZ2MjBjbmgyb2xwZTA2b3pybWgifQ.KUSUL0oUAtV12vhMhFo9pA',
        
      });
      
      
      map.addControl(directions, 'top-left');

}

