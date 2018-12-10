// Initialize Firebase
window.onload = function(){
var config = {
    apiKey: "AIzaSyCZswvWMe04KYH_XKRA1R2maGG-4B0pC14",
    authDomain: "train-scheduler-21e7b.firebaseapp.com",
    databaseURL: "https://train-scheduler-21e7b.firebaseio.com",
    projectId: "train-scheduler-21e7b",
    storageBucket: "",
    messagingSenderId: "90490777937"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();
    var name = "";
    var destination = "";
    var firsttime = "";
    var frequency = "";

  $("button").on("click", function(){
      event.preventDefault();
      name = $("#input_name").val().trim();
      destination = $("#input_destination").val().trim();
      firsttime = $("#input_firsttime").val().trim();
      frequency = $("#input_frequency").val().trim();

      console.log(name);
      console.log(destination);
      console.log(firsttime);
      console.log(frequency);

      database.ref().push({
          name: name,
          destination: destination,
          firsttime: firsttime,
          frequency: frequency
      });
      database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
          var newtrain = snapshot.val()
          $("tbody").append(`<tr>
                        <td>${newtrain.name}</td>
                        <td>${newtrain.destination}</td>
                        <td>${newtrain.firsttime}</td>
                        <td>${newtrain.frequency}</td>
                        </tr>`)
      })
  })
}
