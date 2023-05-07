/* 
`findUserByUsername` accepts an array of objects, each with a key of username, and a string. The 
  function should return the first object with the key of username that matches the string passed to 
  the function. If the object is not found, return undefined. 
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(object){
    return object.hasOwnProperty('username') && object['username'] === username;
  });
}

/*
`removeUser` accepts an array of objects, each with a key of username, and a string. The function 
  should remove the object from the array and return the removed object. If the object is not 
  found, return undefined. 
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/
function removeUser(usersArray, username) {
  let index = usersArray.findIndex(function(object){
    return object.hasOwnProperty('username') && object['username'] === username;
  });
  
  if (index > -1) {
    let object = usersArray[index] // save return value before removing
    usersArray.splice(index, 1);
    return object;
  }
}