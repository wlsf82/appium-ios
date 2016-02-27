describe( 'Choko on mobile', function() {

  it( 'invalid login', function() {

    // Arrange:
    browser.get('sign-in');

    // Act:
    element(by.id('element-sign-in-username')).sendKeys('test-user');
    element(by.id('element-sign-in-password')).sendKeys('password');
    browser.driver.touchActions()
      .tap(element(by.id('element-sign-in-submit')))
      .perform();

    // Assert:
    expect(element(by.repeater('error in errors')).isDisplayed()).toBe(true);

  });

  it( 'sandwich menu is opened and closed with a single tap', function() {

    // Arrange:
    browser.get('create-account');

    var sandwichMenuButton = element(by.css('.navbar-toggle'));
    var menu = element(by.css('.navbar-collapse'));

    //Act:
    browser.driver.touchActions().tap(sandwichMenuButton).perform();

    //Assert:
    expect(menu.getAttribute('aria-expanded')).toEqual('true');

    //Act:
    browser.driver.touchActions().tap(sandwichMenuButton).perform();

    // Assert:
    expect(menu.getAttribute('aria-expanded')).toEqual('false');

  });

});
