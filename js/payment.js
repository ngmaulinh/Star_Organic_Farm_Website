$(document).ready(function () {
    
    if (localStorage.getItem("cart") != null) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart)
        var s = [];
        var total = 0;
        $.each(cart, function (i, row) {
            var row_total = row.price * row.qty;
            s.push("<tr><td>" + (i + 1) + "</td>");
            s.push("<td>" + row.name + "</td>");
            s.push("<td class='number'>$" + row.price + "</td>");
            s.push("<td class='number'>" + row.qty + "</td>");
            s.push("<td class='number'>$" + row_total + "</td>");

            s.push("</tr>");
            total += row_total;
        });
        $("#cartItem").html(s.join(" "));
        $("#cartTotal").html(total);
    }
})
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}