// console.log(handTrack);

// const video = document.getElementById('myvideo');
// const canvas = document.getElementById('mycanvas')

// let model;

// const options = {
//     flipHorizonal : false,
//     maxNumBoxes : 3,
//     scoreThreshold:0.7,
// }
// let context = canvas.getContext('2d');

// handTrack.load(options).then(function(modelData){
//     model = modelData;
//     console.log(model);

//     //起動
//     handTrack.startVideo(video).then(function(status){
//         if(status) {
//             console.log(status);
//         } else {
//             console.log('failed');
//         }
//     })
// })

// function startDetection()
// {
//     model.detect(video.then((predictions) => {
//         model.renderPredictions(predictions, canvas, context,video);

//         requestAnimationFrame(startDetection);
//     }))
// }

console.log(handTrack);

const video = document.getElementById("myvideo");
const canvas = document.getElementById("mycanvas");
let model;

const options = {
  flipHorizontal: false, //水平方向反転
  maxNumBoxes: 3, //検出ボックスの最大数
  scoreThreshold: 0.7, //予測信頼度のしきい値
};

let context = canvas.getContext("2d");

handTrack.load(options).then(function (modelData) {
  model = modelData;
  console.log(model);

  //webカメラを起動する
  handTrack.startVideo(video).then(function (status) {
    if (status) {
      console.log(status);
      startDetection();
    } else {
      console.log("failed");
    }
  });
});

function startDetection() {
  model.detect(video).then((predections) => {
    model.renderPredictions(predections, canvas, context, video);

    //「手」の検出と結果の出力を繰り返し実行する
    requestAnimationFrame(startDetection);
  });
}
var first = document.getElementById('inComent')
var button = document.getElementById('button');
var offbutton = document.getElementById('buttonoff')
var coment = document.getElementById('coment')
second = document.getElementById('second');

button.addEventListener('click',function(){
    canvas.style.display = 'block'
    button.style.display = 'none'
    offbutton.style.display = 'block'
    coment.style.display = 'block'
    
})
offbutton.addEventListener('click',function(){
    canvas.style.display = 'none'
    button.style.display = 'block'
    offbutton.style.display = 'none'
})

///////

coment.addEventListener('click',function(){
    first.style.display = 'none'
    second.style.display = 'block'
})
