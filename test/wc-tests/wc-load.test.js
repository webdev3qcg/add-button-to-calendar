/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

import { fixture, html, expect } from '@open-wc/testing';
import '../../dist/module/index.js';

describe('add-button-to-calendar renders', () => {
  it('has a generated button id and shadowDom element', async () => {
    const el = await fixture(html` <add-button-to-calendar name="test" options='Google' startDate="2050-02-14"></add-button-to-calendar> `);
    expect(el.getAttribute('atcb-button-id')).to.exist;
    expect(el.getAttribute('atcb-button-id')).not.equal('');
    expect(el.shadowRoot.querySelector('.atcb-initialized')).to.exist;
  });
});
