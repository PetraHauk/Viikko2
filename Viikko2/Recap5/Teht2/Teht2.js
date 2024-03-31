async function postData() {
  try {
    const data = {
      first_name: 'Harry',
      last_name: 'Johnson'
    };

    const responce = await fetch('https://reqres.in/api/users', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    });

    console.log(responce);

  } catch (error) {
    console.log(error.message);
  }
}

postData()
