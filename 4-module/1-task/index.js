function makeFriendsList(friends) {
  let fullNameList = document.createElement('ul');
  let fullName = friends.map(item => `${item.firstName} ${item.lastName}`);
  for (let name of fullName) {
    let li = document.createElement('li');
    li.append(name);
    fullNameList.append(li);
  }            
  return fullNameList;
}