import Image, { StaticImageData } from 'next/image';

interface Props {
  title: string;
  image: StaticImageData;
  setFilters: (arg0: string) => void;
  type: string;
}

function GridItem({ title, image, setFilters, type }: Props) {
  return (
    <button
      type="button"
      className="flex flex-col items-center hover:scale-110 transition duration-500"
      onClick={() => setFilters(type)}
    >
      <Image src={image} width={150} height={150} objectFit="contain" />
      <p className="font-bold">{title}</p>
    </button>
  );
}

export default GridItem;
