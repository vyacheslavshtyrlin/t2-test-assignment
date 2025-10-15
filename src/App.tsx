import { useCallback, useEffect, useState } from "react";
import { ProductCard } from "./components/product-card";
import { getProducts } from "./service/api";
import { cn } from "./utils";

function App() {
  const [data, setData] = useState<TProduct[]>([]);
  const [selectedSet, setSelectedSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  const handleSelect = useCallback(
    (id: number) => {
      if (selectedSet.has(id)) {
        setSelectedSet((prev) => new Set([...prev].filter((i) => i !== id)));
      } else {
        setSelectedSet((prev) => new Set([...prev, id]));
      }
    },
    [selectedSet]
  );

  return (
    <div className="h-screen flex flex-col font-light w-full">
      <header className="text-4xl my-8 text-white text-center">
        <h1 className="">Ты сегодня покормил кота?</h1>
      </header>
      <main className="h-full w-full  flex flex-col  md:justify-center md:items-center">
        <div
          className={cn(
            "px-4 py-2",
            "w-full lg:w-fit  md:mx-0 lg:mx-auto ",
            "flex flex-col items-stretch gap-4",
            "md:grid md:grid-cols-3 md:gap-8 md:place-items-center",
            "lg:gap-12"
          )}
        >
          {data.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selectedSet.has(product.id)}
              onClick={() => handleSelect(product.id)}
              className={cn(
                "transition-transform duration-300",
                index % 3 === 1 && "md:-translate-y-12 lg:translate-y-0"
              )}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
