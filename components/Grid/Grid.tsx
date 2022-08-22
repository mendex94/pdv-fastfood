interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  subtitle: string;
}

function Grid({ children, title, subtitle }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="font-extralight text-sm">{subtitle}</p>
      </div>
      <div className="grid grid-cols-4 px-4">{children}</div>
    </div>
  );
}

export default Grid;
