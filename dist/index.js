"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStoredWindow = exports.getActiveWindowTitle = exports.activateStoredWindow = exports.storeActiveWindow = void 0;
const winswitcher = require("../build/release/rinku_winswitcher.node");
function storeActiveWindow() {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }
    return winswitcher.storeActiveWindow();
}
exports.storeActiveWindow = storeActiveWindow;
function activateStoredWindow() {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }
    return winswitcher.activateStoredWindow();
}
exports.activateStoredWindow = activateStoredWindow;
function getActiveWindowTitle() {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }
    return winswitcher.getCurrentActiveWindowTitle();
}
exports.getActiveWindowTitle = getActiveWindowTitle;
function checkStoredWindow() {
    if (process.platform != "win32") {
        throw new Error("Unsupported Platform");
    }
    return winswitcher.checkStoredWindow();
}
exports.checkStoredWindow = checkStoredWindow;
