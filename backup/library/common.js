function find_node(obj, k) {
    let look = lookup(obj, k)
    if (look) {
        return look[1]
    }
    return null;
}

function lookup(obj, k) {
    for (var key in obj) {
        var value = obj[key];

        if (k == key) {
            return [k, value];
        }

        if (typeof (value) === "object" && !Array.isArray(value)) {
            var y = lookup(value, k);
            if (y && y[0] == k) return y;
        }
        if (Array.isArray(value)) {
            // for..in doesn't work the way you want on arrays in some browsers
            //
            for (var i = 0; i < value.length; ++i) {
                var x = lookup(value[i], k);
                if (x && x[0] == k) return x;
            }
        }
    }
    return null;
}


function b64DecodeUnicode(str){
    return decodeURIComponent(atob(str).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

