import { PowerLevelsPage } from './app.po';

describe('power-levels App', () => {
  let page: PowerLevelsPage;

  beforeEach(() => {
    page = new PowerLevelsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
