const exampleModal = document.getElementById('exampleModal');

const groceryList = document.querySelector("#groceryContainer");

let groceryArray = [];




function getElement(id) {
    return document.getElementById(id);
}


function updateGroceryList(){
    groceryContainer.innerHTML= ``;
    if (groceryArray.length !== 0){

        

        for (let i = 0; i < groceryArray.length; i++) {
        

        item = groceryArray[i];
        const listItem = document.createElement('li');
        //set the class name for the list item
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Populate the list item with task information
        listItem.innerHTML = `
            <span>${item.name}</span>
            <div>
                <button class="btn btn-danger btn-sm me-2" onclick="deleteGrocery(${i})">Delete</button>
                <button class="btn btn-secondary btn-sm" onclick="editGrocery(${i})">Edit</button>

            </div>
        `;
        // Append the list item to the task list element
        groceryContainer.appendChild(listItem);

        }
        

    }

    else{
        const listItem = document.createElement('li');
        //set the class name for the list item
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Populate the list item with task information
        listItem.innerHTML = `
            <span>You have no groceries right now.</span>
           
        `;

        groceryContainer.appendChild(listItem);
    }
}


function addGrocery(){
    let groceryItem = prompt('Add Grocery:');



    if (groceryItem !== ''){

        const newGrocery = {
            name: groceryItem.trim(),
        };

        groceryArray.push(newGrocery);
        updateGroceryList();
        
        
    }

}

function deleteGrocery(index){
    console.log("The index is " + index );
    groceryArray.splice(index, 1)
    updateGroceryList();
}

function editGrocery(index){
    
    const updatedGrocery = prompt('Edit Grocery:', groceryArray[index].name);

    if (updatedGrocery !== ''){
    groceryArray[index].name = updatedGrocery
    updateGroceryList();
}

    
}


updateGroceryList();