$(document).ready(function() {

    $("input[name=phone]").inputmask({
        "mask": "+ 9 (999) 999-9999",
        showMaskOnHover: false,
        "oncomplete": function(){
          var value = $(this).val();
          $(this).val(value.replace(/(\+)(\s|)(8)/g,"$1$1"+7))
        }
    });

    $.fancybox.defaults.touch = false;

    jQuery.validator.addMethod("checkMask", function(value, element) {
     return /\+ \d{1} \(\d{3}\) \d{3}-\d{4}/g.test(value); 
      });

      $(".sectionForm").each(function() {
        $(this).validate({
          rules: {
            phone: {
              checkMask: true
            },
            email: {
              required: true,
              email: true
            }
          }
        });
      });
      $("#modalform").validate({
        rules: {
          phone: {
            checkMask: true
          },
          email: {
            required: true,
            email: true
          }
        }
      });

    $("a[data-fancybox]").click(function(){
      var title = $(this).attr("title");
      $("#modalTitle").text(title);
      var btntext = $(this).data("bttitle");
      $("#send-check").text(btntext);
      if (title != undefined)
      {
        $("#modaltitle").text(title)
      }
      
      if (btntext != undefined)
      {
        $("#modalsubmit").text(btntext)
      }
    });
});