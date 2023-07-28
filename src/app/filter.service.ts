import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Country } from './country.model';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private filteredCountries: Country[] = [];
  private rechercheButtonClickedSubject = new Subject<void>();
  rechercheButtonClicked$ = this.rechercheButtonClickedSubject.asObservable();
  private filteredCountriesSubject = new Subject<Country[]>();
  filteredCountries$ = this.filteredCountriesSubject.asObservable();

  emitRechercheButtonClicked(): void {
    this.rechercheButtonClickedSubject.next();
  }
setFilteredCountries(countries: Country[]): void {
  console.log("Setting filtered countries:", countries);
  this.filteredCountries = countries;
  this.filteredCountriesSubject.next(this.filteredCountries); 
}


   // Method to get the filteredCountries array
   getFilteredCountries(): Country[] {
    return this.filteredCountries;
  }
}
