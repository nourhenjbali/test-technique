import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Continent, Country } from '../country.model';
import { CountryDataService } from '../country-data.service';
import { CloudinaryService } from '../cloudinary.service';

@Component({
  selector: 'app-newcountry-modal',
  templateUrl: './newcountry-modal.component.html',
  styleUrls: ['./newcountry-modal.component.scss'],
})
export class NewcountryModalComponent {
  continents = Object.values(Continent);
  newCountry: Country = {
    id: 0,
    name: '',
    population: 0,
    superficie: 0,
    ProduitInterieurBrut: 0,
    continent: Continent.Asia,
    imageUrl: '',
  };

  selectedImageFile: File | null = null;
  cloudinaryInstance: any; 

  constructor(
    private countryDataService: CountryDataService,
    private cloudinaryService: CloudinaryService,
    public dialogRef: MatDialogRef<NewcountryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data?.country) {
      this.newCountry = { ...data.country };
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any): void {
    this.selectedImageFile = event.target.files[0];
  }

  openUploadWidget(): void {
    if (!this.selectedImageFile) {
      console.error('No image selected.');
      return;
    }

    const uploadPreset = 'nourhen'; 
    const formData = new FormData();
    formData.append('file', this.selectedImageFile);
    formData.append('upload_preset', uploadPreset);

    fetch(`https://api.cloudinary.com/v1_1/nourhen/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Done! Here is the image info:', result);
        this.newCountry.imageUrl = result.secure_url;
        this.countryDataService.setNewCountry(this.newCountry);
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  }
}
