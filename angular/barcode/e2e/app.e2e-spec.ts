import { BarcodePage } from './app.po';

describe('barcode App', () => {
  let page: BarcodePage;

  beforeEach(() => {
    page = new BarcodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
