const startButton=document.getElementById("start-btn");
const questionBlock=document.getElementById("question-container");
const nextButton=document.getElementById("nxt-btn");
const qtn=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const result=document.getElementById("Result");
let currentIndex;
startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',()=>{
     clearStatus(document.body);
     currentIndex++;
     showQuestion(questions);
     console.log(currentIndex);
})

function startGame(){
  clearStatus(document.body);
  startButton.classList.add('hide');
  questionBlock.classList.remove('hide');
  nextButton.classList.remove('hide');
  currentIndex=0;
  showQuestion(questions);
}

function showQuestion(questions){
    if(currentIndex===questions.length-1)
    {
        nextButton.classList.add('hide');
        startButton.innerText="Restart";
        startButton.classList.remove('hide');
    }
    
   qtn.innerText=questions[currentIndex].question;
   questions[currentIndex].answers.forEach(answer=>{
      const button=document.createElement('button');
      button.innerText=answer.text;
      button.classList.add('btn');
      if(answer.correct)
      {
         button.dataset.correct=answer.correct;
         
      }
      button.addEventListener('click',selectAnswer);
      answerButtons.appendChild(button);
      
   })
}
function selectAnswer(e){
    const selectedButton=e.target;
    const correct=selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtons.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct);
    })
}
function setStatusClass(element,correct){

   if(correct){
     element.classList.add('correct');
   }
   else{
    element.classList.add('wrong');
   }
}
function clearStatus(element)
{
    element.classList.remove('correct');
    element.classList.remove('wrong');
    answerButtons.innerHTML='';
    
}
const questions=[
    {
      question:'Who is prime minister of India',
      answers:[
          {text:'Modi', correct:true},
          {text:'Kalam',correct:false},
          {text:'singh', correct:false},
          {text:'soniya', correct:false}
      ]
    },
    {
        question:'what is the best programming language',
        answers:[
            {text:'C++', correct:false},
            {text:'Java', correct:true},
            {text:'Python', correct:false},
            {text:'javascript', correct:false}
        ]
    },
    {
        question:'What is the most used social media',
        answers:[
            {text:'LinkedIn', correct:false},
            {text:'Instagram', correct:true},
            {text:'Facebook', correct:false},
            {text:'Twitter', correct:false}
        ]
    },
    {
       question:'Which country has the highest population',
       answers:[
        {text:'India', correct:true},
        {text:'china', correct:false},
        {text:'USA',correct:false},
        {text:'Japan', correct:false}
       ]
    }
  ]