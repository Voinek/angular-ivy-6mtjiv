import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import data from './assets/data.json';

@Component({
  selector: 'app-',
  templateUrl: './fakeGoogle.component.html',
  styleUrls: ['./fakeGoogle.component.css'],
})
export class FakeGoogleComponent implements OnInit {
  control = new FormControl('');
  searches: string[] = [];
  searchesJson: { id: number; searches: string }[] = data;
  filteredStreets: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.searches = Object.values(data[0])
    console.log(this.searches)
  }

  lookFor() {
    let inputValue = (<HTMLInputElement>document.getElementById('searchText'))
      .value;

    console.log(data);
    window.open(`https://www.google.pl/search?q=${inputValue}`, '_blank');
  }
  private _filter(value: string): string[] {


    const filterValue = this._normalizeValue(value);
    return this.searches.filter((search) =>
      this._normalizeValue(search).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
