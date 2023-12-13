    let textBox = document.getElementById("text");
    let msg = document.getElementById("msg");


    function leftArrow(){
        let leftArrow = document.querySelector("#head-l > i");
        leftArrow.addEventListener("click", function(){
           inputAnimationLogic();

           textBox.value = ""

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
                    width: "35%"
                })
                gsap.to("#foot-icon2",{
                    opacity: 1,
                })
                
            }
            else{

                inputAnimationLogic();
                
                leftArrow();
            }
        
        
        
            
        })
    }


    function inputAnimationLogic(){
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

        gsap.to("#text",{
            width: "50%"
        })

        let del = document.getElementById("text")
        if(del.textContent.trim() === ""){
            del.textContent = null;
        }

    }

    function payAction(){
        let payBtn = document.getElementById("pay");
        
        payBtn.addEventListener("click", function(){
            let textData = textBox.value;
            let msgDta = msg.textContent;

            setTimeout(() => {
                let Blur = document.getElementById("overLay");
            Blur.style.display = "block";


            loadingPromise(msgDta);

        setTimeout(() => {
            let overLay2 = document.getElementById("overLay2");
            overLay2.style.display = "block";

            setTimeout(() => {
                let overLay3 = document.getElementById("overLay3");
                let overLay4 = document.getElementById("overLay4");
                let numericValue = Number(textData);
                if(!isNaN(numericValue)){
                overLay3.style.display = "block";
                    
                }
                else{
                    overLay3.style.display = "none";
                    overLay4.style.display = "block";


                }
            }, 4000);
        }, 4000);
        }, 1000);   

        CreatePromise(textData);

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
                    rej("Enter A Valid Response.")
            
                }
            },1000)
        })

        Mypromise.then(function(ans1){
            let payCmt = document.querySelector("#pay-cmt span");
            payCmt.textContent = ans1;
        })
        Mypromise.catch(function(err){
            let payCmt1 = document.querySelector("#pay-cmt1 h3");
            payCmt1.textContent = err;
        })
    } 


    loadingPromise();
    CreatePromise();
    payAction();
    leftArrow();
    InputAnimation();

