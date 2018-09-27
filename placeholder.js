(function(e){
e.addEventListener('DOMContentLoaded',() => {
  
  //input place holder code
      var inputs = document.querySelectorAll('input:not([type=password]):not([type=checkbox]):not([type=submit]):not([type=radio]):not([type=button]):not([type=number])');
    Array.from(inputs).map((input)=>{
      (input.placeholder != "" ? (input.value == "" ? input.value = input.placeholder : input.value) : input.value = "........");
      input.addEventListener('blur',(e) => {
        var activeInput = e.currentTarget;
        activeInput.value = activeInput.value == "" ? (activeInput.placeholder != "" ? activeInput.placeholder : "........") : activeInput.value;
      });
      input.addEventListener('focus',(e) => {
        var activeInput = e.currentTarget;
        activeInput.value = (activeInput.value == activeInput.placeholder || activeInput.value == "........") ? activeInput.value = "" : activeInput.value;
      });
    });
  //input placeholder code end
  
  
});
})(document);
