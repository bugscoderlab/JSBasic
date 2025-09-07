const todoList = [
    {"task": "task 1", "status": "wip"},
    {"task": "task 2", "status": "pending"},
    {"task": "task 3", "status": "done"},
]

const todoView = (status) => {
    let output = status+"\n"+"=".repeat(status.length)+"\n"

    let y = 0;
    for (let x in todoList) {
        if (todoList[x]["status"] != status) { continue; }

        output += ++y+" "+todoList[x].task+" "+todoList[x].status+"\n"
    }
    console.log(output);
}

const todoAdd = (task, status = "pending") => {
    // if (status != "wip")     { return; }
    // if (status != "pending") { return; }
    // if (status != "done")    { return; }

    if (status != "wip" && status != "pending" && status != "done")     { return; }

    todoList.push({
        "task": task,
        "status": status
    })
}

const todoDel = (index) => {
    todoList.splice(index, 1)
}

todoAdd("baca buku", "wip")
todoAdd("write notes")

todoDel(0)

todoView("wip")
todoView("pending")
todoView("done")