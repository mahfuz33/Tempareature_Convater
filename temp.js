let celciousInput = document.getElementById("cTemp");
let farenhiteInput = document.getElementById("fTemp");
let kelvinInput = document.getElementById("kTemp");

const inputs = document.getElementsByClassName("dTemp");

for(let i =0; i <inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);
        
        switch(e.target.name){
            case "celcious":
                farenhiteInput.value = (value * 1.8) + 32;
                kelvinInput.value = (value + 273.15)
            break;
            case "fahrenheit":
                celciousInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
            break;
            case "kelvin":
                celciousInput.value = value - 273.15;
                farenhiteInput.value = ((value - 273.15) * 1.8) + 32;
            break;
        }
    })
}

document.getElementById("btn").addEventListener('click', function(){
    
    celciousInput.value = "";
    farenhiteInput.value = "";
    kelvinInput.value = "";
})