
let n1= 117;
let a = 100; 
let b = 200;

function myFunction1(n1, a, b) {
    let pWynik = ""
    
    if (n1 > a && n1 < b) 
        pWynik = "Liczba znajduje się w przedziale"
    else 
        pWynik = "Liczba NIE znajduje się w przedziale";
    
    return pWynik; 

}

alert (myFunction1(n1, a, b));


