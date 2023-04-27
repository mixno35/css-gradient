function goClipboard(_text, _message = 'Copied!') {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(_text);
        return;
    }
    navigator.clipboard.writeText(_text).then(function() {
        console.log("Copied!");
        alert(_message);
    }, function(err) {
        console.log('Async: Could not copy text: ' + err, 'error');
    });
}

function fallbackCopyTextToClipboard(_text, _message) {
    var textArea = document.createElement("textarea");
    textArea.value = _text;
    
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log("Copied!");
        alert(_message);
    } catch (err) {
        console.log('Async: Could not copy text: ' + err, 'error');
    }
  
    document.body.removeChild(textArea);
}

function makeid(length) {
    var result = '';
    var characters = 'qwertyuiopasdfghjklzxcvbnm';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}