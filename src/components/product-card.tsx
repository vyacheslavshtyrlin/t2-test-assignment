import { useState } from "react";
import { Button } from "../ui/button";
import { beutifyNumber, cn, highlightNumbers } from "../utils";



type TProps = {
  onClick: () => void;
  selected?: boolean;
  product: TProduct;
  className?: string;
};
export const ProductCard = ({
  onClick,
  selected,
  product,
  className,
}: TProps) => {
  const {
    name,
    type,
    description,
    portions,
    promo,
    weight,
    image,
    ingredients,
    cause,
    stock,
  } = product;

  const [isHoveredEnd, setIsHoveredEnd] = useState(false);

  const handleHoverEnd = () => {
    if (!selected) return;
    setIsHoveredEnd(true);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full items-stretch min-w-0",
        className
      )}
    >
      <Button
        disabled={!stock}
        onMouseEnter={() => setIsHoveredEnd(false)}
        onMouseLeave={() => handleHoverEnd()}
        onClick={onClick}
        role="product-card"
        variant={selected ? "selected" : "default"}
        extra={
          <span title={String(weight) + "кг"}>
            {beutifyNumber(weight)} <br /> кг
          </span>
        }
        className={cn(
          { "bg-danger": isHoveredEnd },
          "select-none",
          "w-full lg:w-[320px]  min-w-0 overflow-hidden",
          "h-[420px] sm:h-[440px] md:h-[400px] lg:h-[480px]"
        )}
      >
        <div className="md:pl-8 pl-12 h-full relative pt-4 text-left min-w-0 overflow-hidden">
          <span
            title={!isHoveredEnd ? description : "Котэ не одобряет?"}
            className={cn(
              { "text-danger": isHoveredEnd },
              "text-sm block w-full truncate"
            )}
          >
            {!isHoveredEnd ? description : "Котэ не одобряет?"}
          </span>

          <h3 className="text-black font-bold text-3xl lg:text-5xl block w-full truncate">
            {name}
          </h3>

          <h4 className="text-black text-2xl block w-full truncate">{type}</h4>

          <p className="text-sm mt-2 whitespace-pre-line break-words max-w-[10rem]">
            <span className="font-semibold">{portions}</span> порций
            <br />
            {highlightNumbers(promo)}
          </p>

          <img
            className="rounded-lg absolute md-bottom-0 lg:-bottom-1 sm:-bottom-4 left-0 max-w-full"
            src={image}
          />
        </div>
      </Button>

      {!stock ? (
        <p className="text-sm text-center text-warning w-full max-w-[320px] mx-auto truncate">
          {cause}.
        </p>
      ) : (
        <p className="text-white text-sm text-center w-full max-w-[320px] mx-auto truncate">
          {selected ? (
            <>{ingredients}</>
          ) : (
            <>
              Чего сидишь? Порадуй котэ,{" "}
              <a
                onClick={onClick}
                className="cursor-pointer underline text-primary break-words"
              >
                купи
              </a>
              .
            </>
          )}
        </p>
      )}
    </div>
  );
};

