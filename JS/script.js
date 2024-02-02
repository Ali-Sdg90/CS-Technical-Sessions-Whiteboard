function HelloWorldViewModel() {
    this.message = ko.observable("Hello");
    this.logHello = function () {
        console.log(this.message());
    };
}

var viewModel = new HelloWorldViewModel();
ko.applyBindings(viewModel);
