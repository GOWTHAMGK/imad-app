//counter
var button = document.getElementById('counter');

button.onclick = function() {
    var request = new XMLhttpRequest();
    
    request.onreadystatechange = function() {
        
       if(request.readystate === XMLhttpRequest.DONE) {
           
           if(request.status === 200) {
               var counter =request.responceText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       } 
    };
};