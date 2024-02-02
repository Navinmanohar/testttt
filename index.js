

// // console.log(a)
// // var a=10     // global variable 
// // console.log(a)
// // var a=20
// // console.log(a)


// // console.log(b)
// let b;

// console.log(b)
// b=20;//local scope
// console.log(b)
// b=25
// console.log(b)

// const c=28
// console.log(c)
// c=26
// console.log(c)

// data types : number string bigint undefined null symbol

// let a=100

// console.log(typeof a)

// operator artihmetic operator + - * / ++ -- %
// Boolean    & | ! 
// bitwise  && || << >>
// comparision operator == ===

// let c=30&20

// var age=18

// if(age>=18)
// {
//     console.log("You can give a vote")
// }
// else if(age>15&&age<18){
//       console.log("You are under age")
// }
// else{
//     console.log("you are chiled")
// }

// ternarory operator
//  condition?Body:body

// age>=18?console.log("You can give a vote"):(age>15&&age<18)?console.log("You are under age"):console.log("you are chiled")

// age>=18?console.log("You can give a vote"):console.log("You are under age")


// switch(age)
// {
//     case 18:
//         console.log("You can give a vote")
//          break;
         
//     case 16:
//         console.log("under age")
//          break;
//       default:
//       console.log("Not match")   

// }


// loop 

// for(let i=1;i<=10;i=i+1)
// {
//     console.log(i)
// }
// let i=1
// for(;i<=10;)
// {
//     console.log(i)
//     i=i+1
// }
// let i=11
// while(i<=10)
// {
//     console.log("this is due to while loop",i)
//     console.log(`this is due to while loop ${i}`)
//     i=i+1
// }
// // 
//  i=11
// do{
//     console.log(`this is due to do while loop ${i}`)
//     i=i+1;
// }while(i<=10)

// function 

// function your_function_name(){
//     return "this is a function"
// }
// console.log(your_function_name())

// console.log(fun(3,5))

// function fun(a,b)
// {
//     let sum=a+b;
//     // console.log(sum)
//     return sum;
// }

// console.log(fun(3,5))



// console.log(arrow_function(3,5))

// let arrow_function=(a,b)=>{
//     let sum=a+b
//     return sum;
// }
// console.log(arrow_function(3,5))



// let fun=(a)=>{
//     console.log("This is function")
// let b=a()
// console.log(b)
   
// }
// let fun2=()=>{
//     return "This is second function"

// }

// fun(fun2);
// console.log(fun2())


// let arr=[1,2,3,4,5,6]

// console.log(arr.length)
// arr.push(28)
// console.log(arr)
// arr.pop()
// arr.sort()

// console.log(typeof arr)

// function callback_f(val,index)
// {
//    return index
// }

// let ar=arr.filter((val)=>{
//     return val%2==0
// })
// // ar.push(24)
// // console.log(arr)
// console.log(ar)


let obj=[
    {
    // key:value
    name:"Rahul",
    favColor:"red",
    Branch:"cse",
    roll:20,
    display:function(){
        console.log(this.name,this.Branch,this.roll)
    }
},
    {
    // key:value
    name:"Raj",
    favColor:"yello",
    Branch:"cse",
    roll:22,
    display:function(){
        console.log(this.name,this.Branch,this.roll)
    }
},
    {
    // key:value
    name:"nitin",
    favColor:"blue",
    Branch:"cse",
    roll:24,
    display:function(){
        console.log(this.name,this.Branch,this.roll)
    }
}
]


// let obj3=obj.filter((val)=>{
//     return val.Branch=='cse'&&val.name=='nitin'
// })
// console.log(obj3)
// for(let ar of obj)
// {
//     console.log(ar)
// }