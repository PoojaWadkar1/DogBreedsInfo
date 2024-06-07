import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dogBreedInfo';
  breeds: any[] = [];
  searchControl = new FormControl('');
  page = 1;
  totalBreeds: number | undefined;

  constructor(private dogBreedService: HttpServiceService) {}

  ngOnInit() {
    this.getBreeds(this.page);

    this.searchControl.valueChanges.pipe(
      debounceTime(250),
      filter((value:any) => value.length > 3),
      distinctUntilChanged(),
      switchMap((query:any) => this.dogBreedService.searchBreeds(query))
    ).subscribe((data: any) => {
      this.breeds = data.results;
    });
  }

  getBreeds(page: number) {
    this.dogBreedService.getBreeds(page).subscribe((data: any) => {
      this.breeds = data.results;
      this.totalBreeds = data.count;
    });
  }

  onPageChange(event: any) {
    this.page = event.pageIndex + 1;
    this.getBreeds(this.page);
  }
}
