import { UiTestPage } from './app.po';

describe('ui-test App', () => {
  let page: UiTestPage;

  beforeEach(() => {
    page = new UiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
