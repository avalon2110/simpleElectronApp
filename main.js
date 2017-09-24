const {app, BrowserWindow} = require('electron');
const path = require("path");
const url = require("url");

// init win
let win;

function createWindow() {
  // Create browser window
  win = new BrowserWindow({width:800, heigth:600, icon:__dirname + "/img/SysInfo.png"});

  //Load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //Open devtools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

// Run create window
app.on('ready', createWindow);


// Quite when all windows are closed
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
})
