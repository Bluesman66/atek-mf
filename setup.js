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

// mf-home
var homePath = resolve(__dirname, "./home");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: homePath, stdio: "inherit" });

// mf-catalog
var catalogPath = resolve(__dirname, "./catalog");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: catalogPath, stdio: "inherit" });

// mf-news
var newsPath = resolve(__dirname, "./news");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: newsPath, stdio: "inherit" });

// mf-command
var commandPath = resolve(__dirname, "./command");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: commandPath, stdio: "inherit" });

// alfa-portal
var alfaPortalPath = resolve(__dirname, "./alfa-portal");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: alfaPortalPath, stdio: "inherit" });

// header
var headerPath = resolve(__dirname, "./header");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: headerPath, stdio: "inherit" });

// footer
var footerPath = resolve(__dirname, "./footer");
cp.spawn(npmCmd, ["run", "start"], { env: process.env, cwd: footerPath, stdio: "inherit" });