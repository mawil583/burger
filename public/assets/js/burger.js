console.log("before doc.ready jquery")
$(document).ready(function () {
    $(".devour").on("click", function () {
        console.log("is this jquery file being run?");
        let id = $(this).attr("data-id")
        console.log("the id of the onClick is: ", id);
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            success: function (data, status) {
                console.log(data)
            }
        })
        location.reload();
    })
})