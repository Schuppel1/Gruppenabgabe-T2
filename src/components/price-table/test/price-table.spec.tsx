import { newSpecPage } from '@stencil/core/testing';
import { PriceTable } from '../price-table';

describe('price-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PriceTable],
      html: `<price-table></price-table>`,
    });
    expect(page.root).toEqualHtml(`
      <price-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </price-table>
    `);
  });
});
