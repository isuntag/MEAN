import { BlackBeltPage } from './app.po';

describe('black-belt App', () => {
  let page: BlackBeltPage;

  beforeEach(() => {
    page = new BlackBeltPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
