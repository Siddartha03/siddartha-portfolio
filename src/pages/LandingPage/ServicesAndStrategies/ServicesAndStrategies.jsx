import { strategies } from "../../../data/strategies";
import { services } from "../../../data/services";
import techsGif from "../../../assets/gifs/techs.gif";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import { useInView } from "react-intersection-observer";
import cx from "classnames";
import "./ServicesAndStrategies.scss";

const ServicesAndStrategies = () => {
  const [cardRef, inViewCard] = useInView({ threshold: 0 });
  const [strategiesRef, inViewStrategies] = useInView({ threshold: 0 });
  return (
    <div className={"services-container"}>
      <Typography
        variant="h3"
        sx={{ fontSize: sectionTitleFS }}
        className={cx("services-container__title", inViewCard && "animate-charcter")}
      >
        Technologies/Framework Explored
      </Typography>
      <p className={cx("services-container__sub-info", inViewCard && "title-animation")}>
        I have explored various frameworks and technologies that support JavaScript libraries and
        frameworks, and successfully integrated them into my projects.
      </p>
      <div
        className={cx("services-container__grid", inViewCard && "cards-animation")}
        ref={cardRef}
      >
        {services.map((service, index) => {
          return (
            <div className="services-container__grid--content" key={index}>
              <div>
                <img src={service.img} alt={service.title} width={160} height={160} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
      <div
        className={cx("services-container__strategies", inViewStrategies && "strategies-animation")}
        ref={strategiesRef}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: sectionTitleFS }}
          className="services-container__strategies--title"
        >
          My Strengths
        </Typography>
        <div className="services-container__strategies--details">
          <div
            className={cx(
              "services-container__strategies--techs-gif",
              inViewStrategies && "tech-gif-animation"
            )}
          >
            <img src={techsGif} alt="" />
          </div>
          <div
            className={cx(
              "services-container__strategies--content",
              inViewStrategies && "content-animation"
            )}
          >
            {strategies.map((strategy, index) => {
              return (
                <div key={index}>
                  <div>{strategy.icon}</div>
                  <h3>{strategy.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesAndStrategies;
