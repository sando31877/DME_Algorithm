// DME algorithm implementation in JavaScript  
 
// Function to calculate the distance between two points 
function calculateDistance(lat1, lon1, lat2, lon2) { 
  var R = 6371; // Earth's radius in kilometers 
  var dLat = toRad(lat2 - lat1); 
  var dLon = toRad(lon2 - lon1); 
  var lat1 = toRad(lat1); 
  var lat2 = toRad(lat2);  
 
  var a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + 
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var distance = R * c; // Distance in kilometers 
  return distance; 
}  
 
// Function to convert degrees to radians 
function toRad(degrees) { 
  return (degrees * Math.PI) / 180; 
}  
 
// Function to calculate the DME distance 
function calculateDMEDistance(latitude, longitude, bearing, dmeDistance) { 
  var lat2 = Math.asin( 
    Math.sin(latitude) * Math.cos(dmeDistance / 3440) + 
      Math.cos(latitude) * Math.sin(dmeDistance / 3440) * Math.cos(bearing) 
  ); 
  var lon2 = 
    longitude + 
    Math.atan2( 
      Math.sin(bearing) * Math.sin(dmeDistance / 3440) * Math.cos(latitude), 
      Math.cos(dmeDistance / 3440) - Math.sin(latitude) * Math.sin(lat2) 
    );  
 
  // Convert latitude and longitude from radians to degrees 
  lat2 = toDegrees(lat2); 
  lon2 = toDegrees(lon2);  
 
  // Calculate the distance between the two points 
  var distance = calculateDistance(latitude, longitude, lat2, lon2);  
 
  return distance; 
}  
 
// Function to convert radians to degrees 
function toDegrees(radians) { 
  return (radians * 180) / Math.PI; 
} 
