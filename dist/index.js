"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStoredWindow = exports.getActiveWindowTitle = exports.activateStoredWindow = exports.storeActiveWindow = void 0;
const winswitcher = require("../build/release/rinku_winswitcher.node");
function storeActiveWindow() {
    return winswitcher.storeActiveWindow();
}
exports.storeActiveWindow = storeActiveWindow;
function activateStoredWindow() {
    return winswitcher.activateStoredWindow();
}
exports.activateStoredWindow = activateStoredWindow;
function getActiveWindowTitle() {
    return winswitcher.getCurrentActiveWindowTitle();
}
exports.getActiveWindowTitle = getActiveWindowTitle;
function checkStoredWindow() {
    return winswitcher.checkStoredWindow();
}
exports.checkStoredWindow = checkStoredWindow;
