const array = ["a", "b", "c"]
console.log(array)

// objects
const object = {
    param1 : "a",
    param2 : "b",
    param3 :"x"
}
console.log(object)

const carBMV1998 = {
    doors : 4, 
    wheels : 4,
    engine : 2000,
    weight : 1750
}

const footballPlayerJohn = {
    height : 170,
    weight : 80,
    result : 7.5,
    goal : function(){
        console.log("I made goal")
    },
    number : function(){
        return 5
    }
}

console.log(footballPlayerJohn.result)
console.log(footballPlayerJohn["height"])

footballPlayerJohn.goal()

let numberFromJohn = footballPlayerJohn.number()
console.log(numberFromJohn)

const AndreyAndrejevich = {
    name : "Andrey",
    surname : "Andrejevich",
    class : 3,
    sing : function(){
        console.log("lalalalalalalalala")
    }
}
AndreyAndrejevich.sing()