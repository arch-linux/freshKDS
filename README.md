<h1 align="center">
    <img src="logo.svg" alt="Logo" width="125" height="125">
  </a>
</h1>

<div align="center">
  Seemless KDS integration for your next project!
  <br />
  <br />
  <a href="https://github.com/arch-linux/freshKDS/issues/new?assignees=arch-linux&labels=triage&template=bug_report.md&title=">Report a Bug</a>
  ·
  <a href="https://github.com/arch-linux/freshKDS/issues/new?assignees=&labels=&template=feature_request.md&title=">Request a Feature</a>
</div>

<div align="center">
<br />
</div>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
    


# freshKDS
 FreshKDS npmjs implementation in Node.JS

# NPM
https://www.npmjs.com/package/freshkds
```
npm install freshkds
```

# Import
```
var freshKDS = require("freshkds");
```

# Token Based Methods
Before running any functions you need to create a new token to pass later.
freshKDS.token requires three parameters,

1. demo or production
2. Your API key
3. Return method in which you will store your token for later use.

```
var freshKDS = require("freshkds");
var token;
freshKDS.token("demo",APIKEY,(returns) => {
    token = returns;
});
```



