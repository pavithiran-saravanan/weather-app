// Returns an array of elements which represent current weather and location info
export default function getCurrentItems(obj) {
  const weatherItems = [];
  Object.keys(obj).forEach((objKey) => {
    if (objKey === "weatherIcon") return;
    const div = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = objKey;
    const value = document.createElement("p");
    value.textContent = obj[objKey];
    div.append(title, value);
    weatherItems.push(div);
  });
  return weatherItems;
}
