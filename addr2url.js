$.fn.addr2url=function(addr,google,appleClass,googleClass) {
    var md = window.navigator.userAgent
    addr=addr.replace(/ /g,'+')
    console.log(md)
    if (!appleClass) {
        appleClass='btn'
    }
    
    if (!googleClass) {
        googleClass='btn btn-success'
    }
    
    if(md.match(/Macintosh/g)){
        $(this).append('<a class="'+appleClass+'" href="http:maps.apple.com/?daddr='+addr+'">Directions Via Apple Maps</a>')
        if (google==true) {
            $(this).append('<a class="'+googleClass+'" href="http:maps.google.com/?daddr='+addr+'">Directions Via Google Maps</a>')
        }
    }
    else if(!md.match(/Apple/g)||!md.match(/Mobile/g)){
        $(this).append('<a class="'+googleClass+'" href="http:maps.google.com/?daddr='+addr+'">Directions Via Google Maps</a>')
        return
    }
    
    if (md.match(/Apple/g)) {
        $(this).append('<a class="'+appleClass+'" href="http:maps.apple.com/?daddr='+addr+'">Directions Via Apple Maps</a>')
        if (google==true) {
            $(this).append('<a class="'+googleClass+'" href="comgooglemaps://?daddr='+addr+'">Directions Via Google Maps</a>')
        }
    }
    else{
        $(this).append('<a class="'+googleClass+'" href="comgooglemaps://?daddr='+addr+'">Directions Via Google Maps</a>')
    }

};