export interface Film {
    id :number,
    name :string,
    score :string,
    episodes :number,
    description? :string,
    genres :string[],
    videos? :{url:string}[],
    screenshots? :string
}
