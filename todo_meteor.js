//simple-todo
if (Meteor.isClient) {
  //This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "This is task One"},
      { text: "This is task Two"},
      { text: "This is task Three"},
      { text: "This is task Four" }
    ]
  });
}