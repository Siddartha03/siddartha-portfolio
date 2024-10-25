import "./WorkedCompanyCards.scss";

const WorkedCompanyCards = ({ companyDetails = [], speed = 15000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {companyDetails.map((company, id) => (
            <div className="company" key={id}>
              <img src={company?.icon} alt="" width="45px" />
              <span>{company?.name}</span>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {companyDetails.map((company, id) => (
            <div className="company" key={id}>
              <img src={company?.icon} alt="" width="45px" />
              <span>{company?.name}</span>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {companyDetails.map((company, id) => (
            <div className="company" key={id}>
              <img src={company?.icon} alt="" width="45px" />
              <span>{company?.name}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default WorkedCompanyCards;
