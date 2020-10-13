"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStoredWindow = exports.getActiveWindowTitle = exports.activateStoredWindow = exports.storeActiveWindow = void 0;
let winswitcher;
(function main() {
    try {
        const { platform } = process;
        winswitcher = require(`../build/Release/rinku_winswitcher-${platform}`);
    }
    catch (err) {
        console.error("Unsupported Platform! All primary functions won't work!");
    }
})();
function storeActiveWindow() {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }
    return winswitcher.storeActiveWindow();
}
exports.storeActiveWindow = storeActiveWindow;
function activateStoredWindow() {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }
    return winswitcher.activateStoredWindow();
}
exports.activateStoredWindow = activateStoredWindow;
function getActiveWindowTitle() {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }
    return winswitcher.getCurrentActiveWindowTitle();
}
exports.getActiveWindowTitle = getActiveWindowTitle;
function checkStoredWindow() {
    if (winswitcher === undefined) {
        return "Unsupported Platform!";
    }
    return winswitcher.checkStoredWindow();
}
exports.checkStoredWindow = checkStoredWindow;
