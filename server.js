const express = require('express');
const server = express();
const compression = require('compression');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const config = require('./webpack.client.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const path = require('path');
const fs = require('fs');

const {createBundleRenderer} = require('vue-server-renderer');
const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const favicon = require('serve-favicon');

const createRenderer = bundle => createBundleRenderer(bundle, {
    runInNewContext: false,
    template
});

let renderer = createRenderer(require('./dist/vue-ssr-server-bundle.json'));

server.use(compression());
server.use(express.static(path.join(__dirname, '/dist')));
server.use(favicon(path.join(__dirname, 'favicon.ico')));

if (NODE_ENV === 'development') {
    server.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        logLevel: 'warn'
    }));

    server.use(require("webpack-hot-middleware")(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 2000
    }));
}

server.get('*', async (req, res) => {
    console.log(req.url)
    const context = {
        url: req.url || '/',
    }

    let html;

    try {
        html = await renderer.renderToString(context);
    } catch (err) {
        if (err.code === 404) {
            return res.status(404).send('404 | Page Not Found');
        }
        return res.status(500).send('500 | Internal Server Error');
    }

    res.end(html)
})

server.listen(5000, () => {
    console.log(`Server started`)
});

