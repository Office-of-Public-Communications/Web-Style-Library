"use strict";!function($){$(document).on("change",'.file-field input[type="file"]',function(e){for(var i=$(e.target),n=i.closest(".file-field"),t=n.find("input.file-path"),f=i[0].files,l=[],a=0;a<f.length;a++){var r=f[a].name;l.push(r)}t.val(l.join(", ")),t.trigger("change")})}(jQuery);