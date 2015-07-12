function MyCtor(element, data) {
    this.data = data;
    this.element = element;
    element.value = data;
    element.addEventListener("change", this, false);
}

MyCtor.prototype.handleEvent = function (event) {
    switch (event.type) {
        case "change":
            this.change(this.element.value);
    }
};

MyCtor.prototype.change = function (value) {
    this.data = value;
    this.element.value = value;
};
MyCtor.prototype.getValue = function () {
    return parseInt(this.element.value, 10);
};

var energy = new MyCtor(document.getElementById("energy"), 0);
var ENERGY_INREASE_RATE = 1;
var ENERGY_INCREASE_INTERVAL = 100;

setInterval(function () {
    energy.change(energy.getValue() + ENERGY_INREASE_RATE);
}, ENERGY_INCREASE_INTERVAL);

var isDarkMode = false;
$('button#theme').click(function () {
    if (isDarkMode) {
        $('link[href="css/darkstyle.css"]').attr('href','css/lightstyle.css');
    } else {
        $('link[href="css/lightstyle.css"]').attr('href','css/darkstyle.css');
    }
    isDarkMode = !isDarkMode;
});