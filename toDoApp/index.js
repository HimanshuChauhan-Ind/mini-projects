const task = $('.task')

task.on('keydown',(e)=>{

    if (e.key === "Enter"){
        let addTOList = task.val()
        $('.taskList').append(`<li><label><input type='checkbox' name='task'>${addTOList}</label></li>`)
        console.log(addTOList)
        task.val('')
    }
    
})