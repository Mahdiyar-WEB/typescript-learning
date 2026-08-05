
type Props<T> = {
  items: T[];
  onClick: (item: number) => void;
};

const GenericProps = <T extends { id: number }>({
  items,
  onClick,
}: Props<T>) => {
  return (
    <div>
      {items.map(({ id }) => {
        return (
          <p onClick={() => onClick(id)} key={id}>
            {id}
          </p>
        );
      })}
    </div>
  );
};

export default GenericProps;
