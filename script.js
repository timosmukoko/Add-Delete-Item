

const groceryList = document.getElementById("groceryList");
const itemInput = document.getElementById("itemInput");

function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName === "") {
        alert("Please enter a valid item name.");
        return;
    }

    // Create list item element
    const listItem = document.createElement("li");
    listItem.className = "list-item";

    // Add text to list item
    const textNode = document.createTextNode(itemName);

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => groceryList.removeChild(listItem);

    // Append text and button to the list item
    listItem.appendChild(textNode);
    listItem.appendChild(removeButton);

    // Append list item to the grocery list
    groceryList.appendChild(listItem);

    // Clear the input field
    itemInput.value = "";
}