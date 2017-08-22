import { LoginRegServicePage } from './app.po';

describe('login-reg-service App', () => {
  let page: LoginRegServicePage;

  beforeEach(() => {
    page = new LoginRegServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
