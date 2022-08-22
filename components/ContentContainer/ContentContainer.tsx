interface Props {
  children: JSX.Element | JSX.Element[];
}

function ContentContainer({ children }: Props) {
  return (
    <div className="w-3/4 mx-auto my-8 flex flex-col gap-6">{children}</div>
  );
}

export default ContentContainer;
