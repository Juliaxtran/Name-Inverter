const nameInverter = function (name) {
  const honorifics = ["Dr.", "Mrs.", "Mr.", "Ms."];
  // undefined and empty conditions
  if (name === '') {
    return '';
  }

  if (name === undefined) {
    throw 'Error'
  }

  // if name is at least one word
  if (name.split(" ").length > 1) {
    // trim white space 
    const newName = name.split(" ").filter((x) => x);
    if (newName.length === 1) {
      let oneName = newName.join(" ");
      // honorific conditions 
      return honorifics.includes(oneName) ? "" : oneName;
      //if honorifics includes name return honorific plus the name if it not return last, first
    } else if (newName.length === 2) {
     return honorifics.includes(newName[0]) ? `${newName[0]} ${newName[1]}` : `${newName[1]}, ${newName[0]}`;
     
    }
      
    // honorific plus last and first name condition
    if (newName.length === 3) {
      return `${newName[0]} ${newName[2]}, ${newName[1]}`;
    }
  }

  return name;
};

module.exports = nameInverter;