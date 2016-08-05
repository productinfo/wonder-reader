const electron = require('electron'); // http://electron.atom.io/docs/
const app = electron.app; // http://electron.atom.io/docs/api/app/
// const Tray = electron.Tray; // http://electron.atom.io/docs/api/tray/
const BrowserWindow = electron.BrowserWindow; // http://electron.atom.io/docs/api/browser-window/
// var fs = require('fs'); // https://nodejs.org/api/fs.html

let win // Global 'win' variable
function createWindow() {
  win = new BrowserWindow({
    width: 1000,  // Window Size : width (duh)
    height: 700, // Window Size : height
    icon: './logo.png'
  });
  win.loadURL(`file://${__dirname}/app/index.html`); // Points to the html file to load in the app
  win.maximize(); // Starts as maximized as you can get!
  win.webContents.openDevTools(); // Loads with Dev Tools open.  Remove before release.
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', () => {
  // const appIcon = new Tray('./logo.png')
  // console.log(appIcon)
  createWindow()
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (win ===null) {
    createWindow();
  }
});
