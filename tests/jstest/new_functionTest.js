function getFunc() {
    let value = "Johnny";

    let getValue = new Function('console.log(value)');

    return getValue;
}

getFunc()();