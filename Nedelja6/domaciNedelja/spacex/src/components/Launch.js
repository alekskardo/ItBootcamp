export const Launch = (launch) => {
  const Div = document.createElement("div");
  Div.className = "launch";
  const div1 = document.createElement("div");
  div1.className = "inner-div-0";
  div1.innerHTML = `<img src="${launch.links.mission_patch}" alt="">`;
  const div2 = document.createElement("div");
  div2.className = "inner-div-1";
  div2.innerHTML = `<span>${launch.rocket.rocket_name}</span>`;
  const div3 = document.createElement("div");
  div3.className = "inner-div-2";
  div3.innerHTML = `<span>${launch.launch_year}</span>`;
  Div.append(div1, div2, div3);
  return Div;
};
