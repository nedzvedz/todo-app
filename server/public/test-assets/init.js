!function(e){var t=e("#mainNav"),i=t.outerHeight();t.append('<button id="hideMenu"><span>Menu</span><i class="icon-arrow-down"></i></button>'),t.css({position:"absolute",top:"-"+i+"px"}),e("body").css("paddingTop",e("#hideMenu").outerHeight()),e("#hideMenu").on("click",function(){var n=e(this);n.hasClass("show")===!1?(t.animate({top:0}),n.text("Close").remove("icon-arrow-down").addClass("show").prepend('<i class="icon-arrow-up"></i>')):(t.animate({top:"-"+i+"px"}),e(this).text("Menu").remove("icon-arrow-up").removeClass("show").append('<i class="icon-arrow-down"></i>'))}),e.fn.autofillForm=function(t){return e(this).each(function(){e(this).find('input[type="text"], textarea').each(function(){var t=e(this),i=t.parent().prev("label");i.hasClass("formHide")&&(i=i.prev()),t.attr("placeholder",i.text()),i.hide()}).end().find("select").each(function(){e(this).prev("label").hide()}).end().find(".intakeFormINote").text("(Bold fields are required)")}),this},e("#intakeFormI, .genericIntakeFormClass, .intakeFormIII, #intakeFormIV").autofillForm()}(jQuery);