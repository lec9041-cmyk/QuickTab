const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('quicktab', {
  platform: process.platform,
});
