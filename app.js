let student =[]


function randerstudent(){
 let studentcontainer = document.getElementById('student')
 studentcontainer.innerHTML=''

 student.map((student)=>{
let div =document.createElement('div')
let studentname = document.createElement('p')
let studentemail =document.createElement('p')
let examlocation = document.createElement('p')

studentname.innerText=student.name
studentemail.innerText=student.email
examlocation.innerText = student.examlocation
div.classList.add("data")

console.log(student)
studentcontainer.appendChild(div)
div.appendChild(studentname)
div.appendChild(studentemail)
div.appendChild(examlocation)

 })

}

function sucessalert(){
  let sucessalert = document.getElementById('sucessalert')
  sucessalert.classList.add('alert')
  sucessalert.innerText='student registard sucessfully'

  setTimeout(()=>{
    sucessalert.classList.remove('alert')
    sucessalert.innerText=''
  },2000)
}









function registar(){
let name = document.getElementById('name')
let email = document.getElementById('email')

const examcenter = ['Raipur', 'Bilashpur', 'Durg']; 
let rand = examcenter[(Math.random() * examcenter.length) | 0]
// console.log(rand)

let registerstudent={
    name: name.value,
    email: email.value,
    examlocation :rand,
  }
  let emailcount = student.filter((student)=>{
    return student.email == email.value;
  })
  if(emailcount.length== 0){
    student.push(registerstudent)
  }
  else{
    // alert('email alrady exist')
    let failalert = document.getElementById('failalert')
    failalert.classList.add('failalert')
    failalert.innerText ='Email id alredy exists !'
    
  }
  randerstudent()
  sucessalert()
// console.table(registeruser)
}
