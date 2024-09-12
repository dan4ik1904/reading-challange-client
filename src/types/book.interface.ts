export interface IBook {
    id: string;
    author: string;
    name: string;
    pageCount: number;
    ratting: number;
    review: string;
    userId: string;
}

export interface ICreateBook extends Omit<IBook, 'id'> {}
