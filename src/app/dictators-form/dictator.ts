export class Dictator {
    FirstName : string;
    LastName : string;
    DateOfBirth : Date;
    DateOfDeath : Date;

    constructor(firstName : string, lastName : string, dateOfBirth : Date, dateOfDeath? : Date )
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.DateOfBirth = dateOfBirth;
        this.DateOfDeath = dateOfDeath;
    }
}
