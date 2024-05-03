import m from "mithril";

import User from "../models/User";

const Userlist = {
  oninit: User.loadList,
  view: function () {
    return m(
      ".user-list",
      User.list.map(function (user) {
        return m(".user-list-item", user.id + " " + user.name);
      })
    );
  },
};
export default Userlist;
