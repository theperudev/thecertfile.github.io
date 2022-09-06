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


const config = {
  apiKey: "AIzaSyA_QH5DQBtgf4wiGNS1pPdnqjlHh9ck418",
  authDomain: "linkedinquiz-826d1.firebaseapp.com",
  projectId: "linkedinquiz-826d1",
  storageBucket: "linkedinquiz-826d1.appspot.com",
  messagingSenderId: "801022372497",
  appId: "1:801022372497:web:864d999f478e50516c2d30",
  measurementId: "G-7D7SGDW6EJ"
};

firebase.initializeApp(config);
const auth = firebase.auth();

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


next_btn.onclick=()=>{
    que_index++;
    
    if(asking.length>que_index){
        count_que.innerText = que_index+1;
        ShowQuestion(que_index);
    }else{
         var linkedinimg=document.getElementById('linkedinimg');
         percentage.innerText = ((right_answers*100)/asking.length).toFixed(2);

        if (percentage.innerText>45)
        {
           // console.log("asking Complete");
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        right_ans_r.innerText = right_answers;
        wrong_ans_r.innerText = wrong_answers;
        const theidofcert=getid();
        var ilink='https://validate.narendradwivedi.org/?certificate='+theidofcert+'&c='+cname;

        var ilink1='https://validate.narendradwivedi.org/?certificate%3D'+theidofcert+'%26c%3D'+cname;
        //document.getElementById('certid').innerHTML='Your URL Of Quiz Completion Is <a href="https://validate.narendradwivedi.org/?certificate='+theidofcert+'+'>'+'Hola</a>';
        document.getElementById('certid').style.display="block";
        document.getElementById('thelink').href=ilink;
        document.getElementById('thelink').innerText=ilink;
        
        document.getElementById('sharetext').innerText='Use Below Button To Add Your Certificate To LinkedIn';

        document.getElementById('credit').innerHTML='Make Sure To Follow <a href="https://www.linkedin.com/in/narendradwivedi">Narendra Dwivedi</a> And <a href="https://www.linkedin.com/company/narendradwivedi">NarendraDwivedi.Org</a> On LinkedIn';

        document.getElementById('linkedinlink').href=linkedin1+ilink1+linkedin2+theidofcert+encodeURIComponent('&c=')+cname;
         
          linkedinimg.src='https://i.ibb.co/j80w7tX/linkedin.png';

          // saveit

          const id = theidofcert;
    const myname = document.getElementById("username").value;


    var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

 
var thelevel=document.getElementById('level');

var levelit='';
if (thelevel.innerText='b')
{
    levelit='Beginner';
}
else if (thelevel.innerText='i')
{
    levelit='Intermediate';
}

else if (thelevel.innerText='a')
{
    levelit='Advance';
}

else
{
    levelit='Normal';
}

        firebase.database().ref(cname+'/' + id).set({
            ID: id,
            Name: myname,
            Difficulty:levelit,
            Quiz:thetitle,
            Date: date,
            Time:time
        });
        //alert("Successfully Submitted");
         
        }
        else
        {
            alert('Your Marks Is Not 45%+ , Please Attempt After Learning');
            window.location='https://quiztest.narendradwivedi.org';
            
        }

        
    }

    if(asking.length-1==que_index){
        next_btn.innerText = "Finish";
    }
}

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
