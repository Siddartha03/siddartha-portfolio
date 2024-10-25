import { Typography } from "@mui/material";
import { projectsDetails } from "../../../data/projectsDetails";
import "./WorkedCompany.scss";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import { useEffect, useState } from "react";
import Counter from "../../../shared/components/Counter/Counter";
import WorkedCompanyCards from "../../../components/WorkedCompanyCards/WorkedCompanyCards";

const WorkedCompany = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setStartCount(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wc-container">
      <Typography variant="h3" sx={{ fontSize: sectionTitleFS }} className="wc-container__title">
        Projects Worked Upon
      </Typography>
      <WorkedCompanyCards companyDetails={projectsDetails} />
      {!startCount && (
        <div className="wc-container__counters">
          <Counter title="Completed Projects" number={0} />
          <Counter title="Running Projects" number={0} />
          <Counter title="Overall Clients Satisfaction" number={0} suffix="%" />
        </div>
      )}
      {startCount && (
        <div className="wc-container__counters">
          <Counter title="Completed Projects" number={8} />
          <Counter title="Running Projects" number={2} />
          <Counter title="Overall Work Satisfaction" number={100} suffix="%" />
        </div>
      )}
    </div>
  );
};
export default WorkedCompany;
