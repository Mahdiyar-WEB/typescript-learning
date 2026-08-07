type Props =
  | {
      collapsable: boolean;
      defaultCollapsable?: boolean;
    }
  | { defaultCollapsable?: never; collapsable?: never };

const Panel = (props: Props) => {
  return <div {...props}>Panel</div>;
};

const Parent = () => {
  return (
    <div>
      <Panel />
      <Panel collapsable />
      <Panel collapsable defaultCollapsable />
      <Panel defaultCollapsable />
    </div>
  );
};

//**Scenarios:
//<Panel /> ✅Allowed
//<Panel collapsable /> ✅Allowed
//<Panel collapsable defaultCollapsable /> ✅Allowed
//<Panel defaultCollapsable /> ❌ Not Allowed

export default Parent;
