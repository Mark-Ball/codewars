function queueTime(customers, n) {
    let time = 0;
    // create a variable representing the till being occupied
    // tills at t = 0 are all unoccupied, represent this with 0
    let tills = [];
    for (let i = 0; i < n; i++) {
        tills.push(0);
    };
    // loop through the customer list and assign to a till
    while (true) {
        // at the start of each loop, reduce all the numbers in tills by 1
        // assign customer to a till, then remove customer from the list
        // if there is a free till, send the next customer
        for (let i = 0; i < tills.length; i++) {
            if (tills[i] > 0) {
                tills[i] -= 1;
            };
            if (tills[i] === 0 && customers[0]) {
                tills[i] = customers[0];
                customers.shift();
            };
        };
        // return time if none of the tills are occupied, i.e. tills array all zeros
        if (tills.every(item => item === 0)) {
            return time;
        };
        time += 1;
        console.log(`tills at t = ${time}: ${tills}`);
    };
};
console.log(queueTime([1,2,3,4], 1));
console.log(queueTime([2,2,3,3,4,4], 2));
console.log(queueTime([1,2,3,4,5], 100));