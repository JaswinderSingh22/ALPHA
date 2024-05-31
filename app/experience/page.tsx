import React from "react";
import Journey from "@/components/experience/Timeline";
import expericeDetails from "../../data/details.json";
export default function Experience() {

  return (
    <div className="w-full bg-black  h-full overflow-auto flex flex-col overflow-auto">
      <Journey expericeDetails={expericeDetails.experience} />
    </div>
  );
}
