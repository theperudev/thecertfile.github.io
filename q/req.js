const start_txt = document.querySelector(".start_quiz");
const start_btn = document.querySelector(".start_ok");

const quiz_box = document.querySelector(".quiz-box");
const que_text = quiz_box.querySelector(".que_text");
const options_box = quiz_box.querySelector(".options");
const next_btn = document.querySelector(".next-btn");
const total_q = document.querySelector(".quiz-footer .total_que");
const count_que = document.querySelector(".quiz-footer .count_que");
const result_box = document.querySelector(".result-box");

const total_que_r = document.querySelector(".total-que span");
const right_ans_r = document.querySelector(".right-ans span");
const wrong_ans_r = document.querySelector(".wrong-ans span");
const percentage = document.querySelector(".percentage span");

const again_quiz = document.querySelector(".result-footer .again-quiz");
const exit = document.querySelector(".result-footer .exit");

const mark_wrong = '<i class="fa fa-times"></i>';
const mark_check = '';


const cname=document.getElementById('cname').innerText;

const d = new Date();
let years = d.getFullYear();

var dd = new Date();
var monthss = dd.getMonth()+1;

var thetitle=document.getElementById('qtitle').innerText;
var linkedin1='https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name='+encodeURIComponent(thetitle)+'&organizationId=87157561&issueYear';
linkedin1+='='+years+'&issueMonth='+monthss+'&certUrl=';

var linkedin2='&certId=';
const _0x2e6b13=_0x43bb;function _0x43bb(_0x40253b,_0x4cb34e){const _0xc4dd46=_0xc4dd();return _0x43bb=function(_0x43bb7f,_0x54dfc7){_0x43bb7f=_0x43bb7f-0x17c;let _0x2e065e=_0xc4dd46[_0x43bb7f];return _0x2e065e;},_0x43bb(_0x40253b,_0x4cb34e);}(function(_0x437685,_0x23bfe7){const _0x5b3599=_0x43bb,_0x54bfaa=_0x437685();while(!![]){try{const _0x4339ec=-parseInt(_0x5b3599(0x188))/0x1*(-parseInt(_0x5b3599(0x18c))/0x2)+-parseInt(_0x5b3599(0x194))/0x3*(-parseInt(_0x5b3599(0x18b))/0x4)+-parseInt(_0x5b3599(0x193))/0x5*(-parseInt(_0x5b3599(0x18f))/0x6)+-parseInt(_0x5b3599(0x184))/0x7*(parseInt(_0x5b3599(0x189))/0x8)+parseInt(_0x5b3599(0x198))/0x9*(-parseInt(_0x5b3599(0x18a))/0xa)+-parseInt(_0x5b3599(0x17d))/0xb+parseInt(_0x5b3599(0x196))/0xc;if(_0x4339ec===_0x23bfe7)break;else _0x54bfaa['push'](_0x54bfaa['shift']());}catch(_0x58f8b5){_0x54bfaa['push'](_0x54bfaa['shift']());}}}(_0xc4dd,0x1b03c));function _0xc4dd(){const _0xcdf0e8=['iz-826d1.f','54755KBdvEL','21705fiHVVk','iz-826d1.a','11028BwuiEH','lHh9ck418','442269eMmBVf','2497:web:8','1681526KJGVwO','8010223724','AIzaSyA_QH','irebaseapp','G-7D7SGDW6','1:80102237','e50516c2d3','5726xagOmx','GNS1pPdnqj','5DQBtgf4wi','iz-826d1','98463LblbTT','144qTbdUY','10yrdyje','120BVkgwW','2NLBtQT','auth','ppspot.com','6CSaVIw','.com','linkedinqu'];_0xc4dd=function(){return _0xcdf0e8;};return _0xc4dd();}const _0x2a8c88={'apiKey':_0x2e6b13(0x17f)+_0x2e6b13(0x186)+_0x2e6b13(0x185)+_0x2e6b13(0x197),'authDomain':_0x2e6b13(0x191)+_0x2e6b13(0x192)+_0x2e6b13(0x180)+_0x2e6b13(0x190),'projectId':_0x2e6b13(0x191)+_0x2e6b13(0x187),'storageBucket':_0x2e6b13(0x191)+_0x2e6b13(0x195)+_0x2e6b13(0x18e),'messagingSenderId':_0x2e6b13(0x17e)+'97','appId':_0x2e6b13(0x182)+_0x2e6b13(0x17c)+'64d999f478'+_0x2e6b13(0x183)+'0','measurementId':_0x2e6b13(0x181)+'EJ'};firebase['initialize'+'App'](_0x2a8c88);const _0x2b801d=firebase[_0x2e6b13(0x18d)]();

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
 
   }
  return result
}

function makeidd(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
 
   }
   return result
}


function getid()
{
    const myid=makeid(6)+"-"+makeidd(5)+"-"+cname+"-ND";
   return myid
}


