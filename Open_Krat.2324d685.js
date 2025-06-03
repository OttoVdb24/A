// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"aTFBf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "716c82a12324d685";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bUtj7":[function(require,module,exports,__globalThis) {
var _three = require("three");
var _orbitControlsJs = require("three/examples/jsm/controls/OrbitControls.js");
// De scene
var scene = new _three.Scene();
scene.background = new _three.Color('white');
// Renderer die de grootte van de container gebruikt en daarin wordt geplaatst
const container = document.getElementById('canvas-container');
const renderer = new _three.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    canvas: container.querySelector('canvas')
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// Update canvas bij resize:
window.addEventListener('resize', ()=>{
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
// Camera die de grootte van de container gebruikt
var camera = new _three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(1.5, 1.5, 1.5);
camera.lookAt(scene.position);
// OrbitControls instellen
var controls = new (0, _orbitControlsJs.OrbitControls)(camera, renderer.domElement);
controls.enableDamping = true; // Schakel demping in voor soepelere beweging
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
// Verlichting toevoegen
const ambientLight = new _three.AmbientLight(0xf6cd8b, 2.0);
const light = new _three.DirectionalLight(0xFFFFFF, 2.0);
light.position.set(2.5, 5, 5);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 50;
light.shadow.camera.left = -10;
light.shadow.camera.right = 10;
light.shadow.camera.top = 10;
light.shadow.camera.bottom = -10;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = _three.PCFSoftShadowMap; // Dit zorgt voor zachte schaduwen
scene.add(ambientLight, light);
//schaduwvlak
let ground;
// Voeg een axis helper toe
//scene.add(new THREE.AxesHelper(2));
//materialen
var PlaatMateriaal;
const OSBColorMat = new _three.MeshStandardMaterial({
    color: 0x1b7101
});
const BetonColorMat = new _three.MeshStandardMaterial({
    color: 0x1f1716
});
const MultColorMat = new _three.MeshStandardMaterial({
    color: 0xccac74
});
const KeperColorMat = new _three.MeshStandardMaterial({
    color: 0xccac74
});
const edgeMaterial = new _three.LineBasicMaterial({
    color: 0x000000
});
// Functie om een object met randen te maken
function createBoxWithEdges(geometry, material) {
    const mesh = new _three.Mesh(geometry, material);
    mesh.castShadow = true;
    const edges = new _three.EdgesGeometry(geometry);
    const line = new _three.LineSegments(edges, edgeMaterial);
    mesh.add(line);
    return mesh;
}
//onderdelen aanmaken
let Blokken = [];
let BovenPlanken = [];
let TussenPlanken = [];
let DekPlanken = [];
let ZijkantStaanders = [];
let ZijkantRegels = [];
let KopStaanders = [];
let KopRegels = [];
let DekselRegels = [];
let DekselStaanders = [];
// Variabelen aanmaken
let Lengte;
let Breedte;
let Hoogte;
let AantalBodemPlanken;
let AantalTussenPlanken;
let AantalBovenPlanken;
let AantalZijkantPlanken;
let AantalDekselPlanken;
let PlankDikte;
let PlankBreedte;
let DekPlankHoogte = 0.022;
let DekPlankBreedte = 0.100;
let BodemPlankHoogte = 0.022;
let BodemPlankBreedte = 0.100;
let TussenPlankHoogte = 0.022;
let TussenPlankBreedte = 0.100;
let DekselPlankHoogte = 0.022;
let DekselPlankBreedte = 0.1;
let ZijkantPlankHoogte = 0.022;
let ZijkantPlankBreedte = 0.1;
let BlokHoogte = 0.1;
let BlokBreedte = 0.08;
let BlokstartZ;
let BlokspacingZ;
let ZijkantRegelYStart;
let ZijkantRegelYSpacing;
function VariabelenInLezen() {
    //input gebruiker ophalen
    Lengte = parseFloat(document.getElementById('LengteSlider').value) / 1000;
    Breedte = parseFloat(document.getElementById('BreedteSlider').value) / 1000;
    Hoogte = parseFloat(document.getElementById('HoogteSlider').value) / 1000;
    AantalBodemPlanken = parseFloat(document.getElementById("OnderlatInput").value);
    AantalTussenPlanken = parseFloat(document.getElementById("TussenlatInput").value);
    AantalBovenPlanken = parseFloat(document.getElementById('DekPlankenInput').value);
    AantalZijkantPlanken = parseFloat(document.getElementById('ZijkantPlankenInput').value);
    AantalDekselPlanken = document.getElementById('DekselPlankenInput').value;
    AantalBodemPlanken = Math.max(2, Math.round(AantalBodemPlanken));
    AantalTussenPlanken = Math.max(2, Math.round(AantalTussenPlanken));
    AantalBovenPlanken = Math.max(2, Math.round(AantalBovenPlanken));
    AantalZijkantPlanken = Math.max(2, Math.round(AantalZijkantPlanken));
    AantalDekselPlanken = Math.max(2, Math.round(AantalDekselPlanken));
    Lengte = Math.max(Lengte, AantalTussenPlanken * BlokBreedte);
    Breedte = Math.max(Breedte, AantalBovenPlanken * DekPlankBreedte, AantalBodemPlanken * BodemPlankBreedte, AantalDekselPlanken * DekselPlankBreedte);
    Hoogte = Math.max(Hoogte, AantalZijkantPlanken * ZijkantPlankBreedte);
    document.getElementById("OnderlatInput").value = AantalBodemPlanken.toFixed(0);
    document.getElementById("TussenlatInput").value = AantalTussenPlanken.toFixed(0);
    document.getElementById("DekPlankenInput").value = AantalBovenPlanken.toFixed(0);
    document.getElementById("ZijkantPlankenInput").value = AantalZijkantPlanken.toFixed(0);
    document.getElementById("DekselPlankenInput").value = AantalDekselPlanken.toFixed(0);
    document.getElementById("BreedteInput").value = (Breedte * 1000).toFixed(0);
    document.getElementById("LengteInput").value = (Lengte * 1000).toFixed(0);
    document.getElementById("HoogteInput").value = (Hoogte * 1000).toFixed(0);
}
function VerwijderOnderdelen() {
    // Eerst verwijderen we de oude onderdelen
    BovenPlanken.forEach((plank)=>scene.remove(plank));
    TussenPlanken.forEach((plank)=>scene.remove(plank));
    DekPlanken.forEach((plank)=>scene.remove(plank));
    Blokken.forEach((blok)=>scene.remove(blok));
    ZijkantStaanders.forEach((blok)=>scene.remove(blok));
    ZijkantRegels.forEach((plank)=>scene.remove(plank));
    KopStaanders.forEach((blok)=>scene.remove(blok));
    KopRegels.forEach((plank)=>scene.remove(plank));
    DekselRegels.forEach((blok)=>scene.remove(blok));
    DekselStaanders.forEach((plank)=>scene.remove(plank));
}
function OptiePlank() {
    if (document.getElementById('Uitvoering').value == 'Light') {
        PlankDikte = 0.015;
        PlankBreedte = 0.075;
        BlokHoogte = 0.1;
        BlokBreedte = 0.08;
    } else if (document.getElementById('Uitvoering').value == 'Medium') {
        PlankDikte = 0.018;
        PlankBreedte = 0.1;
        BlokHoogte = 0.1;
        BlokBreedte = 0.1;
    } else if (document.getElementById('Uitvoering').value == 'Heavy') {
        PlankDikte = 0.022;
        PlankBreedte = 0.1;
        BlokHoogte = 0.1;
        BlokBreedte = 0.1;
    }
    DekPlankHoogte = PlankDikte;
    DekPlankBreedte = PlankBreedte;
    BodemPlankHoogte = PlankDikte;
    BodemPlankBreedte = PlankBreedte;
    TussenPlankHoogte = PlankDikte;
    TussenPlankBreedte = PlankBreedte;
    DekPlankHoogte = PlankDikte;
    DekselPlankBreedte = PlankBreedte;
    ZijkantPlankHoogte = PlankDikte;
    ZijkantPlankBreedte = PlankBreedte;
}
function Bodem_GEN() {
    //---------------Onderste Planken generenen---------------------------
    let startX = -(Breedte - BodemPlankBreedte + 2 * ZijkantPlankHoogte) / 2;
    let spacingX = (Breedte + 2 * ZijkantPlankHoogte - BodemPlankBreedte) / (AantalBodemPlanken - 1);
    for(let i = 0; i < AantalBodemPlanken; i++){
        let xPos = startX + i * spacingX;
        let BovenPlank = createBoxWithEdges(new _three.BoxGeometry(BodemPlankBreedte, BodemPlankHoogte, Lengte + 2 * ZijkantPlankHoogte), KeperColorMat);
        BovenPlank.position.set(xPos, BodemPlankHoogte / 2, 0);
        scene.add(BovenPlank);
        BovenPlanken.push(BovenPlank);
    }
}
function Blokken_GEN() {
    //-----------------Blokken genereren op een grid---------------------
    let startX = -(Breedte - BlokBreedte + 2 * ZijkantPlankHoogte) / 2;
    let spacingX = (Breedte - BlokBreedte + 2 * ZijkantPlankHoogte) / (AantalBodemPlanken - 1);
    BlokstartZ = -(Lengte - BlokBreedte + 2 * ZijkantPlankHoogte) / 2;
    BlokspacingZ = (Lengte - BlokBreedte + 2 * ZijkantPlankHoogte) / (AantalTussenPlanken - 1);
    for(let i = 0; i < AantalBodemPlanken; i++)for(let j = 0; j < AantalTussenPlanken; j++){
        let xPos = startX + i * spacingX;
        let zPos = BlokstartZ + j * BlokspacingZ;
        let blok = createBoxWithEdges(new _three.BoxGeometry(BlokBreedte, BlokHoogte, BlokBreedte), KeperColorMat);
        blok.position.set(xPos, BodemPlankHoogte + BlokHoogte / 2, zPos);
        scene.add(blok);
        Blokken.push(blok);
    }
}
function TussenPlanken_GEN() {
    // TussenPlanken genereren
    let startZ = -((Lengte - TussenPlankBreedte) / 2 + ZijkantPlankHoogte);
    let spacingZ = (Lengte - TussenPlankBreedte + 2 * ZijkantPlankHoogte) / (AantalTussenPlanken - 1);
    for(let i = 0; i < AantalTussenPlanken; i++){
        let ZPos = startZ + i * spacingZ;
        let TussenPlank = createBoxWithEdges(new _three.BoxGeometry(Breedte + 2 * ZijkantPlankHoogte, TussenPlankHoogte, TussenPlankBreedte), KeperColorMat);
        TussenPlank.position.set(0, BlokHoogte + BodemPlankHoogte + TussenPlankHoogte / 2, ZPos);
        scene.add(TussenPlank);
        TussenPlanken.push(TussenPlank);
    }
}
function Dek_GEN() {
    //************spreiding van aantal planken over dek************
    let startX = -((Breedte - DekPlankBreedte) / 2 + ZijkantPlankHoogte);
    let endX = (Breedte - DekPlankBreedte + 2 * ZijkantPlankHoogte) / 2;
    const beschikbareLengte = endX - startX;
    const spacing = AantalBovenPlanken > 1 ? beschikbareLengte / (AantalBovenPlanken - 1) : 0;
    for(let i = 0; i < AantalBovenPlanken; i++){
        let XPos = startX + i * spacing;
        let DekPlank = createBoxWithEdges(new _three.BoxGeometry(DekPlankBreedte, DekPlankHoogte, Lengte + 2 * ZijkantPlankHoogte), KeperColorMat);
        // Positioneren onder de kist
        DekPlank.position.set(XPos, BlokHoogte + BodemPlankHoogte + TussenPlankHoogte + DekPlankHoogte / 2, 0);
        // Toevoegen aan de scene en de array
        scene.add(DekPlank);
        DekPlanken.push(DekPlank);
    }
}
function ZijkantStaanders_GEN() {
    for(let i = 0; i < AantalTussenPlanken; i++){
        let ZStart = Lengte / 2 + ZijkantPlankHoogte - ZijkantPlankBreedte / 2;
        let Spacing = (Lengte + 2 * ZijkantPlankHoogte - ZijkantPlankBreedte) / (AantalTussenPlanken - 1);
        let xPos = Breedte / 2 + ZijkantPlankHoogte / 2 + ZijkantPlankHoogte;
        let Ysize = BlokHoogte + TussenPlankHoogte + DekPlankHoogte + Hoogte + DekselPlankHoogte;
        for (let richting of [
            1,
            -1
        ]){
            let ZijkantStaander = createBoxWithEdges(new _three.BoxGeometry(ZijkantPlankHoogte, Ysize, ZijkantPlankBreedte), KeperColorMat);
            ZijkantStaander.position.set(richting * xPos, Ysize / 2 + BodemPlankHoogte, ZStart - i * Spacing);
            scene.add(ZijkantStaander);
            ZijkantStaanders.push(ZijkantStaander);
        }
    }
}
function ZijkantRegels_Gen() {
    let Xpos = Breedte / 2 + ZijkantPlankHoogte / 2;
    ZijkantRegelYStart = BodemPlankHoogte + BlokHoogte + TussenPlankHoogte + DekPlankHoogte + ZijkantPlankBreedte / 2;
    ZijkantRegelYSpacing = (Hoogte - ZijkantPlankBreedte) / (AantalZijkantPlanken - 1);
    let Zpos = 0;
    for(let i = 0; i < AantalZijkantPlanken; i++)for (let richting of [
        1,
        -1
    ]){
        let ZijkantRegel = createBoxWithEdges(new _three.BoxGeometry(ZijkantPlankHoogte, ZijkantPlankBreedte, Lengte + 2 * ZijkantPlankHoogte), KeperColorMat);
        ZijkantRegel.position.set(richting * Xpos, ZijkantRegelYStart + i * ZijkantRegelYSpacing, Zpos);
        scene.add(ZijkantRegel);
        ZijkantRegels.push(ZijkantRegel);
    }
}
function KopStaanders_GEN() {
    for(let i = 0; i < AantalBodemPlanken; i++){
        let Xstart = Breedte / 2 - ZijkantPlankBreedte / 2 + ZijkantPlankHoogte;
        let Ysize = BlokHoogte + TussenPlankHoogte + DekPlankHoogte + Hoogte + DekselPlankHoogte;
        let Zpos = Lengte / 2 + ZijkantPlankHoogte / 2 + ZijkantPlankHoogte;
        let Spacing = (Breedte - ZijkantPlankBreedte + 2 * ZijkantPlankHoogte) / (AantalBodemPlanken - 1);
        for (let richting of [
            1,
            -1
        ]){
            let ZijkantStaander = createBoxWithEdges(new _three.BoxGeometry(ZijkantPlankBreedte, Ysize, ZijkantPlankHoogte), KeperColorMat);
            ZijkantStaander.position.set(Xstart - i * Spacing, Ysize / 2 + BodemPlankHoogte, richting * Zpos);
            scene.add(ZijkantStaander);
            ZijkantStaanders.push(ZijkantStaander);
        }
    }
}
function KopRegels_GEN() {
    let Xpos = 0;
    ZijkantRegelYStart = BodemPlankHoogte + BlokHoogte + TussenPlankHoogte + DekPlankHoogte + ZijkantPlankBreedte / 2;
    ZijkantRegelYSpacing = (Hoogte - ZijkantPlankBreedte) / (AantalZijkantPlanken - 1);
    let Zpos = Lengte / 2 + ZijkantPlankHoogte / 2;
    for(let i = 0; i < AantalZijkantPlanken; i++)for (let richting of [
        1,
        -1
    ]){
        let ZijkantRegel = createBoxWithEdges(new _three.BoxGeometry(Breedte, ZijkantPlankBreedte, ZijkantPlankHoogte), KeperColorMat);
        ZijkantRegel.position.set(Xpos, ZijkantRegelYStart + i * ZijkantRegelYSpacing, richting * Zpos);
        scene.add(ZijkantRegel);
        ZijkantRegels.push(ZijkantRegel);
    }
}
function DekselRegels_GEN() {
    let Xstart = Breedte / 2 + ZijkantPlankHoogte - DekselPlankBreedte / 2;
    let Zpos = 0;
    let Ypos = BodemPlankHoogte + BlokHoogte + TussenPlankHoogte + DekPlankHoogte + Hoogte + DekselPlankHoogte / 2;
    let Spacing = (Breedte + 2 * ZijkantPlankHoogte - ZijkantPlankBreedte) / (AantalDekselPlanken - 1);
    for(let i = 0; i < AantalDekselPlanken; i++){
        let DekselRegel = createBoxWithEdges(new _three.BoxGeometry(DekselPlankBreedte, DekselPlankHoogte, Lengte + 2 * ZijkantPlankHoogte), KeperColorMat);
        DekselRegel.position.set(Xstart - i * Spacing, Ypos, Zpos);
        scene.add(DekselRegel);
        DekselRegels.push(DekselRegel);
    }
}
function DekselStaanders_GEN() {
    let Xstart = 0;
    let ZStart = Lengte / 2 + ZijkantPlankHoogte - DekselPlankBreedte / 2;
    let Spacing = (Lengte + 2 * ZijkantPlankHoogte - DekselPlankBreedte) / (AantalTussenPlanken - 1);
    let Ypos = BodemPlankHoogte + BlokHoogte + TussenPlankHoogte + DekPlankHoogte + Hoogte + 3 * DekselPlankHoogte / 2;
    for(let i = 0; i < AantalTussenPlanken; i++){
        let DekselStaander = createBoxWithEdges(new _three.BoxGeometry(Breedte + 4 * ZijkantPlankHoogte, DekselPlankHoogte, DekselPlankBreedte), KeperColorMat);
        DekselStaander.position.set(Xstart, Ypos, ZStart - i * Spacing);
        scene.add(DekselStaander);
        DekselStaanders.push(DekselStaander);
    }
}
//-----------------schaduwvlak toevoegen------------------------
if (ground) scene.remove(ground);
ground = new _three.Mesh(new _three.PlaneGeometry(30, 30), new _three.ShadowMaterial({
    color: 0xD3D3D3
}));
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
ground.position.y = -BodemPlankHoogte / 2;
scene.add(ground);
function UpdateModel() {
    VariabelenInLezen();
    OptiePlank();
    VerwijderOnderdelen();
    Bodem_GEN();
    Blokken_GEN();
    TussenPlanken_GEN();
    Dek_GEN();
    ZijkantStaanders_GEN();
    ZijkantRegels_Gen();
    KopStaanders_GEN();
    KopRegels_GEN();
    if (document.getElementById('DekselVerbergenCheck').checked) {
        DekselRegels_GEN();
        DekselStaanders_GEN();
    }
}
//
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
//-------------kist updaten bij aanpassing-----------
function setupEventListeners() {
    const elements = document.querySelectorAll("input, select, textarea");
    elements.forEach((el)=>{
        if (el.tagName === "INPUT") {
            if (el.type === "range") // Sliders live update bij input
            el.addEventListener("input", UpdateModel);
            else if (el.type === "text" || el.type === "number") {
                // Tekst/nummer: update bij blur of Enter
                el.addEventListener("blur", UpdateModel);
                el.addEventListener("keydown", (e)=>{
                    if (e.key === "Enter") UpdateModel();
                });
            } else if (el.type === "checkbox") // Checkbox update bij change
            el.addEventListener("change", UpdateModel);
        } else if (el.tagName === "SELECT") // Select update bij change
        el.addEventListener("change", UpdateModel);
    });
}
UpdateModel();
// Start eventlisteners
setupEventListeners();

},{"three":"dsoTF","three/examples/jsm/controls/OrbitControls.js":"45ipX"}]},["aTFBf","bUtj7"], "bUtj7", "parcelRequire94c2", {})

//# sourceMappingURL=Open_Krat.2324d685.js.map
