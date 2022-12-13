
const data = [
    {
      "month": 1,
      "course": 62.9372,
      "change": "+0.0269",
      "currency": "USD"
    },
    {
      "month": 2,
      "course": 62.9103,
      "change": "+0.7254",
      "currency": "USD"
    },
    {
      "month": 3,
      "course": 30.33,
      "change": "-40.3455",
      "currency": "USD"
    },
    {
      "month": 4,
      "course": 61.7749,
      "change": "+0.6270",
      "currency": "USD"
    },
    {
      "month": 5,
      "course": 61.1479,
      "change": "+0.2676",
      "currency": "USD"
    },
    {
      "month": 6,
      "course": 59.2009,
      "change": "-1.666",
      "currency": "USD"
    }
] 

let canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');


for(let i = 0; i < data.length; i++){
   let month = data[i].month;
   let a = data[0].course *3.6;
   let b = data[1].course *3.6;
   let c = data[2].course *3.6;
   let d= data[3].course *3.6;
   let f = data[4].course *3.6;
   let g = data[5].course *3.6;

   console.log(data[5].course)
   ctx.beginPath()
   ctx.fillStyle="violet";
   ctx.fillRect(38,383-a,50,a);3
   ctx.fillStyle="indigo";
   ctx.fillRect(93,383-b,50,b);
   ctx.fillStyle="blue";
   ctx.fillRect(148,383-c,50,c);
   ctx.fillStyle="purple";
   ctx.fillRect(203,383-d,50,d);
   ctx.fillStyle="orange";
   ctx.fillRect(258,383-f,50,f);
   ctx.fillStyle="fuchsia";
   ctx.fillRect(313,384-g,50,g);
   ctx.stroke()

   //text
    ctx.beginPath()
    ctx.font = "normal 9px a"
    ctx.fillText(data[0].course,40,150);

    ctx.font = "normal 9px a"
    ctx.fillStyle="indigo";
    ctx.fillText(data[1].course,99,150);

    ctx.font = "normal 9px a"
    ctx.fillStyle="blue";
    ctx.fillText(data[2].course,154,270);

    ctx.font = "normal 9px a"
    ctx.fillStyle="purple";
    ctx.fillText(data[3].course,209,155);

    ctx.font = "normal 9px a"
    ctx.fillStyle="orange";
    ctx.fillText(data[4].course,264,158);

    ctx.font = "normal 9px a"
    ctx.fillStyle="fuchsia";
    ctx.fillText(data[5].course,319,165);
    

}


//figure

let canvas_figure = document.getElementById("canvas_figure");
var ctx = canvas_figure.getContext('2d');

ctx.beginPath()
    
    ctx.lineWidth = "5";
    ctx.moveTo(300,10)
    ctx.lineTo(265,100)

    ctx.moveTo(300,10);
    ctx.lineTo(335,100)
    
    ctx.moveTo(265,100);
    ctx.lineTo(145,100);

    ctx.moveTo(145,100);
    ctx.lineTo(245,150);
    
    ctx.moveTo(245,150);
    ctx.lineTo(200,250);

    ctx.moveTo(200,250);
    ctx.lineTo(300,180);
    
    ctx.moveTo(300,180);
    ctx.lineTo(400,250);


    ctx.moveTo(335,100);
    ctx.lineTo(455,100);

    ctx.moveTo(455,100);
    ctx.lineTo(355,150);

    ctx.moveTo(355,150);
    ctx.lineTo(400,250);
    ctx.lineCap="round"
    
     ctx.strokeStyle="green";
    
    
    // ctx.fillStyle="red" - не работает
    ctx.stroke()

    


