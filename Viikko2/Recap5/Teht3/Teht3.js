async function fetchData(method){
  try{
    const responce = await fetch('https://reqres.in/api/unknown/23', {method});
    if (!responce.ok) throw new Error('Invalid Input!');
    const json = await responce.json();
    console.log(json)
  } catch (error) {
    console.log(error.message);
  }
}

fetchData('GET');
fetchData('POST');
fetchData('PUT');
fetchData('DELETE')


