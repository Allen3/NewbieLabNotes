let user = {
    name: 'Johhny',
    surname: 'Depp',
    get fullname() {
        return `${this.name} ${this.surname}`;
    },

    set fullname(fullname) {
        [this.name, this.surname] = fullname.split(' ');
    },
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

user.fullname = 'Alice Cooper';
console.log(user.fullname);