const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#pet-name').value.trim();
    const species = document.querySelector('#pet-species').value.trim();
    const breed = document.querySelector('#pet-breed').value.trim();
    const age = document.querySelector('#pet-age').value.trim();
    const sex = document.querySelector('#pet-sex').value.trim();
    const isvaccinated = document.querySelector('#pet-isvaccinated').value.trim();
    const ismicrochipped = document.querySelector('#pet-ismicrochipped').value.trim();
    const isdesexed = document.querySelector('#pet-isdesexed').value.trim();
    const description = document.querySelector('#pet-desc').value.trim();
    // const photourl = document.querySelector('#pet-photourl').value.trim();
  
    if (name && species && breed && age && sex && isvaccinated && ismicrochipped && isdesexed && description) {
  
      const response = await fetch(`/api/pet`, {
        method: 'POST',
        body: JSON.stringify({ name, species, breed, age, sex, isvaccinated, ismicrochipped, isdesexed, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to post your pet.');
      }
    }
  };
  
  const deletebuttons = document.querySelectorAll('.delete-pet')
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/pet/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete pet');
      }
    }
  };
  
  document
    .querySelector('#submit-pet')
    .addEventListener('click', newFormHandler);
  
  for (let i = 0; i < deletebuttons.length; i++) {
    deletebuttons[i].addEventListener('click', delButtonHandler);
  }