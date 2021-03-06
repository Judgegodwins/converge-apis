console.log("init");

const accountSwitchBtn = document.querySelector("button#switch"),
    accountSlider = document.querySelector("#slider.account-action"),
    signIn_Form = document.querySelector("form#sign-in"),
    createAccount_Form = document.querySelector("form#create-account"),
    AccountContWrapper = document.querySelector(".cont-wrapper"),
    slider_signInCont = accountSlider.querySelector(".sign-in-cont"),
    slider_signUpCont = accountSlider.querySelector(".sign-up-cont"),
    signInTrigger = accountSlider.querySelector("button#sign-in"),
    signUpTrigger = accountSlider.querySelector("button#sign-up");

const signIn_Username = signIn_Form.querySelector("input.username"),
    signIn_Pass = signIn_Form.querySelector("input.password"),
    createAccount_Username = createAccount_Form.querySelector("input.username"),
    createAccount_Pass = createAccount_Form.querySelector("input.password"),
    createAccount_Email = createAccount_Form.querySelector("input.email");

function setAttributes(el, attributes){
    for(i in attributes){
        el.setAttribute(i, attributes[i]);
    }
}

function toggleAccountSwitch(){
    accountSlider.classList.toggle("slider-active");
    signIn_Form.classList.toggle("form-active");
    signIn_Form.parentElement.classList.toggle("wrapper-inactive");
    createAccount_Form.classList.toggle("form-active");
    createAccount_Form.parentElement.classList.toggle("wrapper-inactive");
    accountSlider.classList.toggle("active-slide");
    // slider_signInCont.classList.toggle("active-acc-cont");
    // slider_signUpCont.classList.toggle("active-acc-cont");

    if(createAccount_Form.getAttribute("data-active") == "false"){
        setAttributes(createAccount_Form, {'data-active': 'true'});
        setAttributes(signIn_Form, {'data-active': 'false'});
        
        setAttributes(signIn_Username, {'id':'null1', 'name': 'null1'});
        setAttributes(signIn_Pass, {'id':'null2', 'name': 'null2'});
        setAttributes(createAccount_Username, {'id': 'username', 'name': 'username'});
        setAttributes(createAccount_Pass, {'id': 'password', 'name': 'password'});
        
        accountSwitchBtn.querySelector("span").textContent = "Have an Account? Log in";

    } else{
        setAttributes(createAccount_Form, {'data-active': 'false'});
        setAttributes(signIn_Form, {'data-active': 'true'});
        
        setAttributes(signIn_Username, {'id':'username', 'name': 'username'});
        setAttributes(signIn_Pass, {'id':'password', 'name': 'password'});
        setAttributes(createAccount_Username, {'id': 'null1', 'name': 'null1'});
        setAttributes(createAccount_Pass, {'id': 'null2', 'name': 'null2'});

        accountSwitchBtn.querySelector("span").textContent = "Create An Account";
    };
}

accountSwitchBtn.addEventListener("click", toggleAccountSwitch);
signUpTrigger.addEventListener("click", function(){
    toggleAccountSwitch();
});
signInTrigger.addEventListener("click", function(){
    toggleAccountSwitch();
});