"use strict";
const winswitcher = require("../build/release/rinku_winswitcher.node");
class WinSwitcher {
    constructor() { }
    ;
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
