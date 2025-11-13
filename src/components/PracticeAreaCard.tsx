import Image from "next/image";

type PracticeAreaCardProps = {
  heading: string;
  content: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

export default function PracticeAreaCard({
  heading,
  content,
  imageSrc,
  imageAlt,
  imagePosition,
}: PracticeAreaCardProps) {
  return (
    <div
      className={`mb-12 grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2 ${
        imagePosition === "right" ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Text Column */}
      <div
        className={`flex flex-col justify-center p-8 ${
          imagePosition === "right" ? "md:col-start-1" : ""
        }`}
      >
        <h2 className="mb-6 text-center font-serif text-2xl font-bold text-primary">
          {heading}
        </h2>
        <div className="prose prose-lg max-w-none">{content}</div>
      </div>

      {/* Image Column */}
      <div
        className={`relative h-64 md:h-auto ${
          imagePosition === "right" ? "md:col-start-2" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
