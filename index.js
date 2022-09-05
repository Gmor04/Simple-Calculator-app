let a = document.getElementById("firstinput");
let b = document.getElementById("thridinput");
let c = document.getElementById("secondinput");
let show = document.getElementById('show');


function useoper() {
    if(c.value == "+"){
        let sum  = Number(a.value) + Number(b.value)
        show.innerHTML = sum
    }
    else if (c.value == "-") {
        let subs = Number(a.value) - Number(b.value)
        show.innerHTML = subs
    }
    else if (c.value == "*") {
        let muti = Number(a.value) * Number(b.value)
        show.innerHTML = muti
    }
    else if (c.value == "/") {
        let divi = Number(a.value) / Number(b.value)
        show.innerHTML = divi
    }
    else if (c.value == "**") {
        let raise = Number(a.value) ** Number(b.value)
        show.innerHTML = raise
    }
    else if (c.value == "%") {
        let modulus = Number(a.value) % Number(b.value)
        show.innerHTML = modulus
    }
    else{
        let eeroor = "INVALID"
        show.innerHTML = eeroor
    }
    
   
}

