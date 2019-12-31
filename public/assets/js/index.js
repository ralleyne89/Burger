$(document).ready(function(){
    $('#createburger').on('click', function(){
        var name = $("#burgername").val()
        console.log(name)

        // ajax call to the route method post
        $.ajax({
            method: "POST",
            url: "/api/burger/" + name,
            type: "JSON"
        })
    })
})