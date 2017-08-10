import { DojoMailPage } from './app.po';

describe('dojo-mail App', () => {
  let page: DojoMailPage;

  beforeEach(() => {
    page = new DojoMailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
