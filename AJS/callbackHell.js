// one call back looks like this

// function apiCall(){
//     setTimeout(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{response.json()
//             .then(data=>{
//                 for(let trial of data.splice(0,5)){
//                     console.log(trial.title);
//                 }
//             })
//         }).catch(error=>console.error(error));
//     },1000)
// }

// apiCall();   

// so now in simple just imagine how difficult it could be debugg the entire code and manage the code too 
function apicalling(){

    // all are taking place synchrously so need to need to do asynchronous operation
    setTimeout(()=>{
    console.log('call from api1');
    setTimeout(()=>{
        console.log('call from api2');
        setTimeout(()=>{
            console.log('call from api3');
            setTimeout(()=>{
                console.log('call from api 4');
            },5000);
        },4000);
    },6000);
    },2000);
}

apicalling();