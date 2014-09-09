define(['../../bower_components/knockoutjs/dist/knockout'], function (ko) {
  function ViewModel(params) {
      this.name = "TEST HEADING";
      // 'params' is an object whose key/value pairs are the parameters
      // passed from the component binding or custom element.
      this.someProperty = params.something;
  }

  // ViewModel.prototype.doSomething = function() { ... };
    console.log('registered aof-container component..');

  ko.components.register('aof-container', {
      template: { require: 'text!aof-container.html' },
      viewModel: ViewModel
  });

})
