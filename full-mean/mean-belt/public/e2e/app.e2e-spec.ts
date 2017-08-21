import { BeltPage } from './app.po';

describe('belt App', () => {
  let page: BeltPage;

  beforeEach(() => {
    page = new BeltPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
