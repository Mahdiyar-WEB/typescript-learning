type Props =
  | {
      collapsed?: boolean;
      expanded?: never;
    }
  | {
      expanded?: boolean;
      collapsed?: never;
    };

const Accordion = (props: Props) => {
  return <div {...props}>Accordion</div>;
};

const Parent = () => {
  return (
    <div>
      <Accordion collapsed />
      <Accordion expanded />
      <Accordion />
    </div>
  );
};

//**Scenarios:
//<Accordion />
//<Accordion collapsed />
//<Accordion expanded />

export default Parent;
