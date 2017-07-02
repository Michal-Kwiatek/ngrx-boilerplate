import { NgfirePage } from './app.po';

describe('ngfire App', () => {
  let page: NgfirePage;

  beforeEach(() => {
    page = new NgfirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
