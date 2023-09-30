'use client'
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { useEffect, useState } from "react";
import {API_BASE_URL} from "@/utils/constants"


async function getBlog(){
  const res = await fetch(`${API_BASE_URL}/blog`, {mode:'cors'})
  return await res.json();
}

const Features = () => {

  const [featuresData, setFeaturesData] = useState([]);
  useEffect(() => {
  
    const loadData = async () => {
      const data = await getBlog();
      setFeaturesData(data.data);
    }
    loadData();

  }, []);

  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-1">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
