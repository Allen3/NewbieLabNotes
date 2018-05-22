let value = "Surprise!MTFK"

function func() {
    let value = "I'm orthodox!";
    function showValue() {
        // console.log(value);
        debugger;
    }    
    return showValue;
}

let funcVar = func;
func();