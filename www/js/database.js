var database = {};
    window.indexedDB = window.indexedDB || window.webkitIndexedDB ||
                    window.mozIndexedDB;

    if ('webkitIndexedDB' in window) {
      window.IDBTransaction = window.IDBTransaction;
      window.IDBKeyRange = window.IDBKeyRange;
    }

    database.indexedDB = {};
    database.indexedDB.db = null;

    database.indexedDB.onerror = function(e) {
      console.log(e);
    };

    database.indexedDB.open = function() {
      var version = 1;
      var request = indexedDB.open("notes", version);

      // We can only create Object stores in a versionchange transaction.
      request.onupgradeneeded = function(e) {
        var db = e.target.result;

        // A versionchange transaction is started automatically.
        e.target.transaction.onerror = database.indexedDB.onerror;

        if(db.objectStoreNames.contains("note")) {
          db.deleteObjectStore("note");
        }

        var store = db.createObjectStore("note",
          {keyPath: "timeStamp"});
      };

      request.onsuccess = function(e) {
        database.indexedDB.db = e.target.result;
        database.indexedDB.getAllNoteItems();
      };

      request.onerror = database.indexedDB.onerror;
    };

    database.indexedDB.addNote = function(noteText) {
      var db = database.indexedDB.db;
      var trans = db.transaction(["note"], "readwrite");
      var store = trans.objectStore("note");

      var data = {
        "text": noteText,
        "timeStamp": new Date().getTime()
      };

      var request = store.put(data);

      request.onsuccess = function(e) {
        database.indexedDB.getAllNoteItems();
      };

      request.onerror = function(e) {
        console.log("Error Adding: ", e);
      };
    };

    database.indexedDB.deleteNote = function(id) {
      var db = database.indexedDB.db;
      var trans = db.transaction(["note"], "readwrite");
      var store = trans.objectStore("note");

      var request = store.delete(id);

      request.onsuccess = function(e) {
        database.indexedDB.getAllNoteItems();
      };

      request.onerror = function(e) {
        console.log("Error Adding: ", e);
      };
    };

    database.indexedDB.getAllNoteItems = function() {
      var notes = document.getElementById("noteItems");
      notes.innerHTML = "";

      var db = database.indexedDB.db;
      var trans = db.transaction(["note"], "readwrite");
      var store = trans.objectStore("note");

      // Get everything in the store;
      var keyRange = IDBKeyRange.lowerBound(0);
      var cursorRequest = store.openCursor(keyRange);

      cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result == false)
          return;

        rendernote(result.value);
        result.continue();
      };

      cursorRequest.onerror = database.indexedDB.onerror;
    };

    function rendernote(row) {
      var notes = document.getElementById("noteItems");
      var li = document.createElement("div");
      //var a = document.createElement("a");
      var t = document.createTextNode(row.text);

      li.addEventListener("click", function() {
        database.indexedDB.deleteNote(row.timeStamp);
      }, false);

      li.href = "#";
      //a.textContent = " [Delete]";
      li.appendChild(t);
      //li.appendChild(a);
      notes.appendChild(li);
    }

    function addNote() {
      var note = document.getElementById("note");
      database.indexedDB.addNote(note.value);
      note.value = "";
    }

    function init() {
      database.indexedDB.open();
    }

    window.addEventListener("DOMContentLoaded", init, false);