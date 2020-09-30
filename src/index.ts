const winswitcher = require("../build/release/rinku_winswitcher.node");

class WinSwitcher {
    constructor() {};
    storeActiveWindow(): string {
        return winswitcher.storeActiveWindow();
    }
    activateStoredWindow(): string {
        return winswitcher.activateStoredWindow();
    }
    static getActiveWindowTitle(): string {
        return winswitcher.getCurrentActiveWindowTitle();
    }
    checkStoredWindow(): string {
        return winswitcher.checkStoredWindow();
    }
}

export = WinSwitcher;