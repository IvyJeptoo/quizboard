function myScoreChecker(){  
    
var score = 0;
const correctAnswers = ["10 years","Tea","Lake Victoria", "8","Tsavo NP","1963"];
var questionOne = document.getElementByName('quiz1');
for ( var i = 0, length  = questionOne.length; i < length; i++){
    if(questionOne[i].checked && questionOne[i] === correctAnswers[0]){
        score += 10;   
         
    
        break;
        }
    }
        var questionTwo = document.getElementByName('quiz2');
   for ( var i = 0, length  = questionTwo.length; i < length; i++){
    if(questionTwo[i].checked && questionTwo[i] === correctAnswers[1]){
        score += 10;   
         
   
        break;
        }
    }
        var questionThree = document.getElementByName('quiz3');
        for ( var i = 0, length  = questionThree.length; i < length; i++){
         if(questionThree[i].checked && questionThree[i] === correctAnswers[2]){
             score += 10;   
              
        
             break;
             }
            }
             var questionFour = document.getElementByName('quiz4');
             for ( var i = 0, length  = questionFour.length; i < length; i++){
              if(questionFour[i].checked && questionFour[i] === correctAnswers[3]){
                  score += 10;   
                   
              
                  break;
                  }  
                }   
                  var questionFive = document.getElementByName('quiz5');
                  for ( var i = 0, length  = questionFive.length; i < length; i++){
                   if(questionFive[i].checked && questionFive[i] === correctAnswers[4]){
                       score += 10;   
                        
                    
                       break;
                       }   
                    }   
                       var questionSix = document.getElementByName('quiz6');
                       for ( var i = 0, length  = questionSix.length; i < length; i++){
                        if(questionSix[i].checked && questionSix[i] === correctAnswers[5]){
                            score += 10;   
                             
                        
                            break;
                            }  
                        }   

                        

                    
document.getElementById("answer").textContent = score;
 }

 function compareData(score) {
      if (score==60 || 50) {
          answer.textContent="CONGRATS! Your score is "+ score/6*100 + "%. A TRUE PATRIOT! "

      }else if(score==40 || 30){
          answer.textContent="GOOD! Your score is"+ score/6*100 + "%. Fair amount of information."
      }else{
          answer.textContent="PULL UP! Your score is"+ score/6*100 + "%. So much much you need to know about Kenya!"
      }
        
    

    
 }