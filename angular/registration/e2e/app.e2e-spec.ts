import { RegistrationPage } from './app.po';

describe('registration App', () => {
  let page: RegistrationPage;

  beforeEach(() => {
    page = new RegistrationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
