 simplest repro I could devise  …
```
npm install
npm start
```
browse to http://localhost:4444

see the following in the browser console
```
util@0.0.0:584 Uncaught TypeError: Cannot read property 'prototype' of undefined
    at Object.inherits (util@0.0.0:584)
    at Number.<anonymous> (delayed-stream@1.0.0:18)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (combined-stream@1.0.5:6)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (form-data@2.2.0:5)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (superagent@3.5.2:11)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (auth0-js@8.7.0:497)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (auth0-js@8.7.0:21)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (auth0-js@8.7.0:4)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (auth0-lock@10.17.0:1566)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (auth0-lock@10.17.0:931)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (auth0-lock@10.17.0:147)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (auth0-lock@10.17.0:8)
    at c (password-sheriff@1.1.0:627)
    at w.require (password-sheriff@1.1.0:627)
    at Number.<anonymous> (index.jsx:3)
    at c (password-sheriff@1.1.0:627)
    at Function.r.import (password-sheriff@1.1.0:627)
    at index.jsx:3
    at index.jsx:3
```
