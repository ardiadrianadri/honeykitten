import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    selector: 'sign-in',
    templateUrl: 'sign_in.html'
})
export class SignInPage {

    public singupForm: FormGroup;
    public errorsMsg: {[key: string]: string } = {}
    public image = null;

    public get name() { return this.singupForm.get('name'); }
    public get surname() { return this.singupForm.get('surname'); }
    public get email() { return this.singupForm.get('email'); }
    public get username() { return this.singupForm.get('username'); }
    public get password() { return this.singupForm.get('password'); }
    public get confirmation() { return this.singupForm.get('confirmation'); }
    public get showErrors() {return Object.keys(this.errorsMsg).length > 0}
    public get errors() {return Object.keys(this.errorsMsg); }

    private _options: CameraOptions = {
        destinationType: this._camera.DestinationType.DATA_URL,
        encodingType: this._camera.EncodingType.JPEG,
        mediaType: this._camera.MediaType.PICTURE
    }

    constructor(
        private _fb: FormBuilder,
        private _camera: Camera,
        private _nav: NavController
    ) {
        this.singupForm = this._fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', Validators.compose([Validators.email, Validators.required])],
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, this._passwordValidation])],
            confirmation: ['', Validators.compose([this._passwordValidation, Validators.required])]
        });
    }

   private _passwordValidation(control: AbstractControl): ValidationErrors | null {
        let result = null;
        let pwd: string;
        let confir: string;

        if (control.parent) {
            pwd = control.parent.get('password').value;
            confir = control.parent.get('confirmation').value;

            result = pwd && confir && pwd!==confir ? {'passwordNotMatch': true} : null;
        }

        return result;
   }

    public submit() {
        this._nav.pop();
    }

    public clean() {
        this.singupForm.reset();
    }

    public checkErrors (key: string) {
        let formControl = this.singupForm.get(key);
        if (formControl.errors) {
            this.errorsMsg[key] = '';
            Object.keys(formControl.errors).forEach((error:string) => {
                switch(error) {
                    case 'required':
                        this.errorsMsg[key] += `The ${key} is required `;
                    break;
                    case 'email':
                        this.errorsMsg[key] += `The ${key} has a wrong format `;
                    break;
                    default:
                        this.errorsMsg[key] += `The passwords do not match`;
                }
            });
        } else {
            delete this.errorsMsg[key];
        }
    }

    public takePicture() {
        this._camera.getPicture(this._options).then((image: any)=> {
            this.image ='data:image/jpeg;base64,' + image;
        },(err: any) => {
            throw new Error(err);
        });
    }
}
