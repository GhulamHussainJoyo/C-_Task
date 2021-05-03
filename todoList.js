let ul_list = document.querySelector('#todoList')

let todoList = {
    task: "AI Quiz",
    completed: false
}

let listLocal = ``;

let list_object = []

function onLoad() {
    list_object = JSON.parse(localStorage.getItem("todoItem"))



    if (list_object == null) {

        list_object = []
        ul_list.innerHTML = ``
    } else {
        //   debugger;

        for (let i = 0; i < list_object.length; i++) {
            // debugger;
            listLocal += `<li class="list-group-item">    
                        <input id="flexCheckDefault_${i}" class="form-check-input " style="border-radius: 50%;"
                            type="checkbox" value="" onclick="taskDone(${i})" ${list_object[i].completed == true ? 'disabled': '' }>
                        <span id=span_text_${i} class="mx-2 ${list_object[i].completed == true ? 'text-muted text-decoration-line-through': 'text' }" > ${list_object[i].task}</span>
                        <i class="far fa-trash-alt float-end text-center" style="margin-top: 1%;" onclick="deleteItem(${i})"></i>
                        </li>`
        }
        // console.log(listLocal)
        ul_list.innerHTML = listLocal

    }


}



function add_todo() {

    debugger
    let task = document.getElementById('task_text').value
    document.getElementById('task_text').value = ''

    // alert(list_object)

    let before_length = list_object.length == 0 ? 0 : list_object.length

    list_object.push({
        task: task,
        completed: false
    })

    localStorage.setItem('todoItem', JSON.stringify(list_object));

    let temp_ul_lists = document.getElementById('todoList').innerHTML

    temp_ul_lists += `<li class="list-group-item">    
                    <input id="flexCheckDefault_${before_length}" class="form-check-input " style="border-radius: 50%;"
                        type="checkbox" value="" onclick="taskDone(${before_length})">
                    <span id=span_text_${before_length} class="mx-2" > ${task}</span>
                    <i class="far fa-trash-alt float-end text-center" style="margin-top: 1%;" onclick="deleteItem(${before_length})"></i>
                    </li>`

    document.getElementById('todoList').innerHTML = temp_ul_lists
}

function add_into_List() {

    for (let i = 0; i < list_object.length; i++) {
        listLocal += `<li class="list-group-item">    
                    <input id="flexCheckDefault_${i}" class="form-check-input " style="border-radius: 50%;"
                        type="checkbox" value="" onclick="taskDone(${1})">
                    <span class="mx-2" > ${todoList.task}</span>
                    <i class="far fa-trash-alt float-end text-center" style="margin-top: 1%;" onclick="deleteItem(${1})"></i>
                    </li>`
    }
}

function deleteItem(inndex) {
    let local = ``
    list_object.splice(inndex, 1)
    localStorage.setItem('todoItem', JSON.stringify(list_object))
    for (let i = 0; i < list_object.length; i++) {
        local += `<li class="list-group-item">    
                        <input id="flexCheckDefault_${i}" class="form-check-input " aria-disabled="${list_object[i].completed == true ? true : false}" style="border-radius: 50%;"
                            type="checkbox" value="" onclick="taskDone(${i})"  ${list_object[i].completed == true ? 'disabled': '' }>
                        <span id=span_text_${i} class="mx-2 ${list_object[i].completed == true ? 'text-muted text-decoration-line-through': 'text' }" > ${list_object[i].task}</span>
                        <i class="far fa-trash-alt float-end text-center" style="margin-top: 1%;" onclick="deleteItem(${i})"></i>
                        </li>`
    }
    document.getElementById('todoList').innerHTML = local

}

function taskDone(index)

{
    debugger
    // let index = `span_task_${index}`
    let ind = `span_text_${index}`
    document.getElementById(`flexCheckDefault_${index}`).checked = false;
    document.getElementById(`flexCheckDefault_${index}`).disabled = true;
    console.log(ind);
    let span_task = document.getElementById(ind).classList;
    span_task.add("text-decoration-line-through");
    span_task.add("text-muted");
    span_task = span_task;
    list_object[index].completed = true;
    localStorage.setItem('todoItem', JSON.stringify(list_object));

}