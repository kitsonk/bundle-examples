const c = function() {
    class C {
    }
    return {
        c: "c",
        default: C
    };
}();
console.log("b");
console.log(c);
