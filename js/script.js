function myScoreChecker(){
    
  var score=0;
  var rightAnswer1= document.questions.quiz1.value;
  var rightAnswer2= document.questions.quiz2.value;
  var rightAnswer3= document.questions.quiz3.value;
  var rightAnswer4= document.questions.quiz4.value;
  var rightAnswer5= document.questions.quiz5.value;
  var rightAnswer6= document.questions.quiz6.value;
  var answer=document.getElementById("answer")

  if(rightAnswer1==="10 years"){score ++};
  if(rightAnswer2==="Tea"){score ++};
  if(rightAnswer3==="Lake Victoria"){score ++};
  if(rightAnswer4==="8"){score ++};
  if(rightAnswer5==="Tsavo NP"){score ++};
  if(rightAnswer6==="1963"){score ++};

  questions.style.display = "none"
  

  if (score >= 5) {
        answer.textContent="CONGRATS! A TRUE PATRIOT! Your score is "+ score/6*100 + "% "
    
          }else if(score >= 3){
              answer.textContent="GOOD! Your score is"+ score/6*100 + "%. Fair amount of information."
          }else{
              answer.textContent="PULL UP! Your score is"+ score/6*100 + "%. So much much you need to know about Kenya!"
          }
  
  }

