import { BeltExamPage } from './app.po';

describe('belt-exam App', () => {
  let page: BeltExamPage;

  beforeEach(() => {
    page = new BeltExamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
