!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"undefined"==typeof window.console&&(window.console={}),"undefined"==typeof window.console.emulated&&("function"==typeof window.console.log?window.console.hasLog=!0:("undefined"==typeof window.console.log&&(window.console.log=function(){}),window.console.hasLog=!1),"function"==typeof window.console.debug?window.console.hasDebug=!0:("undefined"==typeof window.console.debug&&(window.console.debug=window.console.hasLog?function(){for(var e=["console.debug:"],n=0;n<arguments.length;n++)e.push(arguments[n]);window.console.log.apply(window.console,e)}:function(){}),window.console.hasDebug=!1),"function"==typeof window.console.warn?window.console.hasWarn=!0:("undefined"==typeof window.console.warn&&(window.console.warn=window.console.hasLog?function(){for(var e=["console.warn:"],n=0;n<arguments.length;n++)e.push(arguments[n]);window.console.log.apply(window.console,e)}:function(){}),window.console.hasWarn=!1),"function"==typeof window.console.error?window.console.hasError=!0:("undefined"==typeof window.console.error&&(window.console.error=function(){var e="An error has occured.";if(window.console.hasLog){for(var n=["console.error:"],t=0;t<arguments.length;t++)n.push(arguments[t]);window.console.log.apply(window.console,n),e="An error has occured. More information is available in your browser's javascript console."}for(var t=0;t<arguments.length&&"string"==typeof arguments[t];++t)e+="\n"+arguments[t];throw"undefined"!=typeof Error?new Error(e):e}),window.console.hasError=!1),"function"==typeof window.console.trace?window.console.hasTrace=!0:("undefined"==typeof window.console.trace&&(window.console.trace=function(){window.console.error("console.trace does not exist")}),window.console.hasTrace=!1),window.console.emulated=!0),jQuery.browser||(jQuery.uaMatch=function(e){e=e.toLowerCase();var n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}},matched=jQuery.uaMatch(navigator.userAgent),browser={},matched.browser&&(browser[matched.browser]=!0,browser.version=matched.version),browser.chrome?browser.webkit=!0:browser.webkit&&(browser.safari=!0),jQuery.browser=browser),e.appendStylesheet=e.appendStylesheet||function(n,t){if(!document.body)return setTimeout(function(){e.appendStylesheet.apply(e,[n,t])},500),e;var o="stylesheet-"+n.replace(/[^a-zA-Z0-9]/g,""),i=e("#"+o);if("undefined"==typeof t&&(t=!1),1===i.length){if(!t)return e;i.remove()}var r=document.getElementsByTagName(e.browser.safari?"head":"body")[0],s=document.createElement("link");return s.type="text/css",s.rel="stylesheet",s.media="screen",s.href=n,s.id=o,r.appendChild(s),e},e.appendScript=e.appendScript||function(n,t){if(!document.body)return setTimeout(function(){e.appendScript.apply(e,[n,t])},500),e;var o="script-"+n.replace(/[^a-zA-Z0-9]/g,""),i=e("#"+o);if("undefined"==typeof t&&(t=!1),1===i.length){if(!t)return e;i.remove()}var r=document.getElementsByTagName(e.browser.safari?"head":"body")[0],s=document.createElement("script");return s.type="text/javascript",s.src=n,s.id=o,r.appendChild(s),e},e.fn.findAndSelf=e.fn.findAndSelf||function(n){var t=e(this);return t.find(n).andSelf().filter(n)},Number.prototype.replace=Number.prototype.replace||function(){var e=String(this);return e.replace.apply(this,arguments)},e.SyntaxHighlighter?window.console.warn("SyntaxHighlighter has already been defined..."):e.SyntaxHighlighter={config:{load:!0,highlight:!0,debug:!1,wrapLines:!0,lineNumbers:!0,stripEmptyStartFinishLines:!0,stripInitialWhitespace:!0,alternateLines:!1,defaultClassname:"highlight",theme:"balupton",themes:["balupton"],addSparkleExtension:!0,prettifyBaseUrl:"js",baseUrl:"css"},init:function(n){var t=this,o=t.config,i=o.baseUrl;return"/"===i[i.length-1]&&(o.baseUrl=i.substr(0,i.length-2)),delete i,e.extend(!0,t.config,n||{}),e.Sparkle&&e.Sparkle.addExtension("syntaxhighlighter",function(){e(this).syntaxHighlight()}),e.fn.syntaxHighlight=e.fn.SyntaxHighlight=t.fn,o.load&&t.load(),o.highlight&&t.highlight(),this},load:function(){var n=this,t=n.config,o=t.prettifyBaseUrl,i=t.baseUrl,r=t.themes;return n.loaded()||(e.appendScript(o+"/lib/prettify.js"),e.appendStylesheet(i+"/prettify.css"),e.appendStylesheet(i+"/prettify/style.css"),e.each(r,function(n,t){e.appendStylesheet(i+"/prettify/theme-"+t+".css")}),e.browser.msie&&e.appendStylesheet(i+"/prettify/ie.css"),n.loadedExtras=!0),this},loadedExtras:!1,loaded:function(){return"undefined"!=typeof prettyPrint&&this.loadedExtras},determineLanguage:function(e){for(var n=null,t=/lang(uage)?-([a-z0-9]+)/g,o=t.exec(e);null!==o;)n=o[2],o=t.exec(e);return n},fn:function(){var n=e.SyntaxHighlighter,t=(n.config,e(this));return e.SyntaxHighlighter.highlight({el:t}),this},highlight:function(n){"object"!=typeof n&&(n={});var t=this,o=t.config,i=n.el||!1;if(i instanceof jQuery||(i=e("body")),!t.loaded())return o.debug&&window.console.debug("SyntaxHighlighter.highlight: Chosen SyntaxHighlighter is not yet defined. Waiting 1200 ms then trying again."),void setTimeout(function(){t.highlight.apply(t,[n])},1200);var r=o.defaultClassname,s="";"array"==typeof r?(s="."+r.join(",."),r=r.join(" ")):(r=String(r),s="."+r.replace(" ",",.")),"."!==s&&r||(window.console.error("SyntaxHighlighter.highlight: Invalid defaultClassname.",[this,arguments],[o.defaultClassname]),window.console.trace());var a=i.findAndSelf("code,pre").filter("[class*=lang],"+s).filter(":not(.prettyprint)");return a.css({"overflow-y":"visible","overflow-x":"visible","white-space":"pre"}).addClass("prettyprint "+r).each(function(){var n=e(this),o=n.attr("class"),i=t.determineLanguage(o);n.addClass("lang-"+i)}),o.lineNumbers&&a.addClass("linenums"),o.theme&&a.addClass("theme-"+o.theme),o.alternateLines&&a.addClass("alternate"),prettyPrint(),o.stripEmptyStartFinishLines&&a.find("li:first-child > :first-child, li:last-child > :first-child").each(function(){var n=e(this),t=n.html(),o=/^([\r\n\s\t]|\&nbsp;)*$/.test(t),i=n.parent(),r=n.siblings();if(o&&(0===r.length||1===r.length&&r.filter(":last").is("br"))){var i=n.parent(),s=i.val();i.next().val(s),i.remove()}}),o.stripInitialWhitespace&&a.find("li:first-child > :first-child").each(function(){var n=e(this),t=n.html(),o=t.match(/^(([\r\n\s\t]|\&nbsp;)+)/)||[],i=o[1]||"";i.length&&n.parent().siblings().children(":first-child").add(n).each(function(){var n=e(this),t=n.html();t=t.replace(new RegExp("^"+i,"gm"),""),n.html(t)})}),o.wrapLines?a.css({"overflow-x":"hidden","overflow-y":"hidden","white-space":"pre-wrap","max-height":"none"}):a.css({"overflow-x":"auto","overflow-y":"auto","white-space":"normal","max-height":"500px"}),this}}});