// country-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Country, Continent } from '../country.model';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.scss']
})
export class CountryModalComponent {
  continents = Object.values(Continent);
  country: Country;

  constructor(
    public dialogRef: MatDialogRef<CountryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { country: Country, isEditing: boolean }
  ) {
    this.country = { ...data.country };
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    
    this.dialogRef.close(this.country);
  }
}
