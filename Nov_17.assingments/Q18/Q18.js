// if (true) {
//   let x = 10;
//   var y = 20;
// }
// console.log(y);
// console.log(x);
//x is not defined because it is in  function not work in globalscope


const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);  // "test@mail.com"
console.log(profile?.user?.details?.phone);  // undefined (no error thrown)


const user = {
  profile: {
    name: "Sam"
  }
  // 'settings' is still missing
};

// Safely access the nested property:
console.log(user.profile?.settings?.theme); 
// ✅ Logs: undefined (no error thrown)