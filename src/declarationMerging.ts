interface Car {
    brand: string;
    start(): void;
}
interface Car {
    model: string;
    stop(): void;
}

const myCar: Car ={
    brand: "Totota",
    model: "xyz",
    start(){
        console.log("My Car Started");
    },
    stop(){
        console.log("My Car stopped");
    }
}

// myCar.start();