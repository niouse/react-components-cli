var fs = require("fs");

var getApi = require('./get.search-menu-easy-mui.api');
var getApiTest = require('./get.search-menu-easy-mui.api.test')
var getComponent = require('./get.search-menu-easy-mui.component')
var getComponentTest = require('./get.search-menu-easy-mui.component.test')
var getComputeStyles = require('./get.search-menu-easy-mui.compute-styles')
var getComponentHOC = require('./get.search-menu-easy-mui')
var getMocks = require('./get.search-menu-easy-mui.mocks')
var getDefaultStylesOptions = require('./get.search-menu-easy-mui.styles-options.default')
var getDefaultStyles = require('./get.search-menu-easy-mui.styles.default')
var getStylesService = require('./get.search-menu-easy-mui.styles.service')
var getStylesServiceTest = require('./get.search-menu-easy-mui.styles.service.test')
var getTemplate = require('./get.search-menu-easy-mui.template')
var getTemplateTest = require('./get.search-menu-easy-mui.template.test')
var getText = require('./get.search-menu-easy-mui.text')
var getTextService = require('./get.search-menu-easy-mui.text.service')
var getTextServiceTest = require('./get.search-menu-easy-mui.text.service.test')


module.exports = function(name, lowerName){   
    console.log('Creating directories tree...');
    fs.mkdirSync(process.cwd()+`/${lowerName}`);
	fs.mkdirSync(process.cwd()+`/${lowerName}/template`);
	fs.mkdirSync(process.cwd()+`/${lowerName}/styles`);
	fs.mkdirSync(process.cwd()+`/${lowerName}/text`);
	fs.mkdirSync(process.cwd()+`/${lowerName}/services`);
	fs.mkdirSync(process.cwd()+`/${lowerName}/api`);
	fs.mkdirSync(process.cwd()+`/${lowerName}/components`);
	fs.mkdirSync(process.cwd()+`/${lowerName}/test-files`);
	console.log('Creating files...');
	fs.writeFileSync(process.cwd()+`/${lowerName}/${lowerName}.jsx`, getComponentHOC(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/${lowerName}.component.jsx`, getComponent(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/api/${lowerName}.api.jsx`, getApi(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/services/${lowerName}.styles.service.jsx`, getStylesService(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/services/${lowerName}.text.service.jsx`, getTextService(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/styles/${lowerName}.styles.default.js`, getDefaultStyles(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/styles/${lowerName}.styles-options.default.js`, getDefaultStylesOptions(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/styles/${lowerName}.compute-styles.js`, getComputeStyles(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/template/${lowerName}.template.jsx`, getTemplate(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/text/${lowerName}.text.en.js`, getText(name, lowerName, 'en'));
	fs.writeFileSync(process.cwd()+`/${lowerName}/text/${lowerName}.text.fr.js`, getText(name, lowerName, 'fr'));
	fs.writeFileSync(process.cwd()+`/${lowerName}/text/${lowerName}.text.js`, getText(name, lowerName, 'index'));
	fs.writeFileSync(process.cwd()+`/${lowerName}/test-files/${lowerName}.api.test.js`, getApiTest(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/test-files/${lowerName}.styles.service.test.js`, getStylesServiceTest(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/test-files/${lowerName}.template.test.js`, getTemplateTest(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/test-files/${lowerName}.component.test.js`, getComponentTest(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/test-files/${lowerName}.text.service.test.js`, getTextServiceTest(name, lowerName));
	fs.writeFileSync(process.cwd()+`/${lowerName}/test-files/${lowerName}.mocks.js`, getMocks(name, lowerName));
}