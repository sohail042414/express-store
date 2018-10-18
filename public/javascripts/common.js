function parepareAppForm(){

    var data = {
        title : $('#title').val(),
        short_description : $('#short_description').val(),
        description : $('#description').val(),
        package_id : $('#package_id').val(),
        url : $('#url').val(),
        playstore_url : $('#playstore_url').val(),
        status : $('#status').is(":checked"),
        special : $('#special').is(":checked"),
        featured : $('#featured').is(":checked")
    };
    
    return data;
}