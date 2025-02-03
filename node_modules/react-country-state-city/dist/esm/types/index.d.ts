export interface Country {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    native: string;
    region: string;
    subregion: string;
    emoji: string;
    emojiU: string;
    tld: string;
    latitude: string;
    longitude: string;
}
export interface Phonecodes {
    id: number;
    name: string;
    phone_code: string;
    region: string;
}
export interface Region {
    id: number;
    name: string;
}
export interface State {
    id: number;
    name: string;
    state_code: string;
    latitude: string;
    longitude: string;
}
export interface Language {
    code: string;
    name: string;
    native: string;
}
export interface CountryState {
    id: number;
    states: [State];
}
export interface City {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
}
export interface CountryStateCity {
    id: number;
    states: [
        {
            id: number;
            cities: [City];
        }
    ];
}
