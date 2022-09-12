import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Country } from './models/country';



const Countries = gql`
{
  countries {
      name
    	continent {
        name
      }
    	phone
      capital
      currency
      languages {
        name
      }
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedCountry: string = ""
  allCountries:Country[] = []
  constructor(private apollo: Apollo){

  }
  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: Countries
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading)
      this.allCountries = data.countries
    })
  }
}






  