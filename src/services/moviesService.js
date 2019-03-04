const movies = [
  {
    _id: "1",
    title: "Terminator",
    genre: { _id: 1, name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    liked: true
  },
  {
    _id: "2",
    title: "Die Hard",
    genre: { _id: 1, name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked: true
  },
  {
    _id: "3",
    title: "Airplane",
    genre: { _id: 3, name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "4",
    title: "Gone Girl",
    genre: { _id: 2, name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5",
    title: "Terminator",
    genre: { _id: 1, name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5
  },
  {
    _id: "6",
    title: "Avengers",
    genre: { _id: 1, name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "7",
    title: "URI",
    genre: { _id: 1, name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5
  },
  {
    _id: "8",
    title: "Andhadhun",
    genre: { _id: 2, name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5
  },
  {
    _id: "9",
    title: "Trip to Italy",
    genre: { _id: 3, name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "10",
    title: "Get Out",
    genre: { _id: 2, name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  }
];

const genres = [
  { _id: 1, name: "Action" },
  { _id: 2, name: "Thriller" },
  { _id: 3, name: "Comedy" },
  { _id: 4, name: "Drama" }
];

export function getMovies() {
  return movies;
}

export function getMovieById(id) {
  return movies.find(m => m._id === id);
}

export function getGenres() {
  return genres;
}
