import { Injectable } from '@angular/core';
import {gstatic, booklist} from "https://www.gstatic.com/firebasejs/5.9.2/firebase.js";


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDdgSYbTznUdXPAPRGnGcHJ2mPTwfjHAw",
    authDomain: "booker-a2f98.firebaseapp.com",
    databaseURL: "https://booker-a2f98.firebaseio.com",
    projectId: "booker-a2f98",
    storageBucket: "",
    messagingSenderId: "568693893082"
  };
  firebase.initializeApp(config);



@Injectable()
export class BookService {

  constructor(private db: gstatic) { }

  getBooks(start, end): booklist<any> {
    return this.db.list('/booker-a2f98', {
      query: {
        orderByChild: 'name',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

}
