const tableBody = document.querySelector("#dynamicTable tbody");
const addRowButton = document.getElementById("addRowButton");

function createRow(data = { nome: "", modelo: "", preco: "" }) {
    const row = document.createElement("tr");
    row.appendChild(createEditableCell(data.nome));
    row.appendChild(createEditableCell(data.modelo));
    row.appendChild(createEditableCell(data.preco));
    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Carrinho";
    deleteButton.addEventListener("click", () => row.remove());
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);
    tableBody.appendChild(row);
}

function createEditableCell(content) {
    const cell = document.createElement("td");
    cell.contentEditable = true;
    cell.classList.add("editable");
    cell.textContent = content;
    return cell;
}

addRowButton.addEventListener("click", () => createRow());

createRow({ nome: "Anderson Silva", modelo: "BMX SPIDER", preco: "R$ 5.000,00" });
createRow({ nome: "Bruno Lorenzi", modelo: "Hearts X", preco: "R$ 348.666,00" });
createRow({ nome: "Alceu Borges", modelo: "Falcon RX", preco: "R$ 2.500,00" });
createRow({ nome: "Felipe Pereira", modelo: "Fast Doca", preco: "R$ 1.250,90" });
