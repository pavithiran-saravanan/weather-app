// A factory that returns a dom element based on the parameters
export default function comp(type, className, ...properties) {
  const element = document.createElement(type);
  if (className) element.className = className;
  properties.forEach((obj) => {
    const key = Object.keys(obj)[0];
    const value = obj[key];
    element.setAttribute(key, value);
  });
  return element;
}
