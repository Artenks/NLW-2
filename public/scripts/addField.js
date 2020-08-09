//procurar o botão
document
  .querySelector("#add-time")
  //quando clicar no botão
  .addEventListener("click", cloneField);

//executar uma ação
function cloneField()  {
  //duplicar os campos: que campos?
  const newFieldContainer = document 
    .querySelector(".schedule-item")
    .cloneNode(true);

  //pegar os campos: que campos?
  const fields = newFieldContainer.querySelectorAll("input");

  //para cada campo, limpar
  fields.forEach(function (field)  {
    //pegar o field do momento e limpe-o
    field.value = "";

    
  });

  //colocar na página: onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}

//Sistema de remover

//console.log("diferente de 1")

document
.querySelector("#remove-time")
.addEventListener("click", removeField);

function removeField(){
  //remover
  const remove = document 
  .querySelector(".schedule-item")
  .remove() 
} 



//toda vez que o addeventlistener captar um click no botão, ele irá chamar
//o clonefield e entrará na function do clone field