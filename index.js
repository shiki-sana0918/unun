let unko = 'Hello!';

unko = 'hell!!';



const bigUnko = 'hehehehe';

let inoki = ['いーち！', 'にーい！', 'さーん！', 'ダー！'];
// console.log(inoki[0]);

// let index = 0;
// while(index < inoki.length) {
//     console.log(inoki[index]);
//     index++;

// }

// if(inoki.length > 5){
//     console.log('ボンバイエ！');
// }else {
//     console.log('ボンバ。。。！');
// }


const test = (arg) => {

    if (inoki.length > arg) {
        console.log('ボンバイエ！');
    } else {
        console.log('ボンバ。。。！');
    }
};

const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log('hello');

    }
};
document.getElementsByTagName('button')[0].addEventListener('click',()=> {
    window.alert('hello')
});




