 $(document).ready(function(){
    $('#advanced-search').hide();

    $('#advancedSearchButton').click(function( event ) {
        $('#advanced-search').show();
        $('#content').hide();

        event.stopPropagation();
    })
 });