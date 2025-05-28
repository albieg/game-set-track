import { useEffect, useState } from "react";

const images = [
  "src/assets/bg-shuffle/jim-sung-photo.jpg",
  "src/assets/bg-shuffle/sebastian-qin-photo.jpg",
  "src/assets/bg-shuffle/shep-mcallister-photo.jpg",
  "src/assets/bg-shuffle/sicong-li-photo.jpg",
  "src/assets/bg-shuffle/tomas-evaristo-photo.jpg",
  "src/assets/bg-shuffle/tommao-wang-photo.jpg",
  "src/assets/bg-shuffle/yigit-arisoy-photo.jpg",
  "src/assets/bg-shuffle/yoav-hornung-photo.jpg",
  "src/assets/bg-shuffle/ashwin-tanjore-photo.jpg",
  "src/assets/bg-shuffle/dylan-freedom-photo.jpg",
  "src/assets/bg-shuffle/filip-mroz-photo.jpg",
  "src/assets/bg-shuffle/gonzalo-mendiola-photo.jpg",
  "src/assets/bg-shuffle/howard-bouchevereau-photo.jpg",
  "src/assets/bg-shuffle/murray-photo.jpg",
  "src/assets/bg-shuffle/sudan-ouyang-photo.jpg",
  "src/assets/bg-shuffle/tennis-crowd-photo.jpg"
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