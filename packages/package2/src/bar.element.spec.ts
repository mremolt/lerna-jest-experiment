import { BarElement } from './bar.element';

describe('FooElement', () => {
  let subject: BarElement;

  beforeEach(() => {
    subject = new BarElement();
  });

  it('should build', () => {
    expect(subject).toBeDefined();
  });
});
