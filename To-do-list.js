// 1. Crear una nueva tarea

function agregarTarea() {
    var tarea = document.getElementById("task").value;
    var li = document.createElement("li");
    
    li.textContent = tarea;
    li.appendChild(crearBotonActualizar(li));
    li.appendChild(crearBotonCompletada(li));
    li.appendChild(crearBotonBorrar(li));
    
    document.getElementById("tasks").appendChild(li);
}

// 2. Actualizar una tarea existente

function crearBotonActualizar(li) {
    var botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.onclick = function() {
        var tareaActualizada = prompt("Ingresa el texto actualizado para la tarea:");
        if (tareaActualizada) {
            li.textContent = tareaActualizada;
            li.appendChild(crearBotonActualizar(li));
            li.appendChild(crearBotonCompletada(li));
            li.appendChild(crearBotonBorrar(li));
        }
    }
    return botonActualizar;
}

// 3. Marcar una tarea como completada

function crearBotonCompletada(li) {
    var botonCompletada = document.createElement("button");
    botonCompletada.textContent = "Completada";
    botonCompletada.onclick = function() {
        li.style.textDecoration = "line-through";
    }
    return botonCompletada;
}

// 4. Borrar una tarea

function borrarTarea(elementoTarea) {
    var confirmacion = confirm("¿Estás seguro de que quieres borrar esta tarea?");
    if (confirmacion) {
        elementoTarea.remove();
    }
}

function crearBotonBorrar(li) {
    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.onclick = function() {
        borrarTarea(li);
    }
    return botonBorrar;
}


