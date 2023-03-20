
 
// 두 위도, 경도 사이의 거리 
function calculateDistance(lat1, lon1, lat2, lon2) { 
  var R = 6371; // 지구 반지름 
  var dLat = toRad(lat2 - lat1); 
  var dLon = toRad(lon2 - lon1); 
  var lat1 = toRad(lat1); 
  var lat2 = toRad(lat2);  
 
  var a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + 
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var distance = R * c; // 단위: km
  return distance; 
}  
 
// 도-> 라디안 변환
function toRad(degrees) { 
  return (degrees * Math.PI) / 180; 
}  
 
// DME 계산 
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
 
  // 위도, 경도 라디안으로 변환 
  lat2 = toDegrees(lat2); 
  lon2 = toDegrees(lon2);  
 
  // 두 점 거리 계산
  var distance = calculateDistance(latitude, longitude, lat2, lon2);  
 
  return distance; 
}  
 
// 라디안-> 도 변환
function toDegrees(radians) { 
  return (radians * 180) / Math.PI; 
} 
