import Image from "next/image";

const logoPath = "/gallery/logo%20Studio%20ALPHA%20PRODUCTION.png";

export function BrandMark({ large = false }: { large?: boolean }) {
  const width = large ? 246 : 186;
  const height = large ? 123 : 93;

  return (
    <Image
      src={logoPath}
      alt="Logo Studio ALPHA PRODUCTION"
      width={width}
      height={height}
      className={large ? "h-auto w-[246px]" : "h-auto w-[186px]"}
      priority={large}
    />
  );
}
