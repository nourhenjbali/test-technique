import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../filter.service';
import { ExportService } from '../export.service'; 
import { Continent, Country } from '../country.model';
import { Router } from '@angular/router';
import { NewcountryModalComponent } from '../newcountry-modal/newcountry-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CountryDataService } from '../country-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string = '';
  @Input() headerType: string = '';
  filteredCountries: Country[] = []; 


  @Output() addNewCountry = new EventEmitter<Country>(); 

  @Output() search = new EventEmitter<string>();
  @Output() filteredCountriesExport = new EventEmitter<Country[]>(); 

  searchQuery: string = '';

  constructor(   private countryDataService: CountryDataService,
    private dialog: MatDialog, private router: Router,private filterService: FilterService , private exportService: ExportService) {
    this.filterService.filteredCountries$.subscribe((filteredCountries: Country[]) => {
      this.filteredCountries = filteredCountries; 
    });
   }

   ngOnInit(): void {
    this.filterService.filteredCountries$.subscribe((filteredCountries: Country[]) => {
      //console.log("Setting filtered countries:", filteredCountries);
    });
  }

  onSearch() {
    this.search.emit(this.searchQuery);
  }

  onButton1Click(): void {
    this.filterService.emitRechercheButtonClicked();
  }

  onExportToCSVClick(): void {
    const filteredCountries: Country[] = this.filterService.getFilteredCountries();

    this.filterService.setFilteredCountries(filteredCountries);

   // console.log("here from export to csv", filteredCountries);
    this.exportService.exportToCSV(filteredCountries, 'countries');
  }
 

  onButton3Click() {
    this.router.navigateByUrl(`/screen1`);
  }

  onButton2Click() {
    const dialogRef = this.dialog.open(NewcountryModalComponent, {
      width: '550px',
      
      data: {
        country: {
          id: 0,
          name: '',
          population: 0,
          superficie: 0,
          ProduitInterieurBrut : 0 ,
          continent: Continent.Asia,
        },
        isEditing: false,
      },
    });

    dialogRef.afterClosed().subscribe((result: Country) => {
      if (result) {
        //alert(JSON.stringify(result));
        this.countryDataService.setNewCountry(result);
      }
    });
}}
