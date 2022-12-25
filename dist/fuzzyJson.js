/* 
jsonKeyFlat v1.0.0 | open-source library for JavaScript and typeScript Module 
Copyright 12/23/2022, 1:12:13 AM | VovemDev | MIT-license
*/

// flatten json
const  flatten = (jsonObject)=> {
    const output = {};
  
    for (let propertyObject in jsonObject) {
      const value = jsonObject[propertyObject];
  
      if (isObject(value)) {
        const objectValue = flatten(value);
  
        for (let nestedObject in objectValue) {
          const flatentValue = objectValue[nestedObject];
          output[propertyObject + "." + nestedObject] = flatentValue;
        }
      } else {
        output[propertyObject] = value;
      }
    }
    return output;
  };

  // unflatten json
  const unflatten = (jsonObject) => {
    const output = {};
    for (let obj in jsonObject) {
      const objKey = obj.split('.');
      objKey.reduce(function(s, o, n) {
        return s[o] || (s[o] = isNaN(Number(objKey[n + 1])) ? 
        (objKey.length - 1 == n ? 
          jsonObject[obj] : {}) : []);
      }, output);
    }
    return output;
  };

     // is plain object
     function isObject(value) {
      return (
        value !== null && value !== undefined && !Array.isArray(value) && typeof value === "object"
      );
    };  

module.exports = {
    flatten,
    unflatten
};