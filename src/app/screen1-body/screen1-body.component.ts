import { Country, Continent } from '../country.model';
import { MatDialog } from '@angular/material/dialog';
import { CountryModalComponent } from '../country-modal/country-modal.component';
import { Router } from '@angular/router';
import { CountryDataService } from '../country-data.service';

import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../filter.service';
import { ExportService } from '../export.service';

@Component({
  selector: 'app-screen1-body',
  templateUrl: './screen1-body.component.html',
  styleUrls: ['./screen1-body.component.scss'],
})
export class Screen1BodyComponent {
  @Input() countries: Country[] = [];
  @Output() filteredCountriesExport = new EventEmitter<Country[]>();
  dummyCountries: Country[] = [
    {
      id: 1,
      name: 'France',
      population: 67024 ,
      superficie: 547,
      ProduitInterieurBrut: 292000000000,
      continent: Continent.Europe, imageUrl:"https://res.cloudinary.com/nourhen/image/upload/v1690547975/france_oan8ks.jpg"
    },
    {
      id: 2,
      name: "United States",
      population: 332400000,
      superficie: 9834000,
      ProduitInterieurBrut: 20940000000000,
      continent: Continent.NorthAmerica, imageUrl:"https://res.cloudinary.com/nourhen/image/upload/v1690558299/us_ouuwuq.jpg"
    },
    {
      id: 3,
      name: "China",
      population:  1444000000,
      superficie:9597000,
      ProduitInterieurBrut: 17700000000000,
      continent: Continent.Asia, imageUrl:"https://res.cloudinary.com/nourhen/image/upload/v1690558298/china_mplpq3.jpg"
    },
    {
      id: 4,
      name: 'Indonesia',
      population: 273500000,
      superficie: 1919000,
      ProduitInterieurBrut: 1070000000000,
      continent: Continent.Asia, imageUrl:"https://res.cloudinary.com/nourhen/image/upload/v1690558298/indonisia_al81p9.jpg"
    },
    {
      id: 5,
      name: 'Tunisia',
      population: 2000000,
      superficie: 1000,
      ProduitInterieurBrut: 600,
      continent: Continent.Africa,
      imageUrl:"https://res.cloudinary.com/nourhen/image/upload/v1690558299/tunisia_fhdq29.png"
    },
    {
      id: 6,
      name: 'belgique',
      population: 3000000,
      superficie: 1000,
      ProduitInterieurBrut: 200,
      continent: Continent.Europe,
      imageUrl:"https://res.cloudinary.com/nourhen/image/upload/v1690558298/bel_p97e30.jpg"
    },
  ];
  showFilterContainer = false;
  private rechercheButtonClickedSubscription: Subscription;
  private newCountrySubscription: Subscription = new Subscription();

