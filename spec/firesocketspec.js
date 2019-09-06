/* global describe it expect */

/**
 * @typedef { import("firebase") } firebase
 */

const FireSocket = require("../firesocket");

const firebase = require("@firebase/testing");
const app = firebase.initializeTestApp({
  projectId: "my-project",
  auth: {uid: "123", email: "name@domain.com"},
});

const attempt = app.firestore()
  .collection("colId").doc("docId").get();
firebase.assertFails(attempt);
firebase.assertSucceeds(attempt);

describe("firesocket", () => {
  it("address", () => {
    expect(new FireSocket("abc.xyz").address).toBe("abc.xyz");
  });
});