start_btn.onclick =()=>{

    var user=document.getElementById('username').value;
    if (user.length>3)
    {
        
        quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");
    start_txt.classList.add("inactive");
    }
    else
    {
       alert('Please Enter Name');
    }
    
}

total_q.innerText = asking.length;
total_que_r.innerText = asking.length;

var que_index = 0;
var right_answers = 0;
var wrong_answers = 0;
count_que.innerText = que_index+1;
ShowQuestion(que_index);

function ShowQuestion(q_index){
    que_text.innerText = asking[q_index].num+". "+ asking[q_index].ok;
var option_statement = "";
for(var i=0; i<asking[q_index].ch.length; i++){
    option_statement += `<div class="option">${asking[q_index].ch[i]}</div>`;
}

options_box.innerHTML = option_statement;

var AllOptions = options_box.querySelectorAll(".option");

    for(var j=0; j<AllOptions.length; j++){
        AllOptions[j].setAttribute("onclick","UserAnswer(this)");
    }
    next_btn.classList.add("inactive");
}


function _0x2778(){var _0x2159ea=['value','ttps://www','Make\x20Sure\x20','block','inactive','add','20418310JzgYJY','sharetext','di.org','rtificate=','rendraDwiv','thelink','After\x20Lear','a\x20href=\x22ht','tps://www.','href','e\x20Attempt\x20','ra\x20Dwivedi','>\x20On\x20Linke','dIn','lidate.nar','innerText','linkedinli','style','getDate','onclick','1343271vNPFoQ','wivedi\x22>Na','%+\x20,\x20Pleas','Beginner','18pHynSY','toFixed','ById','rtificate%','2193906GLVtrI','level','&c=','16CiviFF','4500402KFOzHj','5577128IcorKQ','10HexkKY','endradwive','.linkedin.','length','remove','username','om/company','Use\x20Below\x20','https://va','Add\x20Your\x20C','ref','\x20Is\x20Not\x2045','11cJmjXk','ertificate','<a\x20href=\x22h','din.png','getSeconds','Button\x20To\x20','classList','/narendrad','https://qu','10952634uVAHCa','To\x20Follow\x20','330310WBGbUz','Finish','di.org/?ce','location','linkedin.c','database','Your\x20Marks','display','iztest.nar','getElement','set'];_0x2778=function(){return _0x2159ea;};return _0x2778();}var _0x2d0793=_0xb7ae;function _0xb7ae(_0x3335c1,_0x717c23){var _0x2778d2=_0x2778();return _0xb7ae=function(_0xb7ae1d,_0x42714a){_0xb7ae1d=_0xb7ae1d-0x99;var _0x3c7f3a=_0x2778d2[_0xb7ae1d];return _0x3c7f3a;},_0xb7ae(_0x3335c1,_0x717c23);}(function(_0x115173,_0x487ce5){var _0x45e9da=_0xb7ae,_0x56ca13=_0x115173();while(!![]){try{var _0xa1561c=parseInt(_0x45e9da(0xc7))/0x1+-parseInt(_0x45e9da(0xaa))/0x2+parseInt(_0x45e9da(0xa2))/0x3*(-parseInt(_0x45e9da(0xad))/0x4)+-parseInt(_0x45e9da(0xb0))/0x5*(parseInt(_0x45e9da(0xae))/0x6)+parseInt(_0x45e9da(0xc5))/0x7+-parseInt(_0x45e9da(0xaf))/0x8*(-parseInt(_0x45e9da(0xa6))/0x9)+-parseInt(_0x45e9da(0xd8))/0xa*(-parseInt(_0x45e9da(0xbc))/0xb);if(_0xa1561c===_0x487ce5)break;else _0x56ca13['push'](_0x56ca13['shift']());}catch(_0x112b5a){_0x56ca13['push'](_0x56ca13['shift']());}}}(_0x2778,0xe637a),next_btn[_0x2d0793(0xa1)]=()=>{var _0x1664d9=_0x2d0793;que_index++;if(asking[_0x1664d9(0xb3)]>que_index)count_que[_0x1664d9(0x9d)]=que_index+0x1,ShowQuestion(que_index);else{var _0xc80e2f=document['getElement'+_0x1664d9(0xa8)]('linkedinim'+'g');percentage[_0x1664d9(0x9d)]=(right_answers*0x64/asking[_0x1664d9(0xb3)])[_0x1664d9(0xa7)](0x2);if(percentage[_0x1664d9(0x9d)]>0x2d){quiz_box[_0x1664d9(0xc2)][_0x1664d9(0xd7)](_0x1664d9(0xd6)),result_box[_0x1664d9(0xc2)][_0x1664d9(0xb4)]('inactive'),right_ans_r[_0x1664d9(0x9d)]=right_answers,wrong_ans_r[_0x1664d9(0x9d)]=wrong_answers;const _0x37dde1=getid();var _0x18cc97='https://va'+_0x1664d9(0x9c)+_0x1664d9(0xb1)+_0x1664d9(0xc9)+_0x1664d9(0xdb)+_0x37dde1+_0x1664d9(0xac)+cname,_0x2389f0=_0x1664d9(0xb8)+_0x1664d9(0x9c)+_0x1664d9(0xb1)+_0x1664d9(0xc9)+_0x1664d9(0xa9)+'3D'+_0x37dde1+'%26c%3D'+cname;document['getElement'+_0x1664d9(0xa8)]('certid')[_0x1664d9(0x9f)][_0x1664d9(0xce)]=_0x1664d9(0xd5),document[_0x1664d9(0xd0)+'ById']('thelink')['href']=_0x18cc97,document[_0x1664d9(0xd0)+_0x1664d9(0xa8)](_0x1664d9(0xdd))[_0x1664d9(0x9d)]=_0x18cc97,document[_0x1664d9(0xd0)+_0x1664d9(0xa8)](_0x1664d9(0xd9))[_0x1664d9(0x9d)]=_0x1664d9(0xb7)+_0x1664d9(0xc1)+_0x1664d9(0xb9)+_0x1664d9(0xbd)+'\x20To\x20Linked'+'In',document['getElement'+'ById']('credit')['innerHTML']=_0x1664d9(0xd4)+_0x1664d9(0xc6)+_0x1664d9(0xbe)+_0x1664d9(0xd3)+_0x1664d9(0xb2)+'com/in/nar'+_0x1664d9(0xb1)+'di\x22>Narend'+_0x1664d9(0x99)+'</a>\x20And\x20<'+_0x1664d9(0xdf)+_0x1664d9(0xe0)+_0x1664d9(0xcb)+_0x1664d9(0xb6)+_0x1664d9(0xc3)+_0x1664d9(0xa3)+_0x1664d9(0xdc)+'edi.Org</a'+_0x1664d9(0x9a)+_0x1664d9(0x9b),document[_0x1664d9(0xd0)+'ById'](_0x1664d9(0x9e)+'nk')[_0x1664d9(0xe1)]=linkedin1+_0x2389f0+linkedin2+_0x37dde1+encodeURIComponent(_0x1664d9(0xac))+cname,_0xc80e2f['src']='https://i.'+'ibb.co/j80'+'w7tX/linke'+_0x1664d9(0xbf);const _0x3b4e2e=_0x37dde1,_0x48cb6a=document['getElement'+_0x1664d9(0xa8)](_0x1664d9(0xb5))[_0x1664d9(0xd2)];var _0x4df58d=new Date(),_0x50b814=_0x4df58d['getFullYea'+'r']()+'-'+(_0x4df58d['getMonth']()+0x1)+'-'+_0x4df58d[_0x1664d9(0xa0)](),_0x4e0a22=_0x4df58d['getHours']()+':'+_0x4df58d['getMinutes']()+':'+_0x4df58d[_0x1664d9(0xc0)](),_0x328aed=_0x50b814+'\x20'+_0x4e0a22,_0x1ec6be=document[_0x1664d9(0xd0)+_0x1664d9(0xa8)](_0x1664d9(0xab)),_0x5b7f9f='';if(_0x1ec6be[_0x1664d9(0x9d)]='b')_0x5b7f9f=_0x1664d9(0xa5);else{if(_0x1ec6be[_0x1664d9(0x9d)]='i')_0x5b7f9f='Intermedia'+'te';else(_0x1ec6be['innerText']='a')?_0x5b7f9f='Advance':_0x5b7f9f='Normal';}firebase[_0x1664d9(0xcc)]()[_0x1664d9(0xba)](cname+'/'+_0x3b4e2e)[_0x1664d9(0xd1)]({'ID':_0x3b4e2e,'Name':_0x48cb6a,'Difficulty':_0x5b7f9f,'Quiz':thetitle,'Date':_0x50b814,'Time':_0x4e0a22});}else alert(_0x1664d9(0xcd)+_0x1664d9(0xbb)+_0x1664d9(0xa4)+_0x1664d9(0xe2)+_0x1664d9(0xde)+'ning'),window[_0x1664d9(0xca)]=_0x1664d9(0xc4)+_0x1664d9(0xcf)+_0x1664d9(0xb1)+_0x1664d9(0xda);}asking[_0x1664d9(0xb3)]-0x1==que_index&&(next_btn[_0x1664d9(0x9d)]=_0x1664d9(0xc8));});


function UserAnswer(answer){
    let userAns = answer.innerText;
    let thewr = asking[que_index].wr;
    var AllOptions2 = options_box.querySelectorAll(".option");

    next_btn.classList.remove("inactive");
    if(userAns == thewr){
      
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",mark_check);
        right_answers++;
    }
    

else
{
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend",mark_check);
    wrong_answers++;

}
    for(var j=0; j<AllOptions2.length; j++){
        AllOptions2[j].classList.add("disabled");
    }

}

function reset(){
    que_index = 0;
    right_answers = 0;
    wrong_answers = 0;
    next_btn.innerText = "Next Question";
   count_que.innerText = que_index+1;
   ShowQuestion(que_index);
}
