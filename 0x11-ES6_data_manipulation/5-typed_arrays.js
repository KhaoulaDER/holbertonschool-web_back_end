export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedarray = new DataView(buffer);
  try {
    typedarray.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }
  return typedarray;
}
