

function modificarProducto(producto) {
   
    const nombre = producto.querySelector(".info-producto h3").textContent;
    const descripcion = producto.querySelector(".info-producto p").textContent;
    const precio = producto.querySelector(".info-producto div").textContent;
  
  
    const ventana = window.open("", "Modificar producto", "width=500,height=300");
  
    const form = ventana.document.createElement("form");
    form.setAttribute("id", "miFormulario");
  
    
    const nombreInput = ventana.document.createElement("input");
    nombreInput.setAttribute("type", "text");
    nombreInput.setAttribute("value", nombre);
    const descripcionInput = ventana.document.createElement("input");
    descripcionInput.setAttribute("type", "text");
    descripcionInput.setAttribute("value", descripcion);
    const precioInput = ventana.document.createElement("input");
    precioInput.setAttribute("type", "text");
    precioInput.setAttribute("value", precio);
  
    form.appendChild(document.createTextNode("Nombre: "));
    form.appendChild(nombreInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    form.appendChild(document.createTextNode("Descripción: "));
    form.appendChild(descripcionInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    form.appendChild(document.createTextNode("Precio: "));
    form.appendChild(precioInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
  
    
    const guardarButton = ventana.document.createElement("button");
    guardarButton.textContent = "Guardar";
    form.appendChild(guardarButton);
  
    ventana.document.body.appendChild(form);
  

    guardarButton.addEventListener("click", () => {

      const nuevoNombre = nombreInput.value;
      const nuevaDescripcion = descripcionInput.value;
      const nuevoPrecio = precioInput.value;
  
      producto.querySelector(".info-producto h3").textContent = nuevoNombre;
      producto.querySelector(".info-producto p").textContent = nuevaDescripcion;
      producto.querySelector(".info-producto div").textContent = nuevoPrecio;

      ventana.close();
    });
  }
  
  
  document.querySelectorAll(".producto button[type='submit']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const producto = e.target.closest(".producto");
      modificarProducto(producto);
     
    });
  });
  