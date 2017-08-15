import { GithubScorePage } from './app.po';

describe('github-score App', () => {
  let page: GithubScorePage;

  beforeEach(() => {
    page = new GithubScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
