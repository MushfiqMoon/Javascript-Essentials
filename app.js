

function set(){
    var elements = document.getElementsByName('cssProperty');

    for ( var i = 0; i < elements.length; i++){
       
        var cssProperty = elements[i].getAttribute('id');
        
        var cssValue = elements[i].value;

        // console.log(cssProperty,cssValue);

        var newstyle = document.getElementById('modify');

        newstyle.style[ cssProperty ] = cssValue;

        // console.log(newstyle);
        
        
        
    }
    
}




document.getElementById('set').addEventListener('click',set);