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
})({"cjcyu":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f88f2699050f7205";
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

},{}],"iIqzN":[function(require,module,exports,__globalThis) {
var _three = require("three");
var _orbitControlsJs = require("three/examples/jsm/controls/OrbitControls.js");
var _tweenModuleJs = require("three/examples/jsm/libs/tween.module.js");
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
camera.position.set(1.2, 1.2, 1.2);
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
// Materialen
const OSBColorMat = new _three.MeshStandardMaterial({
    color: 0x1b7101
});
const KeperColorMat = new _three.MeshStandardMaterial({
    color: 0x8e6103
});
const LatColorMat = new _three.MeshStandardMaterial({
    color: 0x6d4c08
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
//onderdelen
//bodem
let Blokken = [];
let BodemPlanken = [];
let Plaat;
//omranding
let Zijkanten = [];
let ZijRegels = [];
let ZijStaanders = [];
let Koppen = [];
let KopRegels = [];
let KopStaanders = [];
//deksel
let DeksepPlaat;
let Lengte;
let Breedte;
let Hoogte;
let AantalOnderLatten = 3;
let AantalTussenLatten = 3;
let AantalBovenlatten = 3;
let ExplodeFactor = 0;
function UpdateModel() {
    //input gebruiker ophalen
    Lengte = parseFloat(document.getElementById('LengteSlider').value) / 1000;
    Breedte = parseFloat(document.getElementById('BreedteSlider').value) / 1000;
    Hoogte = parseFloat(document.getElementById('HoogteSlider').value) / 1000;
    let dekselcheck = document.getElementById('DekselVerbergenCheck');
    //Afmetingen in Meten
    let PlaatDikte = 0.010;
    let DekPlank_H = 0.022;
    let DekPlank_B = 0.100;
    let BovenPlank_H = 0.022;
    let BovenPlank_B = 0.100;
    let TussenPlank_H = 0.022;
    let TussenPlank_B = 0.100;
    let Blok_H = 0.100;
    let Blok_B = 0.080;
    let Blok_L = 0.080;
    let Keper_H = 0.100;
    let Keper_B = 0.08;
    let Regel_B = 0.100;
    // Eerst verwijderen we de oude onderdelen
    Zijkanten.forEach((Zijkant)=>scene.remove(Zijkant));
    BodemPlanken.forEach((plank)=>scene.remove(plank));
    Blokken.forEach((blok)=>scene.remove(blok));
    Koppen.forEach((Kop)=>scene.remove(Kop));
    ZijStaanders.forEach((ZijStaander)=>scene.remove(ZijStaander));
    ZijRegels.forEach((ZijRegel)=>scene.remove(ZijRegel));
    KopRegels.forEach((KopRegel)=>scene.remove(KopRegel));
    KopStaanders.forEach((KopStaander)=>scene.remove(KopStaander));
    if (Plaat) scene.remove(Plaat);
    if (DeksepPlaat) scene.remove(DeksepPlaat);
    //---------------Onderste Planken generenen---------------------------
    let startZ = -(Lengte - BovenPlank_B) / 2;
    let spacingZ = (Lengte - BovenPlank_B) / (AantalOnderLatten - 1);
    for(let i = 0; i < AantalOnderLatten; i++){
        let zPos = startZ + i * spacingZ;
        let BodemPlank = createBoxWithEdges(new _three.BoxGeometry(Breedte, BovenPlank_H, BovenPlank_B), KeperColorMat);
        BodemPlank.position.set(0, -Keper_H - PlaatDikte / 2 - BovenPlank_H / 2 - 1.2 * ExplodeFactor, zPos);
        scene.add(BodemPlank);
        BodemPlanken.push(BodemPlank);
    }
    //-----------------Blokken genereren op een grid---------------------
    let startX = -(Breedte - Blok_B) / 2;
    let spacingX = (Breedte - Blok_B) / (AantalTussenLatten - 1);
    startZ = -(Lengte - Blok_B) / 2;
    spacingZ = (Lengte - Blok_B) / (AantalOnderLatten - 1);
    for(let i = 0; i < AantalTussenLatten; i++)for(let j = 0; j < AantalOnderLatten; j++){
        let xPos = startX + i * spacingX;
        let zPos = startZ + j * spacingZ;
        let blok = createBoxWithEdges(new _three.BoxGeometry(Blok_L, Blok_H, Blok_B), KeperColorMat);
        blok.position.set(xPos, -Blok_H / 2 - PlaatDikte / 2 - 1 * ExplodeFactor, zPos);
        scene.add(blok);
        Blokken.push(blok);
    }
    //*****************BodemPlaat***********************
    Plaat = createBoxWithEdges(new _three.BoxGeometry(Breedte, PlaatDikte, Lengte), KeperColorMat);
    // Positioneren onder de kist
    Plaat.position.set(0, 1.2 * ExplodeFactor, 0);
    // Toevoegen aan de scene en de array
    scene.add(Plaat);
    //-----------------------koppen-----------------------------
    for(let i = 0; i < 2; i++){
        let kop = createBoxWithEdges(new _three.BoxGeometry(Breedte - 2 * PlaatDikte, Hoogte, PlaatDikte), KeperColorMat);
        // Positie van de plaat instellen
        let zPositie = Lengte / 2 - PlaatDikte / 2 + ExplodeFactor;
        if (i === 1) zPositie = -(Lengte / 2 - PlaatDikte / 2 + ExplodeFactor); // Maak de z-positie negatief voor de tweede plaat
        kop.position.set(0, Hoogte / 2 + PlaatDikte / 2, zPositie);
        // Toevoegen aan de scene en de array
        scene.add(kop);
        Koppen.push(kop);
    }
    //------------- Koppen versteviging -------------
    startX = -(Breedte - Regel_B + 2 * PlaatDikte) / 2;
    spacingX = (Breedte - Regel_B + 2 * PlaatDikte) / (AantalTussenLatten - 1);
    let staanderY = Hoogte / 2 - Regel_B + PlaatDikte / 2;
    const zOffset = Lengte / 2 + PlaatDikte / 2;
    for(let i = 0; i < AantalTussenLatten; i++){
        const xPos = startX + i * spacingX;
        for (let richting of [
            1,
            -1
        ]){
            const zPos = richting * zOffset;
            const KopStaander = createBoxWithEdges(new _three.BoxGeometry(Regel_B, Hoogte, PlaatDikte), LatColorMat);
            KopStaander.position.set(xPos, staanderY, zPos);
            scene.add(KopStaander);
            KopStaanders.push(KopStaander);
        }
    }
    //---------------KopRegels------------------------
    for(let i = 0; i < 2; i++){
        let KopRegel = createBoxWithEdges(new _three.BoxGeometry(PlaatDikte, Regel_B, Lengte), KeperColorMat);
        // Positie van de plaat instellen
        let xPositie = (Breedte + PlaatDikte) / 2 + ExplodeFactor;
        if (i === 1) xPositie = -((Breedte + PlaatDikte) / 2 + ExplodeFactor); // Maak de z-positie negatief voor de tweede plaat
        KopRegel.position.set(xPositie, Hoogte + PlaatDikte / 2 - Regel_B / 2, 0);
        // Toevoegen aan de scene en de array
        scene.add(KopRegel);
        KopRegels.push(KopRegel);
    }
    //---------------- Zijkanten ----------------
    for (let richting of [
        1,
        -1
    ]){
        const xPositie = richting * ((Breedte - PlaatDikte) / 2 + ExplodeFactor);
        const zijkant = createBoxWithEdges(new _three.BoxGeometry(PlaatDikte, Hoogte, Lengte), KeperColorMat);
        zijkant.position.set(xPositie, Hoogte / 2 + PlaatDikte / 2, 0);
        scene.add(zijkant);
        Zijkanten.push(zijkant);
    }
    //------------- Zijkanten versteviging -------------
    //---------------ZijStaanders-------------------------
    startZ = -(Lengte - Regel_B) / 2;
    spacingZ = (Lengte - Regel_B) / (AantalOnderLatten - 1);
    staanderY = Hoogte / 2 - Regel_B + PlaatDikte / 2;
    let staanderX = Breedte / 2 + PlaatDikte / 2 + 1.2 * ExplodeFactor;
    for(let i = 0; i < AantalOnderLatten; i++){
        const zPos = startZ + i * spacingZ;
        for (let richting of [
            1,
            -1
        ]){
            const ZijStaander = createBoxWithEdges(new _three.BoxGeometry(PlaatDikte, Hoogte, Regel_B), LatColorMat);
            ZijStaander.position.set(richting * staanderX, staanderY, zPos);
            scene.add(ZijStaander);
            ZijStaanders.push(ZijStaander);
        }
    }
    //---------------- Zijregels ----------------
    const regelBreedte = Breedte + 2 * PlaatDikte;
    const regelHoogte = Regel_B;
    const regelDiepte = PlaatDikte;
    const regelY = Hoogte - regelHoogte / 2 + PlaatDikte / 2;
    const regelZOffset = (Lengte + PlaatDikte) / 2 + ExplodeFactor;
    for (let richting of [
        1,
        -1
    ]){
        const zPos = richting * regelZOffset;
        const ZijRegel = createBoxWithEdges(new _three.BoxGeometry(regelBreedte, regelHoogte, regelDiepte), KeperColorMat);
        ZijRegel.position.set(0, regelY, zPos);
        scene.add(ZijRegel);
        ZijRegels.push(ZijRegel);
    }
    //----------------------Deksel-------------------------------
    //*****************Deksel***********************
    if (document.getElementById('DekselVerbergenCheck').checked === false) {
        // Positioneren onder de kist
        DeksepPlaat = createBoxWithEdges(new _three.BoxGeometry(Breedte + 2 * PlaatDikte, PlaatDikte, Lengte + 2 * PlaatDikte), KeperColorMat);
        DeksepPlaat.position.set(0, Hoogte + PlaatDikte + 1.2 * ExplodeFactor, 0);
        // Toevoegen aan de scene en de array
        scene.add(DeksepPlaat);
    }
    //-----------------schaduwvlak toevoegen------------------------
    if (ground) scene.remove(ground);
    ground = new _three.Mesh(new _three.PlaneGeometry(30, 30), new _three.ShadowMaterial({
        color: 0xD3D3D3
    }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    ground.position.y = -Hoogte / 2 - BovenPlank_H - 1.2 * ExplodeFactor;
    scene.add(ground);
}
//--------------------------------------------------
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
            else if (el.type === "radio") // Checkbox update bij change
            el.addEventListener("change", UpdateModel);
        } else if (el.tagName === "SELECT") // Select update bij change
        el.addEventListener("change", UpdateModel);
    });
}
UpdateModel();
// Start eventlisteners
setupEventListeners();

},{"three":"dsoTF","three/examples/jsm/controls/OrbitControls.js":"45ipX","three/examples/jsm/libs/tween.module.js":"HI0Qj"}],"HI0Qj":[function(require,module,exports,__globalThis) {
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Easing", ()=>Easing);
parcelHelpers.export(exports, "Group", ()=>Group);
parcelHelpers.export(exports, "Interpolation", ()=>Interpolation);
parcelHelpers.export(exports, "Sequence", ()=>Sequence);
parcelHelpers.export(exports, "Tween", ()=>Tween);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "default", ()=>exports);
parcelHelpers.export(exports, "getAll", ()=>getAll);
parcelHelpers.export(exports, "nextId", ()=>nextId);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "update", ()=>update);
var Easing = Object.freeze({
    Linear: Object.freeze({
        None: function(amount) {
            return amount;
        },
        In: function(amount) {
            return this.None(amount);
        },
        Out: function(amount) {
            return this.None(amount);
        },
        InOut: function(amount) {
            return this.None(amount);
        }
    }),
    Quadratic: Object.freeze({
        In: function(amount) {
            return amount * amount;
        },
        Out: function(amount) {
            return amount * (2 - amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount;
            return -0.5 * (--amount * (amount - 2) - 1);
        }
    }),
    Cubic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount * amount;
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        }
    }),
    Quartic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount * amount;
        },
        Out: function(amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount * amount * amount;
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        }
    }),
    Quintic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return 0.5 * amount * amount * amount * amount * amount;
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        }
    }),
    Sinusoidal: Object.freeze({
        In: function(amount) {
            return 1 - Math.sin((1.0 - amount) * Math.PI / 2);
        },
        Out: function(amount) {
            return Math.sin(amount * Math.PI / 2);
        },
        InOut: function(amount) {
            return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
        }
    }),
    Exponential: Object.freeze({
        In: function(amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function(amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            if ((amount *= 2) < 1) return 0.5 * Math.pow(1024, amount - 1);
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        }
    }),
    Circular: Object.freeze({
        In: function(amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function(amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        }
    }),
    Elastic: Object.freeze({
        In: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function(amount) {
            if (amount === 0) return 0;
            if (amount === 1) return 1;
            amount *= 2;
            if (amount < 1) return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        }
    }),
    Back: Object.freeze({
        In: function(amount) {
            var s = 1.70158;
            return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
        },
        Out: function(amount) {
            var s = 1.70158;
            return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function(amount) {
            var s = 2.5949095;
            if ((amount *= 2) < 1) return 0.5 * (amount * amount * ((s + 1) * amount - s));
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        }
    }),
    Bounce: Object.freeze({
        In: function(amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function(amount) {
            if (amount < 1 / 2.75) return 7.5625 * amount * amount;
            else if (amount < 2 / 2.75) return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            else if (amount < 2.5 / 2.75) return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            else return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
        },
        InOut: function(amount) {
            if (amount < 0.5) return Easing.Bounce.In(amount * 2) * 0.5;
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        }
    }),
    generatePow: function(power) {
        if (power === void 0) power = 4;
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 10000 ? 10000 : power;
        return {
            In: function(amount) {
                return Math.pow(amount, power);
            },
            Out: function(amount) {
                return 1 - Math.pow(1 - amount, power);
            },
            InOut: function(amount) {
                if (amount < 0.5) return Math.pow(amount * 2, power) / 2;
                return (1 - Math.pow(2 - amount * 2, power)) / 2 + 0.5;
            }
        };
    }
});
var now = function() {
    return performance.now();
};
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */ var Group = /** @class */ function() {
    function Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    Group.prototype.getAll = function() {
        var _this = this;
        return Object.keys(this._tweens).map(function(tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function() {
        this._tweens = {};
    };
    Group.prototype.add = function(tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    };
    Group.prototype.remove = function(tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    };
    Group.prototype.update = function(time, preserve) {
        if (time === void 0) time = now();
        if (preserve === void 0) preserve = false;
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) return false;
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while(tweenIds.length > 0){
            this._tweensAddedDuringUpdate = {};
            for(var i = 0; i < tweenIds.length; i++){
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) delete this._tweens[tweenIds[i]];
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    };
    return Group;
}();
/**
 *
 */ var Interpolation = {
    Linear: function(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) return fn(v[0], v[1], f);
        if (k > 1) return fn(v[m], v[m - 1], m - f);
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function(v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for(var i = 0; i <= n; i++)b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        return b;
    },
    CatmullRom: function(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) i = Math.floor(f = m * (1 + k));
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        } else {
            if (k < 0) return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            if (k > 1) return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function(p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function(n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: function() {
            var a = [
                1
            ];
            return function(n) {
                var s = 1;
                if (a[n]) return a[n];
                for(var i = n; i > 1; i--)s *= i;
                a[n] = s;
                return s;
            };
        }(),
        CatmullRom: function(p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        }
    }
};
/**
 * Utils
 */ var Sequence = /** @class */ function() {
    function Sequence() {}
    Sequence.nextId = function() {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}();
var mainGroup = new Group();
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */ var Tween = /** @class */ function() {
    function Tween(_object, _group) {
        if (_group === void 0) _group = mainGroup;
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._isDynamic = false;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        // eslint-disable-next-line
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._propertiesAreSetUp = false;
        this._goToEnd = false;
    }
    Tween.prototype.getId = function() {
        return this._id;
    };
    Tween.prototype.isPlaying = function() {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function() {
        return this._isPaused;
    };
    Tween.prototype.getDuration = function() {
        return this._duration;
    };
    Tween.prototype.to = function(target, duration) {
        if (duration === void 0) duration = 1000;
        if (this._isPlaying) throw new Error('Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.');
        this._valuesEnd = target;
        this._propertiesAreSetUp = false;
        this._duration = duration < 0 ? 0 : duration;
        return this;
    };
    Tween.prototype.duration = function(duration) {
        if (duration === void 0) duration = 1000;
        this._duration = duration < 0 ? 0 : duration;
        return this;
    };
    Tween.prototype.dynamic = function(dynamic) {
        if (dynamic === void 0) dynamic = false;
        this._isDynamic = dynamic;
        return this;
    };
    Tween.prototype.start = function(time, overrideStartingValues) {
        if (time === void 0) time = now();
        if (overrideStartingValues === void 0) overrideStartingValues = false;
        if (this._isPlaying) return this;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for(var property in this._valuesStartRepeat){
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time;
        this._startTime += this._delayTime;
        if (!this._propertiesAreSetUp || overrideStartingValues) {
            this._propertiesAreSetUp = true;
            // If dynamic is not enabled, clone the end values instead of using the passed-in end values.
            if (!this._isDynamic) {
                var tmp = {};
                for(var prop in this._valuesEnd)tmp[prop] = this._valuesEnd[prop];
                this._valuesEnd = tmp;
            }
            this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, overrideStartingValues);
        }
        return this;
    };
    Tween.prototype.startFromCurrentValues = function(time) {
        return this.start(time, true);
    };
    Tween.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overrideStartingValues) {
        for(var property in _valuesEnd){
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? 'array' : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') continue;
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) continue;
                // Handle an array of relative values.
                // Creates a local copy of the Array with the start value at the front
                var temp = [
                    startValue
                ];
                for(var i = 0, l = endValues.length; i < l; i += 1){
                    var value = this._handleRelativeValue(startValue, endValues[i]);
                    if (isNaN(value)) {
                        isInterpolationList = false;
                        console.warn('Found invalid interpolation list. Skipping.');
                        break;
                    }
                    temp.push(value);
                }
                if (isInterpolationList) // if (_valuesStart[property] === undefined) { // handle end values only the first time. NOT NEEDED? setupProperties is now guarded by _propertiesAreSetUp.
                _valuesEnd[property] = temp;
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                var nestedObject = startValue;
                for(var prop in nestedObject)_valuesStart[property][prop] = nestedObject[prop];
                // TODO? repeat nested values? And yoyo? And array values?
                _valuesStartRepeat[property] = startValueIsArray ? [] : {};
                var endValues = _valuesEnd[property];
                // If dynamic is not enabled, clone the end values instead of using the passed-in end values.
                if (!this._isDynamic) {
                    var tmp = {};
                    for(var prop in endValues)tmp[prop] = endValues[prop];
                    _valuesEnd[property] = endValues = tmp;
                }
                this._setupProperties(nestedObject, _valuesStart[property], endValues, _valuesStartRepeat[property], overrideStartingValues);
            } else {
                // Save the starting value, but only once unless override is requested.
                if (typeof _valuesStart[property] === 'undefined' || overrideStartingValues) _valuesStart[property] = startValue;
                if (!startValueIsArray) // eslint-disable-next-line
                // @ts-ignore FIXME?
                _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                if (isInterpolationList) // eslint-disable-next-line
                // @ts-ignore FIXME?
                _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                else _valuesStartRepeat[property] = _valuesStart[property] || 0;
            }
        }
    };
    Tween.prototype.stop = function() {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) return this;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) this._onStopCallback(this._object);
        return this;
    };
    Tween.prototype.end = function() {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    };
    Tween.prototype.pause = function(time) {
        if (time === void 0) time = now();
        if (this._isPaused || !this._isPlaying) return this;
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    };
    Tween.prototype.resume = function(time) {
        if (time === void 0) time = now();
        if (!this._isPaused || !this._isPlaying) return this;
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    };
    Tween.prototype.stopChainedTweens = function() {
        for(var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++)this._chainedTweens[i].stop();
        return this;
    };
    Tween.prototype.group = function(group) {
        if (group === void 0) group = mainGroup;
        this._group = group;
        return this;
    };
    Tween.prototype.delay = function(amount) {
        if (amount === void 0) amount = 0;
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function(times) {
        if (times === void 0) times = 0;
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function(amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function(yoyo) {
        if (yoyo === void 0) yoyo = false;
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function(easingFunction) {
        if (easingFunction === void 0) easingFunction = Easing.Linear.None;
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function(interpolationFunction) {
        if (interpolationFunction === void 0) interpolationFunction = Interpolation.Linear;
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    // eslint-disable-next-line
    Tween.prototype.chain = function() {
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++)tweens[_i] = arguments[_i];
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function(callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onEveryStart = function(callback) {
        this._onEveryStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function(callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function(callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function(callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function(callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */ Tween.prototype.update = function(time, autoStart) {
        var _this = this;
        var _a;
        if (time === void 0) time = now();
        if (autoStart === void 0) autoStart = true;
        if (this._isPaused) return true;
        var property;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime) return false;
            if (autoStart) this.start(time, true);
        }
        this._goToEnd = false;
        if (time < this._startTime) return true;
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) this._onStartCallback(this._object);
            this._onStartCallbackFired = true;
        }
        if (this._onEveryStartCallbackFired === false) {
            if (this._onEveryStartCallback) this._onEveryStartCallback(this._object);
            this._onEveryStartCallbackFired = true;
        }
        var elapsedTime = time - this._startTime;
        var durationAndDelay = this._duration + ((_a = this._repeatDelayTime) !== null && _a !== void 0 ? _a : this._delayTime);
        var totalTime = this._duration + this._repeat * durationAndDelay;
        var calculateElapsedPortion = function() {
            if (_this._duration === 0) return 1;
            if (elapsedTime > totalTime) return 1;
            var timesRepeated = Math.trunc(elapsedTime / durationAndDelay);
            var timeIntoCurrentRepeat = elapsedTime - timesRepeated * durationAndDelay;
            // TODO use %?
            // const timeIntoCurrentRepeat = elapsedTime % durationAndDelay
            var portion = Math.min(timeIntoCurrentRepeat / _this._duration, 1);
            if (portion === 0 && elapsedTime === _this._duration) return 1;
            return portion;
        };
        var elapsed = calculateElapsedPortion();
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) this._onUpdateCallback(this._object, elapsed);
        if (this._duration === 0 || elapsedTime >= this._duration) {
            if (this._repeat > 0) {
                var completeCount = Math.min(Math.trunc((elapsedTime - this._duration) / durationAndDelay) + 1, this._repeat);
                if (isFinite(this._repeat)) this._repeat -= completeCount;
                // Reassign starting values, restart by making startTime = now
                for(property in this._valuesStartRepeat){
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') this._valuesStartRepeat[property] = // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    if (this._yoyo) this._swapEndStartRepeatValues(property);
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) this._reversed = !this._reversed;
                this._startTime += durationAndDelay * completeCount;
                if (this._onRepeatCallback) this._onRepeatCallback(this._object);
                this._onEveryStartCallbackFired = false;
                return true;
            } else {
                if (this._onCompleteCallback) this._onCompleteCallback(this._object);
                for(var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++)// Make the chained tweens start exactly at the time they should,
                // even if the `update()` method was called way past the duration of the tween
                this._chainedTweens[i].start(this._startTime + this._duration, false);
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
        for(var property in _valuesEnd){
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) continue;
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) _object[property] = this._interpolationFunction(end, value);
            else if (typeof end === 'object' && end) // eslint-disable-next-line
            // @ts-ignore FIXME?
            this._updateProperties(_object[property], start, end, value);
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') // eslint-disable-next-line
                // @ts-ignore FIXME?
                _object[property] = start + (end - start) * value;
            }
        }
    };
    Tween.prototype._handleRelativeValue = function(start, end) {
        if (typeof end !== 'string') return end;
        if (end.charAt(0) === '+' || end.charAt(0) === '-') return start + parseFloat(end);
        return parseFloat(end);
    };
    Tween.prototype._swapEndStartRepeatValues = function(property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        else this._valuesStartRepeat[property] = this._valuesEnd[property];
        this._valuesEnd[property] = tmp;
    };
    return Tween;
}();
var VERSION = '23.1.1';
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */ var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */ var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add = TWEEN.add.bind(TWEEN);
var remove = TWEEN.remove.bind(TWEEN);
var update = TWEEN.update.bind(TWEEN);
var exports = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    getAll: getAll,
    removeAll: removeAll,
    add: add,
    remove: remove,
    update: update
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["cjcyu","iIqzN"], "iIqzN", "parcelRequire94c2", {})

//# sourceMappingURL=Chinese_kist.050f7205.js.map
