interface Props {
  children: JSX.Element | JSX.Element[];
}

function GridContainer({ children }: Props) {
  return <div className="w-3/4 mx-auto my-8 grid grid-cols-2">{children}</div>;
}

export default GridContainer;
