function a() {
    console.log("a");
}
var O;
(function(O1) {
    O1[O1["A"] = 0] = "A";
    O1[O1["B"] = 1] = "B";
    O1[O1["C"] = 2] = "C";
})((void 0) || (O = {
}));
const O1 = void 0;
export { O1 as O };
class A {
    #a;
    #c;
    constructor(o = {
    }){
        const { a: a2 = a , c ,  } = o;
        this.#a = a2;
        this.#c = c;
    }
    a() {
        this.#a();
    }
    c() {
        console.log(this.#c);
    }
}
let a3 = new A();
a3.a();
a3.c();
