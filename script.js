// initiating Transaction 
// Connecting Securely

let textBox = document.getElementById("text");
let msg = document.getElementById("msg");


function leftArrow(){
    let leftArrow = document.querySelector("#head-l > i");
    leftArrow.addEventListener("click", function(){
        gsap.to("#m-body",{
            y: 0,
            opacity: 0,
        })
    
        gsap.to("#curr",{
            x: 0,
            opacity: 0,
        })
    
        gsap.to("#text",{
            opacity: 0,
        })
    
    })
    
}
function InputAnimation(){
    textBox.addEventListener("input", function(){
        let textData = textBox.value;
        
        if(textData.trim() !== ""){
            gsap.to("#m-body",{
                y: -0,
                opacity: 1,
            })
            gsap.to("#curr",{
                x: 10,
                opacity: 1,
            })
            gsap.to("#file",{
                x: 0,
                opacity: 1,
            })
    
            gsap.to("#foot-icon",{
                opacity: 0,
            })
            gsap.to("#text",{
                width: "45%"
            })
            gsap.to("#foot-icon2",{
                opacity: 1,
            })
            
        }
        else{
            gsap.to("#m-body",{
                y: 0,
                opacity: 0,
            })
    
            gsap.to("#curr",{
                // x: -10,
                opacity: 0,
            })
            gsap.to("#foot-icon",{
                opacity: 1,
            })
    
            gsap.to("#file",{
                opacity: 0,
            })
    
            gsap.to("#foot-icon2",{
                opacity: 0,
            })
        }
    
       
    
        
    })
}

function payAction(){
    let payBtn = document.getElementById("pay");
    
    payBtn.addEventListener("click", function(){
        let textData = text.value;
        let msgDta = msg.textContent;
        CreatePromise(textData);

        setTimeout(() => {
            let Blur = document.getElementById("overLay");
        Blur.style.display = "block";

        loadingPromise(msgDta);

         
        setTimeout(() => {
            let overLay2 = document.getElementById("overLay2");
            overLay2.style.display = "block";
        }, 3000);
        
    }, 1000);    

    
    })
}


function loadingPromise(msgDta){
    let load = new Promise(function(res, rej){
        setTimeout(function(){
            if(msgDta){
                res("Connecting Securely")
            }
        },2000)
    })

load.then(function(ans){
    let msg = document.getElementById("msg");
    msg.textContent = ans.value;
    console.log(ans);
    msg.append(ans)
})

}

function CreatePromise(textData){

    if (!textData) {
        return Promise.reject("Enter A Valid Response");
      }
      
    let Mypromise = new Promise(function(res, rej){
        setTimeout(function(){
            let numericValue = Number(textData);
            if(!isNaN(numericValue)){
                res(numericValue);
            }
            else{
                rej("Enter A Valid Response")
            }
        },1000)
    })

    Mypromise.then(function(ans){
        console.log(ans);
    })
    Mypromise.catch(function(err){
        console.log(err);
    })
} 


loadingPromise();
CreatePromise();
payAction();
leftArrow();
InputAnimation();