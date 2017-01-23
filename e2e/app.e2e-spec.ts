import { Angular2CrudBoilerplatePage } from './app.po';

describe('angular2-crud-boilerplate App', function() {
  let page: Angular2CrudBoilerplatePage;

  beforeEach(() => {
    page = new Angular2CrudBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
