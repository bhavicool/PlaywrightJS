function printInfo(userName,callback){
    //using setTimeOut predefined JS Async method
    setTimeout(function(){
    console.log('Hello:'+userName)
    callback('pls call me back');
    })
}

function displayMessage(msg){
    console.log('Message is:'+msg)
}

printInfo('Dravid',displayMessage)