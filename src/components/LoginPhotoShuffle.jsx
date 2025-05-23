import { useEffect, useState } from "react";

const images = [
  "src/assets/jim-sung-photo.jpg",
  "src/assets/sebastian-qin-photo.jpg",
  "src/assets/shep-mcallister-photo.jpg",
  "src/assets/sicong-li-photo.jpg",
  "src/assets/tomas-evaristo-photo.jpg",
  "src/assets/tommao-wang-photo.jpg",
  "src/assets/yigit-arisoy-photo.jpg",
  "src/assets/yoav-hornung-photo.jpg",
  "src/assets/ashwin-tanjore-photo.jpg",
  "src/assets/dylan-freedom-photo.jpg",
  "src/assets/filip-mroz-photo.jpg",
  "src/assets/gonzalo-mendiola-photo.jpg",
  "src/assets/howard-bouchevereau-photo.jpg",
  "src/assets/murray-photo.jpg",
  "src/assets/sudan-ouyang-photo.jpg",
  "src/assets/tennis-crowd-photo.jpg"
];

export function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          alt=""
        />
      ))}
    </div>
  );
}