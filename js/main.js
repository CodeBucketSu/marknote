function init(){
    global.$(global.window.document).ready(function(){
        var editor = require("./../js/editor.js");
        var textEditor = global.$('#editor');
        textEditor.bind('input propertychange', function() {
            editor.reload();
        });
        
        // file type association
        if(global.gui.App.argv.length > 0){
            editor.loadFile(global.gui.App.argv[0]);
        }
    });
    var menu = require("./../js/menu.js");
    menu.initMenu();
}