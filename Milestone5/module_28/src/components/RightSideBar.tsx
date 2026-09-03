import { use } from "react";
import ProductCard from "./ProductCard";

const RightSideBar = ({ TableData }: any) => {
  const data:any = use(TableData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
      {data.map((item: any) => (
        <div key={item.id} className="p-2">
          <ProductCard item={item}></ProductCard>
        </div>
      ))}
    </div>
  );
};

export default RightSideBar;