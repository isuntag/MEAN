import { PublicPage } from './app.po';

describe('public App', () => {
  let page: PublicPage;

  beforeEach(() => {
    page = new PublicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
