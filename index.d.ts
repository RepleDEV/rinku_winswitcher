/// <reference types="node"/>

/**
 * Stores the current active window.
 */
declare function storeActiveWindow(): string;

/**
 * Activates the window that has been stored.
 */
declare function activateStoredWindow(): string;

/**
 * Gets current active window's title.
 */
declare function getActiveWindowTitle(): string;

/**
 * Check the title of the stored window (if there's any).
 */
declare function checkStoredWindow(): string;

export { storeActiveWindow, activateStoredWindow, getActiveWindowTitle, checkStoredWindow };