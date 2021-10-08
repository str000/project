import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor(public router: Router, public ngZone: NgZone, private snackBar: MatSnackBar ) {}

    verticalPosition: MatSnackBarVerticalPosition = 'top';

    signIn(email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            this.ngZone.run(() => {
                this.router.navigate(['profile']);
            });
        })
        .catch((error) => {
            this.snackBar.open('Błędny login lub hasło', '', {
                duration: 1500
            });
        });
    }

    signUp(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            this.ngZone.run(() => {
                this.router.navigate(['profile']);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    signOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);          
        }).catch((error) => {});
      }

}