//================
// load data ...
//================

$(document).ready(function () {

var datablog = [];
$.getJSON("js/blog.json")
    .done(function (result) {
        datablog = result;
        console.log(datablog);

//===========================
// xu ly lien ket chuyen trang
//===========================

    let s = [];
    $.each(datablog, function (i, row) {

        s.push("<div class='col-sm-6 col-sm-6 col-md-6 item'>");

        s.push("<div class='col-sm-6 col-sm-6 col-md-6 item'>");
        s.push(`<a href='#'> <img src='images/${row.image}' class='data-blog' data-id='${row.id}' /> </a>`);
        s.push("</div>");

        s.push("<div class='col-sm-6 col-sm-6 col-md-6 item'>");
        s.push("<br> DATE: " + row.date + "<br>");
        s.push(`<a href='#' class='data-blog' data-id='${row.id}'> <h2> ${row.name}</h2>  <br>  </a>`);
        s.push("</div>");

        s.push("</div>");
    });
    s.push("</div> </div>");
    console.log(datablog);
    $("#data-blog").html(s.join(" "));

})
.fail(function () {
    alert("Get data that bai ");
});
    $(document).on('click', '.data-blog', function () {
        let id = $(this).data('id')
        let product = datablog.filter(e => e.id == id)

        addModal(product[0])
        $('#modal-id').modal('show')
    })
});

function addModal(data) {
    let x = `   <div class="row">
                    <div class='col-md-6'> <img src='images/${data.image}' alt='' > </div>
                        <div class='col-md-6'>
                            <h3>${data.name}</h3>
                            <p> ${data.blog}</p>
                            <p> ${data.date}</p>
                        </div>
                    </div>
                    <div class="modal-footer" >
                        
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    
                    </div>
                    
                </div> `
    $('.modal-body').html(x)
}







