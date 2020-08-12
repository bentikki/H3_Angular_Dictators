import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Dictator } from './dictator';

@Component({
  selector: 'app-dictators-form',
  templateUrl: './dictators-form.component.html',
  styleUrls: ['./dictators-form.component.css']
})
export class DictatorsFormComponent implements OnInit {

  dictatorFormData : FormGroup;

  private _dictators: Dictator[] = []; 
  public get Dictators(): Dictator[] {
    return this._dictators;
  }

  constructor() {}

  ngOnInit(): void {

    this.dictatorFormData = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      yearOfBirth: new FormControl('',[Validators.required]),
      yearOfDeath: new FormControl(),
    });
  
  }

  public createNewSubmit(){
    
    if(this.dictatorFormData.valid){
      let dictator = new Dictator
      (
        this.dictatorFormData.get('firstName').value,
        this.dictatorFormData.get('lastName').value,
        this.dictatorFormData.get('yearOfBirth').value,
        this.dictatorFormData.get('yearOfDeath').value
      );
  
      this._dictators.push(dictator);
    }
    else
    {
      alert("The form is invalid!");
    }
  }

  public removeDictator(index : number){
    this._dictators.splice(index, 1); 
    //this._dictators = this._dictators.filter(obj => obj.FirstName !== firstName);
  }

}
