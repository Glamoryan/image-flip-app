$('i').click(function(){    
    if($(this).attr('id') === "horizontal"){       
        if($(this).nextAll('img').attr('class') === "horizontal"){
            $(this).nextAll('img').removeAttr('class');
        } 
        else {
            $(this).nextAll('img').removeAttr('class');
            $(this).nextAll('img').first().addClass('horizontal');
        }        
    }
    else if($(this).attr('id') === "vertical"){    
        if($(this).nextAll('img').attr('class') === "vertical"){
            $(this).nextAll('img').removeAttr('class');
        } 
        else{
            $(this).nextAll('img').removeAttr('class');    
            $(this).nextAll('img').first().addClass('vertical');
        }        
    }    
})