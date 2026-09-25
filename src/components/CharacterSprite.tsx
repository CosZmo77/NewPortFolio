import type { ImgHTMLAttributes } from "react";
import useVisibleMotion from "../hooks/useVisibleMotion";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  name: "grub" | "ghost" | "hornet" | "silksongflew";
  animated?: boolean;
};

/** Keep the original character; decode its animation only while it can be seen. */
export default function CharacterSprite({ name, animated = true, alt = "", ...props }: Props) {
  const { ref, active } = useVisibleMotion<HTMLImageElement>();
  const playing = active && animated;
  return <img {...props} ref={ref} src={`/assets/optimized/${name}${playing ? "" : "-still"}.webp`} alt={alt} data-playing={playing} decoding="async" />;
}
