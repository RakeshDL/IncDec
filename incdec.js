$.fn.IncDec = function(array){
    console.log(array);
    var element = $(this);
    setElementNormal(element)
    if (array == undefined || array == null) {
      setElementNormal(element);
    }else{
    if(array.hasOwnProperty("min")){
      setMinVal(element, array.min);
    }
    if(array.hasOwnProperty("max")){
      setMaxVal(element, array.max);
    }
    if(array.hasOwnProperty("init")){
      setInitVal(element, array.init);
    }
  }
};

// create increment decrement element
function setElementNormal(element){

  element.wrap("<div class='incdec-wrapper'></div>");
  element.parent().parent().find("label").appendTo($(element.parent()));
  element.addClass("incdec-input z-depth-2"); // appay class for element
  $("<button class='incdec-btn btn-decrement z-depth-2'></button>").insertBefore(element); // add "-" button before element
  $("<button class='incdec-btn btn-increment z-depth-2'></button>").insertAfter(element); // add "+" button after element
}

// set min value
function setMinVal(element, min){
  element.data("min", min)
}
// set max value
function setMaxVal(element, max){
  element.data("max", max)
}
// set initial value
function setInitVal(element, init){
  element.val(init)
}
// decrement button click function
$(document).on("click", ".btn-decrement", function(){
  var initValInput = $(this).parent().find(".incdec-input"); // input box initial value input box
  var initVal = initValInput.val();
  if ($.trim(initVal).length == 0 || initVal == null || initVal == undefined) {
    initVal = 0;
  }else {
    initVal = parseInt(initVal);
  }
  var min = $(initValInput).data("min");
  if (min == null || min == undefined) {
    initVal = initVal-1;
  }else {
    if (initVal > min) {
      initVal = initVal-1;
    }
  }

  initValInput.val(initVal);
});

// increment button click function
$(document).on("click", ".btn-increment", function(){
  var initValInput = $(this).parent().find(".incdec-input"); // input box initial value input box
  var initVal = initValInput.val();
  if ($.trim(initVal).length == 0 || initVal == null || initVal == undefined) {
    initVal = 0;
  }else {
    initVal = parseInt(initVal);
  }
  var max = $(initValInput).data("max");
  if (max == null || max == undefined) {
    initVal = initVal+1;
  }else {
    if (initVal < max) {
      initVal = initVal+1;
    }
  }
  initValInput.val(initVal);
});
