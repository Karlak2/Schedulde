$(document).ready(()=>{
    $('.schedbutton').click(()=>{
        var myTableArray = [];

        $(".entry tr").each(function() {
            var arrayOfThisRow = [];
            var tableData = $(this).find('td');
            if (tableData.length > 0) {
                tableData.each(function() { arrayOfThisRow.push($(this).text()); });
                myTableArray.push(arrayOfThisRow);
            }
        });
            console.log(myTableArray);
    })
})



$(document).ready(()=>{
    $('.schedbutton').click(()=>{
            $.ajax({
                url: 'http://localhost:3000/registration',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify( 
                    {'nteam':items.entry.rows.length-1,
                    'type':$('#champ-type').val(),
                    'roundcounter': $('#round-num').val(),
                    },JSON.stringify(myTableArray)
                ),
                processData: false,
                success: function( data, textStatus, jQxhr ){
                    console.log(data);
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });        
    })
})