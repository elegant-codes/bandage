import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import { ClassValue, clsx } from "clsx";

interface BackgroundImageProps {
  children?: ReactNode;
  className?: ClassValue;
  image: ReactElement<typeof Image>;
}

type BackgroundImageAdditionalProps = Omit<
  ComponentPropsWithoutRef<"div">,
  keyof BackgroundImageProps
>;

export default function BackgroundImage({
  children,
  className,
  image,
  ...props
}: BackgroundImageProps & BackgroundImageAdditionalProps) {
  return (
    <div className={clsx("relative", "overflow-hidden", className)} {...props}>
      <div className="absolute inset-0 -z-10">{image}</div>
      <div className="z-10 flex h-full justify-start">{children}</div>
    </div>
  );
}
