import { FooComponent } from './foo.component';

describe('FooComponent', () => {
  let subject: FooComponent;

  beforeEach(() => {
    subject = new FooComponent();
  });

  it('should build', () => {
    expect(subject).toBeDefined();
  });

  it('should foo', () => {
    expect(subject.foo()).toBe('foo');
  });
});
