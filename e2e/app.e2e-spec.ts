import { Angular2TesPage } from './app.po';

describe('angular2-tes App', function() {
  let page: Angular2TesPage;

  beforeEach(() => {
    page = new Angular2TesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
