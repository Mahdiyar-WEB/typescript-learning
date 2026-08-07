type Props<T extends number | string, U extends object> =
  | {
      data: T[];
      label?: never;
      value?: never;
    }
  | {
      data: U[];
      value: keyof U;
      label: keyof U;
    };

const Dropdown = <T extends number | string, U extends object>(
  props: Props<T, U>,
) => {
  return <div {...props}>Dropdown</div>;
};

const Parent = () => {
  return (
    <div>
      <Dropdown data={[1, 2, 3, 4, 5]} />
      <Dropdown data={["a", "b", "c", "d"]} />
      <Dropdown
        data={[
          { name: "mahdiyar", id: 1 },
          { name: "test", id: 2 },
        ]}
        label="name"
        value="id"
      />
    </div>
  );
};

//**Scenarios:
//<Dropdown data={[string,string]} />
//<Dropdown data={[number,number]}  />
//<Dropdown data={[{name:'test',id:number},{name:'test2',id:number}]} label='name' value='id' />
export default Parent;
