import m from "mithril";

const User = {
  list: [],
  loadList: function () {
    m.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/",
      withCredentials: true,
    }).then(function (result) {
      console.log(result);
      User.list = result;
    });
  },
};

export default User;
//TODO : POKEmon api 
