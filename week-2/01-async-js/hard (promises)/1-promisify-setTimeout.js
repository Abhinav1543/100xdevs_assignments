/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve => {
        setTimeout(resolve,n*1000);
    });

    function xoxox(duration){
        const p = new Promise(function(resolve){
            setTimeout(resolve,duration);
        });
        return p;
    }

    xoxox(1000).then(function(){
        console.log(doen);
    })
}


module.exports = wait;
