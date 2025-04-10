import { useEffect, useState } from "react";

export default function useFilePreview(
  files: FileList | null,
): [
  string | string[] | null,
  React.Dispatch<React.SetStateAction<string | string[] | null>>,
] {
  const [imgSrc, setImgSrc] = useState<string | string[] | null>(null);

  useEffect(() => {
    if (files) {
      setImgSrc(null);
      const fileArray = Array.from(files);
      fileArray.forEach((file) => {
        if (file) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          const newUrl = URL.createObjectURL(file);
          if (newUrl !== imgSrc) {
            setImgSrc((prevData) => {
              if (files.length === 1) {
                return newUrl;
              }
              if (prevData === null) {
                return [newUrl];
              } else {
                return [...prevData, newUrl];
              }
            });
          }
        }
      });
    }
  }, [files]);

  return [imgSrc, setImgSrc];
}
