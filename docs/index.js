require('ckeditor-ruler');

window.onload = function() {
    CKEDITOR.plugins.addExternal('ruler', '/node_modules/ckeditor-ruler/', 'plugin.js');
    CKEDITOR.config.extraPlugins = 'ruler';
    CKEDITOR.replace('editor');
};
