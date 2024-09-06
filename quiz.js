const wrapper = document.querySelector('.quiz-wrapper')
const inputs = document.querySelectorAll('input')
const optionsDiv = document.querySelectorAll('label')
const questionDiv = document.querySelector('.question')
const btn = document.querySelector("#btn")

// console.log(wrapper)
console.log(optionsDiv)
// console.log(options[0].innerHTML)

// console.log(btn)
// console.log(question)
console.log(inputs)

const data = [
   {
    'question':'which of the following has 4 legs',
    'options':['parrot','dog','honeybee','snake'],
    correct:1
   },
   {
    'question':'which of the following breath through gills',
    'options':['tiger','cockroach','fish','lion'],
    correct:2
   },
   {
    'question':'which of the following can fly',
    'options':['parrot','dog','lion','snake'],
    correct:0
   },
   {
    'question':'what is the young one of a cow',
    'options':['cub','pup','calf','me'],
    correct:2
   },
   {
    'question':'what are the tiny holes in the plant called',
    'options':['fins','stomata','gills','kkk'],
    correct:1
   }
]
// data.forEach((elem)=>console.log(elem))


let currentObjIdx  = 0;
let score = 0;
function loadingPage()
{
    let currentObject = data[currentObjIdx];
    let {question ,options } = currentObject;
    console.log(question)
    console.log(options)
    questionDiv.innerHTML = question
    optionsDiv.forEach((div,index)=>div.innerText = options[index])

}

btn.addEventListener('click',function(){
    let idx;
    inputs.forEach((elem,indx)=>{
       
            if( elem.checked)idx = indx
    })
    console.log(`the cheked is ${idx}`)
    console.log(`the actaul  is ${data[currentObjIdx].correct}`)

    if(idx === (data[currentObjIdx]).correct)score+=1;
    console.log("The score is "+score)
    currentObjIdx ++;
    if(currentObjIdx < data.length)
    {
        inputs.forEach((elem)=>elem.checked = false)
        loadingPage()
    }
    else
    {
        let heading = document.createElement('h1')
        heading .innerHTML = `score : ${score}`
        wrapper.innerHTML = ''
        wrapper.appendChild(heading)
        wrapper.styyle.display = "flex"
        wrapper.styyle.alignItems = "center"
        wrapper.styyle.justifyContent = "center" 
    }
})

loadingPage()