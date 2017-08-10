import { SwitchboardPage } from './app.po';

describe('switchboard App', () => {
  let page: SwitchboardPage;

  beforeEach(() => {
    page = new SwitchboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
