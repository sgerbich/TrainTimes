//worked with Alex Cryderman
var config = {
    apiKey: "AIzaSyDIwC2w9nZC324g1myVd6-xqNTrb27N1Ys",
    authDomain: "something-new-3f430.firebaseapp.com",
    databaseURL: "https://something-new-3f430.firebaseio.com",
    projectId: "something-new-3f430",
    storageBucket: "something-new-3f430.appspot.com",
    messagingSenderId: "452031339449"
};
firebase.initializeApp(config);
var database = firebase.database();
var tName;
var dest;
var firstT;
var freq;
$(document).ready(function () {

    $(document).on("click", "#submitButton", function (event) {

        event.preventDefault();
        tName = $("#train-submit").val().trim();
        dest = $("#dest-submit").val().trim();
        freq = $("#freq-submit").val().trim();
        firstT = $("#firstT-submit").val().trim();
        database.ref().push({
            tName: tName,
            dest: dest,
            freq: freq,
            firstT: firstT
        });
        $("#train-submit").val("");
        $("#dest-submit").val("");
        $("#freq-submit").val("");
        $("#firstT-submit").val("");
    })
    database.ref().on("child_added", function (cSnapshot, prevChildKey) {
        var trainName = cSnapshot.val().tName;
        var destination = cSnapshot.val().dest;
        var frequency = cSnapshot.val().freq;
        var firstTrain = cSnapshot.val().firstT;

        var trainConv = moment(firstTrain, "hh:mm");
        var currentTime = moment();
        var diff = moment().diff(moment(trainConv), "minutes");
        var remain = diff % frequency;
        var tilTrain = frequency - remain;
        var nextTrain = moment().add(tilTrain, "minutes");
        var reformatTrain = moment(nextTrain).format("hh:mm");


        $("#target").append(
            "<tr><td>" + trainName +
            "</td><td>" + destination +
            "</td><td>" + frequency +
            "</td><td>" + tilTrain +
            "</td><td>" + reformatTrain +
            "</td><td>"
        )

    })
});