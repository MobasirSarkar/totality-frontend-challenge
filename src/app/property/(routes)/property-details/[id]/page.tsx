import { cache } from "react";
import { propertyData } from "../../../../api/data/data.json";
import { notFound } from "next/navigation";
import PropertyDetailsCard from "@/components/_shared/property-details";

interface PropertyDetailsPageProps {
   params: {
      id: string;
   };
}

const getProperty = cache(async (id: string) => {
   const property = propertyData.find((p) => p.id === id);
   if (!property) notFound();
   return property;
});

export default async function ProductDetailsPage({
   params: { id },
}: PropertyDetailsPageProps) {
   const property = await getProperty(id);

   return (
      <PropertyDetailsCard property={property} />
   );
}

