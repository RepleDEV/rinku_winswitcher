const winswitcher = require('../build/release/rinku_winswitcher.node');
export default class WinSwitcher {
    constructor() { }
    storeActiveWindow() {
        return winswitcher.storeActiveWindow();
    }
    activateStoredWindow() {
        return winswitcher.activateStoredWindow();
    }
    getActiveWindowTitle() {
        return winswitcher.getCurrentActiveWindowTitle();
    }
    checkStoredWindow() {
        return winswitcher.checkStoredWindow();
    }
}
