$(document).ready((function(){var e=function(e){$(".contact-error-message").html(e).show()},t=function(t){var s="";$.each(t,(function(e,t){""!==s&&(s+="<br />"),s+=t})),e(s)};$("input[name=subject_id]").on("click",(function(){var e=$(this).val();$(this).prop("checked",!0),$("input[name=subject_id]").each((function(t,s){$(s).val()!==e&&$(s).prop("checked",!1)}))})),$((function(){0===$("input[name=subject_id]:checked").length&&$("input[name=subject_id]").eq(0).prop("checked",!0)})),$(".contact-form").on("submit",(function(s){s.preventDefault(),s.stopPropagation();var n=$(this),o=$(".contact-form button[type=submit]");o.addClass("button-loading"),$(".contact-success-message").html("").hide(),$(".contact-error-message").html("").hide(),$.ajax({type:"POST",cache:!1,url:$(this).closest("form").prop("action"),data:new FormData(n.get(0)),contentType:!1,processData:!1,success:function(t){var s;t.error?e(t.message):(n.find("input[type=text]").val(""),n.find("input[type=email]").val(""),n.find("textarea").val(""),s=t.message,$(".contact-success-message").html(s).show()),o.removeClass("button-loading"),"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha()},error:function(s){var n;"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),o.removeClass("button-loading"),void 0!==(n=s).errors&&n.errors.length?t(n.errors):void 0!==n.responseJSON?void 0!==n.responseJSON.errors?422===n.status&&t(n.responseJSON.errors):void 0!==n.responseJSON.message?e(n.responseJSON.message):$.each(n.responseJSON,(function(t,s){$.each(s,(function(t,s){e(s)}))})):e(n.statusText)}})}))}));
