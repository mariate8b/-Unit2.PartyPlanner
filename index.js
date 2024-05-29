
const party = {
    id: 1,
    name: "Party Name",
    description: "This is a description of the party.",
    date: "2021-09-30T00:00:00.000Z", // Date ISO string
    location: "123 Street",
  }


// Use Fetch API
const fetchAllparties = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
 // USE Fetch to create a Post
  const createNewParty = async (name, location, description, date , time) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE 
  const removeAParty = async (id) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  
/// POST 
  const posParties = [
    { id:"1", name:"Party Name",description: "This is a description of the party.",date: "2021-09-30T00:00:00.000Z",location: "123 Street" }
  
  ]

  // DELETES DATTA
  function deleteObjectById(id) {
    fetch(`/api/objects/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Object deleted successfully
            console.log(`Object with ID ${id} deleted successfully.`);
            // Optionally, you can handle further actions here
        } else {
            // Object deletion failed
            console.error(`Failed to delete object with ID ${id}.`);
            // Optionally, you can handle further actions here
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally, you can handle further actions here
    });
}

///////OR 
// Get a reference to the list
const partyList = document.getElementById('partyList');

// Add event listener to the list
partyList.addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('deleteButton')) {
        // Get the parent <li> element
        const partyItem = event.target.closest('li');
        
        // Remove the <li> element from the list
        partyItem.remove();
    }
});