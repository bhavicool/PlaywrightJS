//Basic callback without async process
//we can use any name instead of callback below
function greet(name,callback)
{
    console.log('Hello'+name);
    callback();
}

//callback function
function welcome()
{
    console.log('Welcome');
}

greet('Dravid',welcome)
