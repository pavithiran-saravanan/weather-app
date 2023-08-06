let data = null;

export default function dataCache(setter) {
  if (setter) {
    data = setter;
    return true;
  }
  return data;
}
