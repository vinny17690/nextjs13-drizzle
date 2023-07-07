const getPersonDetails = async () => {
  return (await fetch('http://localhost:3000/api/person')).json();
}
export default async function Person() {
  const details = await getPersonDetails();
  console.log(details);
  return (
    <>
      <h2>Person page</h2>
      <p>Person name: {details.name}</p>
      <p>Person age: {details.age}</p>
    </>
  );
}