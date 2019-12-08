function busStops(stops) {
    return stops.reduce((total, current) => {
        return total + current[0] - current[1];
    }, 0)
}

console.log(busStops([[10,0],[3,5],[5,8]]));