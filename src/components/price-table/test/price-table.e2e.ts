import { newE2EPage } from '@stencil/core/testing';

describe('price-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<price-table></price-table>');

    const element = await page.find('price-table');
    expect(element).toHaveClass('hydrated');
  });
});
