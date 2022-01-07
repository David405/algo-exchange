const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app = express();

    app.use(
        createProxyMiddleware('ledger/account',
            {
               target: 'https://api-eu1.tatum.io/v3/',
               changeOrigin: true 
            }
        )
    )
}