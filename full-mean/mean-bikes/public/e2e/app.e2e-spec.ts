import { BikesPage } from './app.po';

describe('bikes App', () => {
  let page: BikesPage;

  beforeEach(() => {
    page = new BikesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
