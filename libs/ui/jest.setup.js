import "@testing-library/jest-dom";

window.PointerEvent = class PointerEvent extends Event{};
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.releasePointerCapture = jest.fn();
window.HTMLElement.prototype.hasPointerCapture = jest.fn();
