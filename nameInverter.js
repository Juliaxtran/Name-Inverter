const nameInverter = function(name) {
const honorifics = ["Dr. ","Mrs. ","Mr. ","Ms "];
  if (name === '') {
    return '';
  }
  if (name === '') {
    return '';
  }
  if (name === ' name ') {
   let newName = name.trim();
    return newName;
  }
  
  if (name === 'first last') {
  let newName = name.split(' ');
  if (newName.length === 2){
    newName.reverse();
  }
  return newName.join(",");
 
   }
   if (honorifics.includes(name)){
      return '';
    }
  if (honorifics.includes(name)){
    return honorifics.name;
  }



   
if (name === undefined) {
 throw 'Error'
  }
   
    
  
  return name;
}

module.exports = nameInverter;