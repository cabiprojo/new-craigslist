document.addEventListener("DOMContentLoaded", function() {

    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "b074175caee3fe8a",
        center: { lat: 37.0902, lng: -95.7129 }, 
            zoom: 3.5,
        });
        
        const cities = [
            "New York", "Los Angeles", "Chicago", "Dallas", "Houston", "Washington DC",
            "St. Louis", "San Francisco", "Philadelphia", "Miami", "Atlanta", "Boston",
            "Phoenix", "Seattle", "Minneapolis", "Detroit", "Denver", "Baltimore",
            "Charlotte", "Orlando", "Portland", "San Antonio", "San Diego", "Tampa",
            "Kansas City", "Cleveland", "Las Vegas", "Cincinnati", "Indianapolis",
            "Raleigh", "Nashville", "Austin", "Pittsburgh", "Milwaukee", "New Orleans",
            "Hartford", "Salt Lake City", "San Jose", "Columbus", "San Bernardino",
            "Jacksonville", "Memphis", "Buffalo", "Louisville", "Richmond", "Oklahoma City",
            "Birmingham, Alabama", "Rochester", "El Paso", "Omaha", "Albuquerque", "Tucson",
            "Honolulu", "Tulsa", "Fresno", "Wichita", "Syracuse", "Knoxville", "Dayton",
            "Providence", "Greenville", "Chattanooga", "Charleston", "Little Rock",
            "Columbia, Missouri", "Des Moines", "Boise", "Jackson", "Sioux Falls",
            "Portland (ME)", "Baton Rouge", "Montgomery", "Juneau", "Helena", "Cheyenne",
            "Spokane", "Fargo (ND)", "Champaign", "Charleston", "Lexington", "Jackson (MS)","Shreveport",
            "Lubbock", "Sacramento", "Springfield (MO)", "Springfield (IL)", "Green Bay", "Anchorage",
            "Toronto","Vancouver", "Montreal", "Calgary", "Winnipeg", "Ottawa", "Edmonton", "Regina"
        ];
        
    const geocoder = new google.maps.Geocoder();
    const heading = document.getElementById("map-text");
    const infoWindow = new google.maps.InfoWindow();

    cities.forEach((city) => {
        geocoder.geocode({ address: city }, (results, status) => {
            
        if (status === "OK" && results.length > 0) {
            const lat = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();

            const marker= new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: city,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
            },
            
            });
            marker.addListener("click", () => {
                infoWindow.setContent(city);
                infoWindow.open(map, marker);
                heading.textContent = city;
                heading.style.color = "black";

                const infoWindowContent = infoWindow.getContent();

            });
        } else {
            console.log(`Error geocoding ${city}: ${status}`);
        }

        
            });
        });

    }

  
    window.initMap = initMap;

    initMap();
});



window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var searchBar0 = document.querySelector('.search-bar0');
    var navbar =document.querySelector('.navbar');
    var logo =document.querySelector('.logo');
    var searchBar0results = document.querySelector('.navbar .results0')

if (scrollPosition > 350) {
    searchBar0.style.display='block';
    searchBar0.style.boxShadow = '0px 1px 5px 3px rgba(0, 0, 0, 0.15)';
    searchBar0results.style.display='block';
    navbar.classList.add('scrolled');
    logo.classList.add('scrolled');
} else {
    searchBar0.style.display='none';
    searchBar0results.style.display='none';
    navbar.classList.remove('scrolled');
    logo.classList.remove('scrolled');
}

});

var maxHeight = 0;

window.addEventListener('scroll', function() {
  var line = document.querySelector('.line');
  var dot = document.querySelector('.dot');
  var dotPosition = dot.getBoundingClientRect().top + window.pageYOffset;
  var windowHeight = window.innerHeight;

  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition > 300) {
    var lineHeight = scrollPosition - 285;
    if (maxHeight < lineHeight) {
      maxHeight = lineHeight;
      line.style.height = maxHeight + 'px';
    }
  }
});

window.addEventListener('scroll', function() {
  var box1995 = document.querySelector('.box-1995');
  var box1999 = document.querySelector('.box-1999');
  var box2006 = document.querySelector('.box-2006');
  var box2010 = document.querySelector('.box-2010');
  var boxPresent = document.querySelector('.box-present');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition >= 400) {
    box1995.classList.add('slide-in-left');
  }
  if (scrollPosition >= 600) {
    box1999.classList.add('slide-in-right');
  }
  if (scrollPosition >= 800) {
    box2006.classList.add('slide-in-left');
  }
  if (scrollPosition >= 1000) {
    box2010.classList.add('slide-in-right');
  }
  if (scrollPosition >= 1200) {
    boxPresent.classList.add('slide-in-left');
  }
});

window.addEventListener('scroll', function() {
  var dot = document.querySelector('.dot');
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  var dotOffset = windowHeight - 800; // Set the desired offset from the bottom of the screen

  if (scrollPosition >= dotOffset+160) {
    dot.style.position = 'absolute';
    dot.style.bottom = dotOffset + 'px';
  } else {
    dot.style.position = 'sticky';
    dot.style.bottom = '';
  }

});




document.addEventListener('DOMContentLoaded', function() {

    var joinModal = document.getElementById("join-modal");
    var signInModal = document.getElementById("sign-in-modal");
    
    // Get the link elements
    var joinLink = document.getElementById("join-link");
    var signInLink = document.getElementById("sign-in-link");
    
    // Get the close button elements
    var joinCloseBtn = document.getElementById("join-close-btn");
    var signInCloseBtn = document.getElementById("sign-in-close-btn");
    
    // Open the join modal when the join link is clicked
    joinLink.addEventListener("click", function(event) {
      event.preventDefault();
      joinModal.style.display = "block";
    });
    
    // Open the sign in modal when the sign in link is clicked
    signInLink.addEventListener("click", function(event) {
      event.preventDefault();
      signInModal.style.display = "block";
    });
    
    // Close the join modal when the close button is clicked
    joinCloseBtn.addEventListener("click", function() {
      joinModal.style.display = "none";
    });
    
    // Close the sign in modal when the close button is clicked
    signInCloseBtn.addEventListener("click", function() {
      signInModal.style.display = "none";
    });
    
    // Close the join modal when the user clicks outside the modal
    window.addEventListener("click", function(event) {
      if (event.target == joinModal) {
        joinModal.style.display = "none";
      }
    });
    
    // Close the sign in modal when the user clicks outside the modal
    window.addEventListener("click", function(event) {
      if (event.target == signInModal) {
        signInModal.style.display = "none";
      }
    });
    
});