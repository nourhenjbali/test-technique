import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  private cloudinaryConfig: any;

  constructor() {
    this.cloudinaryConfig = {
      cloud_name: 'nourhen',
      api_key: 'b8a2817afb011196923ddaa9e67932',
    };
  }

  uploadImage(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your-upload-preset'); 
     
    });
  }
}
