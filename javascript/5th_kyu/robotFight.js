function fight(robot1, robot2, tactics) {
    let t = 0;
    const turns = Math.max(robot1.tactics.length, robot2.tactics.length);
    while (t < turns) {
        if (robot1.speed >= robot2.speed) { // robot1 attacks first 
            // robot1's attack
            if (robot1.tactics[t]) {
                robot2.health -= tactics[robot1.tactics[t]];
                if (robot2.health < 1) {
                    return `${robot1.name} has won the fight.`;
                }
            }
            // robot2's attack
            if (robot2.tactics[t]) {
                robot1.health -= tactics[robot2.tactics[t]];
                if (robot1.health < 1) {
                    return `${robot2.name} has won the fight.`;
                }
            }
        } else { // robot2 attacks first
            // robot2's attack
            if (robot2.tactics[t]) {
                robot1.health -= tactics[robot2.tactics[t]];
                if (robot1.health < 1) {
                    return `${robot2.name} has won the fight.`;
                }
            }
            // robot1's attack
            if (robot1.tactics[t]) {
                robot2.health -= tactics[robot1.tactics[t]];
                if (robot2.health < 1) {
                    return `${robot1.name} has won the fight.`;
                }
            }
        }
        t++;
    }
    // when both robots no longer have tactics
    if (robot1.health > robot2.health) {
        return `${robot1.name} has won the fight.`;
    } else if (robot2.health > robot1.health) {
        return `${robot2.name} has won the fight.`;
    } else {
        return 'The fight was a draw.';
    }
}

const robot1 = {"name": "Rocky", "health": 100, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] };
const robot2 = {"name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile"]};
const tactics = {"punch": 20, "laser": 30, "missile": 35};
console.log(fight(robot1, robot2, tactics)); // "Missile Bob has won the fight.");
