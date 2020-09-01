import { getAllLaunches } from "../service";
import { showLaunchesByYear } from "../index";

export const SelectList = () => {
  const selectElement = document.createElement("select");
  selectElement.id = "select-year";
  selectElement.addEventListener("change", (e) => {
    showLaunchesByYear(e.target.value);
  });
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "Select year";
  selectElement.appendChild(emptyOption);
  getAllLaunches().then((res) => {
    let godina = res.data.map((launch) => launch.launch_year).filter(jedini);
    godina.forEach((element) => {
      const option = document.createElement("option");
      option.value = element;
      option.textContent = element;
      selectElement.appendChild(option);
    });
  });
  return selectElement;
};

function jedini(value, index, self) {
  return self.indexOf(value) === index;
}
