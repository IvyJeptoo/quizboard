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
        var questionOne = document.getElementByName('quiz2');
   for ( var i = 0, length  = questionOne.length; i < length; i++){
    if(questionOne[i].checked && questionOne[i] === correctAnswers[1]){
        score += 10;   
         
   
        break;
        }
    }
        var questionOne = document.getElementByName('quiz3');
        for ( var i = 0, length  = questionOne.length; i < length; i++){
         if(questionOne[i].checked && questionOne[i] === correctAnswers[2]){
             score += 10;   
              
        
             break;
             }
            }
             var questionOne = document.getElementByName('quiz4');
             for ( var i = 0, length  = questionOne.length; i < length; i++){
              if(questionOne[i].checked && questionOne[i] === correctAnswers[3]){
                  score += 10;   
                   
              
                  break;
                  }  
                }   
                  var questionOne = document.getElementByName('quiz5');
                  for ( var i = 0, length  = questionOne.length; i < length; i++){
                   if(questionOne[i].checked && questionOne[i] === correctAnswers[4]){
                       score += 10;   
                        
                    
                       break;
                       }   
                    }   
                       var questionOne = document.getElementByName('quiz6');
                       for ( var i = 0, length  = questionOne.length; i < length; i++){
                        if(questionOne[i].checked && questionOne[i] === correctAnswers[5]){
                            score += 10;   
                             
                        
                            break;
                            }  
                        }   

                        

                    
document.getElementById("results").innerHTML = score;
 }
