import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 @title fakeGoogle
 */
@Component({
  selector: 'fakeGoogle',
  templateUrl: 'fakeGoogle.html',
  styleUrls: ['fakeGoogle.css'],
})
export class FakeGoogle implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Patricia loves the sound of nails strongly pressed against the chalkboard,', 'More RVs were seen in the storage lot than at the campground.', 'Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?', "It isn't true that my mattress is made of cotton candy.", 'She let the balloon float up into the air with her hopes and dreams.'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  lookFor(url: any){
    window.open(url, "_blank");
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
