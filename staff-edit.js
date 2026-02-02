db.collection("registrations").add({
  name,
  studentId,
  email,
  timestamp: new Date()
});

db.collection("registrations").get().then(snapshot => {
  snapshot.forEach(doc => {
    // show student + delete button
  });
});
