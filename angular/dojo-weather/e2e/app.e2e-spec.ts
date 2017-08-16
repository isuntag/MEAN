import { DojoWeaterPage } from './app.po';

describe('dojo-weater App', () => {
  let page: DojoWeaterPage;

  beforeEach(() => {
    page = new DojoWeaterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
