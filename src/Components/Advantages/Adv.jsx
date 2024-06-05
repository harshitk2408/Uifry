import React from "react";
import "./Adv.css";
import AdvCard from "./AdvCard";
import adv1 from "../../assets/adv1.png";
import adv2 from "../../assets/adv2.png";
import advlogo1 from "../../assets/adv-logo1.png";
import advlogo2 from "../../assets/adv-logo2.png";
export default function Adv() {
  return (
    <div className="adv-cont">
      <AdvCard
        direction="left"
        image={adv1}
        mainHead="ADVANTAGES"
        head="Why Choose Uifry?"
        logo={advlogo1}
        advHead="Clever Notifications"
        desc="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique 
        lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque 
        lorem sapien, suspendisse aliquam."
      />
      <AdvCard
        image={adv2}
        logo={advlogo2}
        advHead="Fully Customizable"
        desc="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique 
        lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque 
        lorem sapien, suspendisse aliquam."
      />
    </div>
  );
}
