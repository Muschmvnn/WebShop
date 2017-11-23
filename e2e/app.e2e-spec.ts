import { WebShopPage } from './app.po';

describe('web-shop App', () => {
  let page: WebShopPage;

  beforeEach(() => {
    page = new WebShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
