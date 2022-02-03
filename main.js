async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  creatBreedList(data.message);
}

start();

function creatBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select>
        <option>Choose a dog</option>
        ${Object.keys(breedList)
          .map(function (breed) {
            return `<option>${breed}</option>`;
          })
          .join("")}
      </select>
`;
}
