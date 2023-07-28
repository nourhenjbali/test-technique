import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  private newCountrySubject = new BehaviorSubject<Country | undefined>(undefined);
  public newCountry$ = this.newCountrySubject.asObservable();

  setNewCountry(newCountry: Country): void {
    this.newCountrySubject.next(newCountry);
  }

  getNewCountry(): Country | undefined {
    return this.newCountrySubject.getValue();
  }

  clearNewCountry(): void {
    this.newCountrySubject.next(undefined);
  }
}
