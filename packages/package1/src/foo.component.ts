import { Component } from '@angular/core';

@Component({ template: `<div>Foo</div>` })
export class FooComponent {
  public foo(): string {
    return 'foo';
  }
}
