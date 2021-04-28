/**
 * Script for AutoTabber
 * Handles Tab Keypress
 * @author MarcosBL <soy@marcosbl.com>
*/

/* DOKUWIKI:include taboverride.js */
/* DOKUWIKI:include taboverride.escape.js */

jQuery(window).load(function () {
    var textareas = document.getElementsByTagName('textarea');
    tabOverride.set(textareas).tabSize(0).autoIndent(true).escape(true);
});

jQuery(window).on('fastwiki:afterSwitch', function (evt, viewMode, isSectionEdit, prevViewMode) {
    var textareas = document.getElementsByTagName('textarea');
    tabOverride.set(textareas).tabSize(0).autoIndent(true).escape(true);
});
