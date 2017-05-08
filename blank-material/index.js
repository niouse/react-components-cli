var fs = require("fs");

var getApi = require('./getApi');
var getApiTest = require('./getApiTest')
var getComponent = require('./getComponent')
var getComponentHOC = require('./getComponentHOC')
var getComponentTest = require('./getComponentTest')
var getComputeStyles = require('./getComputeStyles')
var getDefaultStyles = require('./getDefaultStyles')
var getDefaultStylesOptions = require('./getDefaultStylesOptions')
var getStylesService = require('./getStylesService')
var getStylesServiceTest = require('./getStylesServiceTest')
var getTemplate = require('./getTemplate')
var getTemplateTest = require('./getTemplateTest')
var getText = require('./getText')
var getTextService = require('./getTextService')
var getTextServiceTest = require('./getTextServiceTest')


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
}