function saveTask(){
    console.log("Saving...");
    //get values
    const title = $("#inputTitle").val();
    const description = $("#inputDescription").val();
    const startDate = $("#inputStartDate").val();
    const status = $("#inputStatus").val();
    const color = $("#inputColor").val();
    const budget = $("#inputBudget").val();
    console.log(title,description,startDate,budget,status,color)

    //build the object
let task = new Task(title,description,startDate,status,color,budget)
console.log(task);

    //save to the server

        $.ajax({
            type: "POST",
            url: "http://fsdiapi.azurewebsites.net/api/tasks/",
            data:JSON.stringify(task),
            contentType: "application/json",
            success: function(response){
                    console.log(response);
            },
            error: function(error)
            {
                console.log(error);
            }
        });

    
    
    //display the task
}

function testRequest(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/",
        success: function(response){
                console.log(response);
        },
        error: function(error)
        {
            console.log(error);
        }
    });
}


function init(){
    console.log("this is a task manager");
    //load data


    //hook events
    $("#btnSave").click(saveTask);
    //document.getElementByID("btnSave")

}

window.onload = init;[]