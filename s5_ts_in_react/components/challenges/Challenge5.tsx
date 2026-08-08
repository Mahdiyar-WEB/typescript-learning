import { ChangeEvent } from "react";

type Base = {
  value: string;
  label: string;
};

type Props<T> = {
  options: T[];
  onChange: (value: T) => void;
};


const Select = <T extends Base>({ options, onChange }: Props<T>) => {
  const selectHandler = (
    e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    const item = options.find((option) => option.value === e.target.value);
    if (item) return onChange(item);
  };

  return (
    <select onChange={selectHandler}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

type Book = {
  label: string;
  value: string;
  author: string;
};

type Movie = {
  label: string;
  value: string;
  releaseDate: string;
};

const Parent = () => {
  const bookOptions = [
    { value: "1", label: "book1", author: "mahdiyar" },
    { value: "2", label: "book2", author: "mahdiyar" },
  ];

  const movieOptions = [
    { value: "1", label: "movie1", releaseDate: "2026-10-08" },
    { value: "2", label: "movie2", releaseDate: "2026-10-08" },
  ];

  const bookSelectHandler = (value: Book) => {
    console.log(value);
  };

  const movieSelectHandler = (value: Movie) => {
    console.log(value);
  };

  return (
    <div>
      <Select options={bookOptions} onChange={bookSelectHandler} />
      <Select options={movieOptions} onChange={movieSelectHandler} />
    </div>
  );
};

export default Parent;
