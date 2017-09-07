import { SmartGridPage } from './app.po';

describe('core-ui App', function() {
  let page: SmartGridPage;

  beforeEach(() => {
    page = new SmartGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
