type Shapes =
  | { type: "circle"; radius: number }
  | { type: "rectangle"; width: number; height: number }
  | { type: "square"; baseLength: number };

const Draw = (props: Shapes) => {
  return <div>{JSON.stringify(props)}</div>;
};

const Parent = () => {
  return (
    <div>
      <Draw type="circle" radius={20} />
      <Draw type="rectangle" width={100} height={200} />
      <Draw type="square" baseLength={50} />
    </div>
  );
};

export default Parent;
