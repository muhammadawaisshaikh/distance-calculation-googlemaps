calculateDistance(lat1:number, lat2:number, long1:number, long2:number){
  let p = 0.017453292519943295;    // Math.PI / 180
  let c = Math.cos;
  let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
  let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
  return dis;
}
