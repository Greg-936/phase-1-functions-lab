// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
}
function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)* 264

}
function distanceTravelledInFeet(start,destination){
    return Math.abs(destination-start)*264
}
function calculatesFarePrice(start, destination){
    const feetTravel= distanceTravelledInFeet(start,destination)
    if (feetTravel <= 400) {
        return 0
    }else if(feetTravel> 400 && feetTravel < 2000){ 
        return ( feetTravel - 400)* 0.02}
    else if (feetTravel > 2000 && feetTravel <2500) {
        return 25
    }
else {
    return "cannot travel that far"
}
}
