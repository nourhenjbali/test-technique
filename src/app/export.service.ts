import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor() {}

  exportToCSV(data: Country[], fileName: string): void {
    const csvData = this.convertToCSV(data);

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    FileSaver.saveAs(blob, `${fileName}.csv`);
    alert('here filesaver');
  }

  private convertToCSV(data: Country[]): string {
    const header = Object.keys(data[0]).join(',');
    alert(header);
    alert('here convert');
    const rows = data.map((obj) => Object.values(obj).join(','));
    return `${header}\n${rows.join('\n')}`;
  }
}
