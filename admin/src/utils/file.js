import Papa from "papaparse";
// import Encoding from 'encoding-japanese';
import { getAllKeys } from "./getAllKeys";

export const readLocalFile = (file, parser) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      const result =
        parser && typeof parser === "function"
          ? parser(event.target.result)
          : event.target.result;
      resolve(result);
    };
    reader.onerror = (error) => {
      console.log("reder on error", error);
      reject();
    };
    reader.readAsText(file);
  });
};

export const readLocalFileCsv = (file) => {
  let reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = function (e) {
      //@ts-ignore
      // var codes = new Uint8Array(e.target['result']);
      // var encoding = Encoding.detect(codes);

      Papa.parse(file, {
        delimiter: "",	// auto-detect
        newline: "",	// auto-detect
        dynamicTyping: true,
        skipEmptyLines: true,
        header: true,
        // encoding: encoding,

        error: function (error) {
          console.log("readLocalFileCsv error", error);
        },
        complete: async (result) => {
          resolve(result);
        },
      });
    };
    reader.onerror = (error) => {
      console.log("reder on error", error);
      reject();
    };

    reader.readAsText(file);
  });

};
