import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { ExportService } from '../export.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss'],
})
export class Screen1Component implements OnInit {
  filteredCountries: Country[] = [];
  countries: Country[] = [];

  constructor(private exportService: ExportService) {}

  ngOnInit(): void {
  }

  onFilteredCountriesExport(filteredCountries: Country[]): void {
    console.log("Received filtered countries:", filteredCountries);
    this.filteredCountries = filteredCountries;
  }

  onExportToCSVClick(): void {
    //alert("working from screen 1 component  exporting !");
    console.log("this is exporting data", this.filteredCountries);
    this.exportService.exportToCSV(this.filteredCountries, 'countries');
  }
}
