const winswitcher = require('../build/release/rinku_winswitcher.node');

export default class WinSwitcher {
    constructor() { }
    storeActiveWindow(): String {
        return winswitcher.storeActiveWindow();
    }
    activateStoredWindow(): String {
        return winswitcher.activateStoredWindow();
    }
    getActiveWindowTitle(): String {
        return winswitcher.getCurrentActiveWindowTitle();
    }
    checkStoredWindow(): String {
        return winswitcher.checkStoredWindow();
    }
}