const numbers = document.querySelectorAll(".number"),
      operations = document.querySelectorAll(".calc-operator-button"),
      clearBtns = document.querySelectorAll(".calc-clear-button"),
      decimalBtn = document.getElementById("point");
      ce = document.getElementById("ce"),
      c = document.getElementById("c");
let resultBtn = document.getElementById("result"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";

for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function (e) {
        numberPress(e.target.innerText);
    });
};

for(let i = 0; i < operations.length; i++) {
    let operation = operations[i];
    operation.addEventListener("click", function (e) {
        operationPress(e.target.innerText);
    });
    };

for(var i = 0; i < clearBtns.length; i++) {
    var clearBtn = clearBtns[i];
        clearBtn.addEventListener("click", function(e){
        clear(e.srcElement.id);
        });
    };

decimalBtn.addEventListener("click", decimal);

resultBtn.addEventListener("click", result);

function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
            }
        }
}       
         
function operationPress(op) {
    let localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation != '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
                   MemoryCurrentNumber -= parseFloat(localOperationMemory);    
                } else if (MemoryPendingOperation === '*') {
                          MemoryCurrentNumber *= parseFloat(localOperationMemory); 
                        } 
                        else if (MemoryPendingOperation === '/'){
                                 MemoryCurrentNumber /= parseFloat(localOperationMemory);
                            } else {MemoryCurrentNumber = parseFloat(localOperationMemory)
                              };
            }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
}
      
        
        
    function decimal(argument) {
        let localDecimalMemory = display.value;
            if(MemoryNewNumber) {
                localDecimalMemory = "0.";
                MemoryNewNumber = false;
            } else {
                if(localDecimalMemory.indexOf(".") === -1) {
                localDecimalMemory += "."
            }
        };
        display.value = localDecimalMemory;
    };
    function clear(id) {
        if(id === "ce") {
            display.value = 0
            MemoryNewNumber = true;
        } else if(id === "c") {
            display.value = "0" 
            MemoryNewNumber = true;
            MemoryCurrentNumber = 0,
            MemoryPendingOperation = "";
        }
    };