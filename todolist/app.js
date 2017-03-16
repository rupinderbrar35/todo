const gold = document.getElementById('addTodoItem')
const button = document.getElementById('addTodo')
const silver = document.getElementById('todoList')

    let bar = document.createElement('style')
    document.body.appendChild(bar)
    
    let tod = 0
    button.addEventListener('click', () =>
    {
        // alert("Hello")
        let li = document.createElement('li')
        li.textContent= gold.value
         li.id= "li"+tod
         tod=tod+1
        silver.appendChild(li)
        
    let aDD = document.createElement('button')
    let go = document.createTextNode("delete")
    aDD.appendChild(go)
    
    
    
    li.appendChild(aDD)
    
    li.addEventListener('click', () =>
    {
      bar.innerHTML ="#" +li.id+"{color:blue;text-decoration:line-through;}"
      
    })
    aDD.addEventListener('click', ()=>
    {
        bar.innerHTML = "#" +li.id + "{color:blue;}"
    })
    })