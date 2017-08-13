import { LayoutPage } from './app.po';

describe('layout App', () => {
  let page: LayoutPage;

  beforeEach(() => {
    page = new LayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
