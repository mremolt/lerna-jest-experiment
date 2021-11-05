import { fixture, html } from '@open-wc/testing-helpers';
// @ts-ignore
import toDiffableHtml from 'diffable-html';

import { FooElement } from './foo.element';

describe('FooElement', () => {
  let subject: FooElement;

  beforeEach(() => {
    subject = new FooElement();
  });

  it('should build', () => {
    expect(subject).toBeDefined();
  });

  describe('render', () => {
    beforeEach(async () => {
      subject = await fixture(html` <package1-foo></package1-foo> `);
    });

    it('should render', () => {
      expect(toDiffableHtml(subject.shadowRoot!.innerHTML)).toMatchSnapshot();
    });
  });
});
