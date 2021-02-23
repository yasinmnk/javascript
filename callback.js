 //console.log('ANFANG')
 //function yasinFUNC(){
 //  setTimeout(() =>{console.log('lets start buddy') }, 2000)
 //setTimeout(() => {console.log('welcome to js');},5000)}
 //yasinFUNC();

//const items= [1,2,3,4,5];
//items.forEach(item => {console.log(item)});
 
console.log('start');
function  loginUser(email, pasword, callback){

    setTimeout(() => {
        console.log('now we have data');
        callback({userEmail: email, userPassword:pasword});

    }, 3000);
}

function  getUserPhoto(email, callback){ 

    setTimeout(() => {
        console.log('our photos');
        callback(['photo1', 'photo2', 'photo3']);

    }, 5000);
}



setTimeout(() => {
const user =loginUser('ysnmnkharbiyeli.63@gmail.com',132345, user=>{
    console.log(user);
      getUserPhoto(user.userEmail, videos =>{
        console.log(videos);
    });
});


console.log('finish');
}, 3000);