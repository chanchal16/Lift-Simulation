const floors = document.getElementById('floors');
const lifts = document.getElementById('lifts');
const submit = document.getElementById('submit')


floors.addEventListener('change',(e)=>{
    console.log(e.target.value)
    return e.target.value
})

lifts.addEventListener('change',(e)=>{
    console.log(e.target.value)
    return e.target.value
})

// generate floors
const generateFloors = ()=>{
    let floorCount = floors.value
    console.log(floors.value,lifts.value)
    const div = document.createElement('div')
    div.classList.add('outer-div')
    for(let i=1; i<=floorCount; i++){
        const floor = document.createElement('div')
        floor.classList.add('floor-div')
        div.appendChild(floor)
    }
    document.body.appendChild(div);
}

// on submit
const onSubmit = ()=>{
    generateFloors()    
}

submit.addEventListener('click',onSubmit)