  onButton1Click(): void {
    this.showFilterContainer = !this.showFilterContainer;
  }
  // Filtering variables
  filteredCountries: Country[] = this.countries.slice();
  filterName: string = '';
  filterPopulation: number | null = null;
  filterContinent: string = '';
  filterSuperficie: number | null = null;
  filterProduitInterieurBrut : number | null = null;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private filterService: FilterService,
    private countryDataService: CountryDataService
  ) {
    this.countries = this.dummyCountries;

    this.filteredCountries = this.countries.slice();
    this.rechercheButtonClickedSubscription =
      this.filterService.rechercheButtonClicked$.subscribe(() => {
        this.toggleFilterContainer();
      });
  }
  ngOnInit(): void {
    this.filterService.setFilteredCountries(this.filteredCountries);
    this.newCountrySubscription = this.countryDataService.newCountry$.subscribe(
      (newCountry: Country | undefined) => {
        if (newCountry) {
          this.countries.push({ ...newCountry, id: this.getNextId() });
          this.filterByColumn('name');
        }
      }
    );
  }

  onExportToCSVClick(): void {
    const filteredCountries: Country[] =
      this.filterService.getFilteredCountries();
    console.log('Emitting filtered countries:', filteredCountries);
    this.filteredCountriesExport.emit(filteredCountries);
  }

  ngOnDestroy(): void {
    this.rechercheButtonClickedSubscription.unsubscribe();
  }

  toggleFilterContainer(): void {
    this.showFilterContainer = !this.showFilterContainer;
  }

  openAddCountryModal(): void {
    const dialogRef = this.dialog.open(CountryModalComponent, {
      width: '300px',
      data: {
        country: {
          id: 0,
          name: '',
          population: 0,
          capital: '',
          continent: Continent.Asia,
        },
        isEditing: false,
      },
    });

    dialogRef.afterClosed().subscribe((result: Country) => {
      if (result) {
        this.countries.push({ ...result, id: this.getNextId() });
      }
    });
  }

  // Method to handle filtering by column header 
  filterByColumn(column: string): void {
    switch (column) {
      case 'name':
        this.filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'population':
        this.filteredCountries.sort((a, b) => a.population - b.population);
        break;
      case 'superficie':
        this.filteredCountries.sort((a, b) => a.superficie - b.superficie);
        break;
      case 'ProduitInterieurBrut':
        this.filteredCountries.sort(
          (a, b) => a.ProduitInterieurBrut - b.ProduitInterieurBrut
        );
        break;
      case 'continent':
        this.filteredCountries.sort((a, b) =>
          a.continent.localeCompare(b.continent)
        );
        break;
      default:
        break;
    }
    this.filterService.setFilteredCountries(this.filteredCountries);
    this.applyAllFilters();
  }

  applyAllFilters(): void {
    let filteredData = this.countries;

    if (this.filterName) {
      filteredData = filteredData.filter((country) =>
        country.name.toLowerCase().includes(this.filterName.toLowerCase())
      );
    }

    if (this.filterPopulation !== null && !isNaN(this.filterPopulation)) {
      filteredData = filteredData.filter(
        (country) => country.population >= this.filterPopulation!
      );
    }

    if (this.filterContinent) {
      filteredData = filteredData.filter((country) =>
        country.continent
          .toLowerCase()
          .includes(this.filterContinent.toLowerCase())
      );
    }

    this.filteredCountries = filteredData;
    this.filterService.setFilteredCountries(this.filteredCountries);
  }
  // Method to open the modal for editing a country
  openEditCountryModal(event: Event, country: Country): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(CountryModalComponent, {
      width: '620px',
      height: '400px',
      data: { country: { ...country }, isEditing: true },
    });

    dialogRef.afterClosed().subscribe((result: Country) => {
      if (result) {
        const index = this.countries.findIndex((c) => c.id === result.id);
        if (index !== -1) {
          this.countries[index] = { ...result };
          this.filteredCountries = this.countries.slice();
        }
      }
    });
  }
  viewCountryDetails(country: Country): void {
    this.router.navigateByUrl(`/country/${country.name}`, {
      state: { country },
    });
  }

  // Helper method to get the next available id for a new country
  private getNextId(): number {
    return this.countries.length > 0
      ? Math.max(...this.countries.map((c) => c.id)) + 1
      : 1;
  }

  // Method to filter by name
  filterByName() {
    if (!this.filterName) {
      this.filteredCountries = this.countries.slice();
    } else {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.filterName.toLowerCase())
      );
    }
  }
  // Filter based on the filterPopulation 
  filterByPopulation(filterPopulation: number) {
    if (!filterPopulation || isNaN(filterPopulation)) {
      this.filteredCountries = this.countries.slice();
    } else {
      this.filteredCountries = this.countries.filter(
        (country) => country.population >= filterPopulation
      );
    }
  }
  // Filter based on the filterByProduitInterieurBrut 
  filterByProduitInterieurBrut(filterProduitInterieurBrut: number) {
    if (!filterProduitInterieurBrut || isNaN(filterProduitInterieurBrut)) {
      this.filteredCountries = this.countries.slice();
    } else {
      this.filteredCountries = this.countries.filter(
        (country) => country.population >= filterProduitInterieurBrut
      );
    }
  }
  // Filter based on the filterBySuperficie 
  filterBySuperficie(filterSuperficie: number) {
    if (!this.filterSuperficie || isNaN(this.filterSuperficie)) {
      this.filteredCountries = this.countries.slice();
    } else {
      this.filteredCountries = this.countries.filter(
        (country) => country.superficie >= filterSuperficie
      );
    }
  }

  // Method to filter by continent
  filterByContinent() {
    if (!this.filterContinent) {
      this.filteredCountries = this.countries.slice();
    } else {
      this.filteredCountries = this.countries.filter((country) =>
        country.continent
          .toLowerCase()
          .includes(this.filterContinent.toLowerCase())
      );
    }
  }
}
