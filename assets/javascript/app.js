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

    $(document).on("click", "#submitButton", function () {
        database.ref().on("value", function (snapshot) {
            var remoteData = snapshot.val();
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


        })


    })
});