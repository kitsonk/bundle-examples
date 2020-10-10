import { D, d } from "./q.ts";

class A {
  private s: D = d();

  a() {
    this.s.resolve();
  }
}

new A();
