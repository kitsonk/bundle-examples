class A {
    s = d();
    a() {
        this.s.resolve();
    }
}
new A();
