const { app, BrowserWindow } = require('electron')

app.on('ready', function() {
  var mw = new BrowserWindow({
    width: 900,
    height: 700
  });
  mw.loadURL('https://google.com');
})
