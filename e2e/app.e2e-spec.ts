import { AngularCliApPage } from './app.po';

describe('angular-cli-ap App', function() {
  let page: AngularCliApPage;

  beforeEach(() => {
    page = new AngularCliApPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
