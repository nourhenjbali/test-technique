export enum Continent {
    Africa = 'Africa',
    Asia = 'Asia',
    Europe = 'Europe',
    NorthAmerica = 'North America',
    SouthAmerica = 'South America',
    Australia = 'Australia',
    Antarctica = 'Antarctica'
  }
  
  export interface Country {
    id: number;
    name: string;
    population: number;
    superficie: number;
    ProduitInterieurBrut : number ,
    continent: Continent;
    imageUrl: string; 

  }
