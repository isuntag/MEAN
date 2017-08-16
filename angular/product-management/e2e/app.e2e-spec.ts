import { ProductManagementPage } from './app.po';

describe('product-management App', () => {
  let page: ProductManagementPage;

  beforeEach(() => {
    page = new ProductManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
