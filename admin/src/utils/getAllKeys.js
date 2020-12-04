import { union } from "lodash";

/**
 * The functions checks all entries and list all keys
 * @param {} array
 */
export const getAllKeys = (array) => {
  let keys = [];
  if (!Array.isArray(array)) {
    return keys;
  }

  for (let i = 0; i < array.length; i++) {
    const _keys = Object.keys(array[i]);
    keys = union(keys, _keys);
  }
  return keys;
};
