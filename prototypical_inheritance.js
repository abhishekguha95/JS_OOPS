function HtmlElement() {
    this.click = function () {
        console.log('clicking');
    };
}

HtmlElement.prototype.focus = function () {
    console.log('focusing');
};

const e = new HtmlElement();
// e.click();
// e.focus();

function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        console.log(`<img src="${this.src}" />`);
    };
}

HtmlImageElement.prototype = new HtmlElement();

const img = new HtmlImageElement();

img.src = 'abcd';
img.render();

function HtmlSelectElement(arr) {
    this.items = arr || [];
    this.addItem = function (ele) {
        this.items.push(ele);
    };
    this.removeItem = function (ele) {
        const index = this.items.indexOf(ele);
        if (index > -1) {
            this.items.splice(index, 1);
        } else {
            console.log('element not present in array');
        }
    };
    this.render = function () {
        console.log('<select>');
        this.items.forEach(element => {
            console.log(`\t<option>${element}</option>`);
        });
        console.log('</select>');
    };
}

HtmlSelectElement.prototype = new HtmlElement();
const s = new HtmlSelectElement([1, 2, 3]);

console.log(e)
console.log(s)

s.render()
