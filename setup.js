var fs = require("fs");
var resolve = require("path").resolve;
var join = require("path").join;
var cp = require("child_process");
var os = require("os");

// get library path
var root = resolve(__dirname, ".");

// npm binary based on OS
var npmCmd = os.platform().startsWith("win") ? "npm.cmd" : "npm";

fs.readdirSync(root).forEach(function (subDir) {
  var subDirPath = join(root, subDir);

  // ensure path has package.json --> skip backend folder
  if (!fs.existsSync(join(subDirPath, "package.json"))) return;

  console.log("===================================================================");
  console.log(`Performing "npm i" inside ${subDir} folder`);
  console.log("===================================================================");

  // install dependencies
  cp.spawnSync(npmCmd, ["i"], { env: process.env, cwd: subDirPath, stdio: "inherit" });
});

// Running the apps
console.log("===================================================================");
console.log(`Starting the json-server and the apps`);
console.log("===================================================================");

// mf-host
var hostPath = resolve(__dirname, "./host");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: hostPath, stdio: "inherit" });

// mf-layouts
var layoutsPath = resolve(__dirname, "./layouts");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: layoutsPath, stdio: "inherit" });

// mf-cabinet
var cabinetPath = resolve(__dirname, "./cabinet");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: cabinetPath, stdio: "inherit" });

// mf-catalog
var catalogPath = resolve(__dirname, "./catalog");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: catalogPath, stdio: "inherit" });

// mf-chat
var chatPath = resolve(__dirname, "./chat");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: chatPath, stdio: "inherit" });

// mf-constructor
var constructorPath = resolve(__dirname, "./constructor");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: constructorPath, stdio: "inherit" });

// mf-contact
var contactPath = resolve(__dirname, "./contact");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: contactPath, stdio: "inherit" });

// mf-equipment
var equipmentPath = resolve(__dirname, "./equipment");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: equipmentPath, stdio: "inherit" });

// mf-news
var newsPath = resolve(__dirname, "./news");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: newsPath, stdio: "inherit" });

// mf-search
var searchPath = resolve(__dirname, "./search");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: searchPath, stdio: "inherit" });

// mf-support
var supportPath = resolve(__dirname, "./support");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: supportPath, stdio: "inherit" });

// mf-user
var userPath = resolve(__dirname, "./user");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: userPath, stdio: "inherit" });

// mf-widget
var widgetPath = resolve(__dirname, "./widget");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: widgetPath, stdio: "inherit" });

// mf-wishlist
var wishlistPath = resolve(__dirname, "./wishlist");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: wishlistPath, stdio: "inherit" });