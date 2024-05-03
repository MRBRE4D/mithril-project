import m from "mithril";

import UserList from "./views/UserList";


// const User = {
//   list: [],
//   loadList: function () {
//     m.request({
//       method: "GET",
//       url: "https://jsonplaceholder.typicode.com/users/1",
//       withCredentials: true,
//     }).then(function (result) {
//       console.log(result)
//       User.list = result;
//     });
//   },
// };
m.mount(document.body, UserList);
