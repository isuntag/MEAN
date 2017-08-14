import { QuoteRanksPage } from './app.po';

describe('quote-ranks App', () => {
  let page: QuoteRanksPage;

  beforeEach(() => {
    page = new QuoteRanksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
