import { TimezonePage } from './app.po';

describe('timezone App', () => {
  let page: TimezonePage;

  beforeEach(() => {
    page = new TimezonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
