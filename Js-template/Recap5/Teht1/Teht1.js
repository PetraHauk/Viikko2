async function getFunction(){
  try{
    const responce = await fetch('https://reqres.in/api/users/1');
    const json = await responce.json();
    console.log(json)
  } catch (error) {
    console.log(error.message);
  }
}

getFunction()
