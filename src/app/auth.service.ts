import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedIn!: boolean;

  constructor(private router: Router, private fireAuth: AngularFireAuth) {
    this.userLoggedIn = false;

    this.fireAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }

  async login(value: { email: string; password: string }): Promise<any> {
    return this.fireAuth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((result) => {
        this.userLoggedIn = true;
        console.log('User logged in');
        return result.user;
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          return { state: 'error', message: 'Invalid email' };
        } else if (error.code === 'auth/user-disabled') {
          return { state: 'error', message: 'User disabled' };
        } else if (error.code === 'auth/user-not-found') {
          return { state: 'error', message: 'User not found' };
        } else if (error.code === 'auth/wrong-password') {
          return { state: 'error', message: 'Wrong password' };
        }
        return { state: 'error', message: error };
      });
  }

  async logout(): Promise<void> {
    return this.fireAuth
      .signOut()
      .then(() => {
        this.router.navigate(['/login']); // when we log the user out, navigate them to home
      })
      .catch((error) => {
        console.log('Auth Service: logout error...');
        console.log('error code', error.code);
        console.log('error', error);
        if (error.code) return error;
      });
  }

  // TODO -- reset password
  async resetPassword(email: string): Promise<object> {
    try {
      await this.fireAuth.sendPasswordResetEmail(email);
      console.log('Password reset email sent');
      return {
        status: true,
      };
    } catch (error) {
      console.log('Error sending password reset email');
      // @ts-ignore
      console.log('error code', error.code);
      console.log('error', error);
      // @ts-ignore
      if (error.code) {
        // @ts-ignore
        return { error };
      }
      return { error };
    }
  }
}
