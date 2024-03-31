async function fetchData(url, options){
  const responce = await fetch(url, options);
  if (!responce.ok) throw new Error('Invalid Input');
  const json = responce.json();
  return json;
}

async function GetExample(){
  const url = 'https://reqres.in/api/users/1';
  const data = await fetchData(url);
  console.log(data);
}

async function PostExample() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer'
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

GetExample();
PostExample();
