export default class SplitText {
    constructor(element, { type = 'chars', containerType = 'span' }) {
        this.element = element;
        this.type = type;
        this.containerType = containerType;
        this.splitContentHandler();
        this.setNewElementContent();
    }

    // checkType() {
    //     const { type } = this;
    //     switch (type) {
    //         case 'chars': {


    //             break;
    //         }
    //     }
    // }


    setNewElementContent() {
        const { element, type, chars, containerType } = this;
        element.innerHTML = chars.map(item => {
            return `<${containerType}>${item}</${containerType}>`
        }).join('');
        this.chars = element.querySelectorAll(`${containerType}`);
    }

    splitContentHandler() {
        const { element } = this;
        this.chars = element.textContent.split('');
    }
}