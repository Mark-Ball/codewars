class Event {
    constructor() {
        this.store = [];
    }

    subscribe(fn) {
        this.store.push(fn);
    }

    unsubscribe(fn) {
        for (let i in this.store) {
            if (fn === this.store[i]) {
                this.store.splice(i, 1);
                return;
            }
        }
    }

    emit() {
        for (let fn of this.store) {
            fn(...arguments);
        }
    }
}

const event = new Event();

function f() {
    f.calls = (f.calls || 0) + 1;
    f.args = Array.prototype.slice.call(arguments);
    console.log(f.calls);
}

event.subscribe(f);
event.emit(1, 'foo', true);
event.emit(1, 'foo', true);