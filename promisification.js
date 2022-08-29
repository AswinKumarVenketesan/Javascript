//callback

// function getUsers(callback) {
// 	setTimeout(() => {
// 	  callback([
// 		{ username: 'aswin', email: 'aswin@gmail.com' },
// 		{ username: 'kumar', email: 'kuar@gmail.com' },
// 	  ]);
// 	}, 1000);
//   }
  
//   function findUser(username, callback) {
// 	getUsers((users) => {
// 	  const user = users.find((user) => user.username == username);
// 	  callback(user);
// 	});
//   }
  
//   findUser('aswin', console.log);

let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'aswin', email: 'aswin@gmail.com' },
          { username: 'kumar', email: 'kumar@gmail.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function successfull(users) {
  console.log(users);
}
function failure(error) {
  console.log(error);
}

const promise = getUsers();
promise.then(successfull, failure);
