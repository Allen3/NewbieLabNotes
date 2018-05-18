// Iterable Sample
let range = {
    head: 1,
    tail: 5,

    [Symbol.iterator]() {
        this.currentValue = this.head;
        return this;
    },

    next() {
        if (this.currentValue <= this.tail)
            return {done: false, value: this.currentValue ++};
        else 
            return {done: true};
    },
};

for (let num of range) {
    console.log(num);
}