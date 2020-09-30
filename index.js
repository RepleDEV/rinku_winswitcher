"use strict";
const winswitcher = require("");
class WinSwitcher {
    constructor() { }
    storeActiveWindow() {
        return winswitcher.storeActiveWindow();
    }
    activateStoredWindow() {
        return winswitcher.activateStoredWindow();
    }
    static getActiveWindowTitle() {
        return winswitcher.getCurrentActiveWindowTitle();
    }
    checkStoredWindow() {
        return winswitcher.checkStoredWindow();
    }
}
module.exports = WinSwitcher;
