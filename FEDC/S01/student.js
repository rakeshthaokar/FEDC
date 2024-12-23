let students = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } } , 
]
students.push({ name: "Rocky", age: 25, marks: { math: 95, science: 90, english: 99 } }  
)
students.push({ name: "John", age: 22, marks: { math: 75, science: 80, english: 80 } }  
)
students.push({ name: "Harry", age: 27, marks: { math: 80, science: 69, english: 75 } }  
)
let highest = {name: "", avgmarks: -1}
for(let i=0; i<students.length; i++){
    let student = students[i]
    let marks = Object.values(student.marks)
    let avgmark = marks.reduce((sum, curvalue) => {
        sum+=curvalue
        return sum
    },0) /marks.length
    
    if(highest.avgmarks < avgmark){
        highest.avgmarks = avgmark
        highest.name = student.name
        
    }
    console.log(`${student.name} has an average of ${avgmark}`)
}
console.log(`${highest.name} has an highest average of ${highest.avgmarks}`)