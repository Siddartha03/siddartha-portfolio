import React, { useState, useEffect } from "react";
// import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
// import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import JoinFullOutlinedIcon from "@mui/icons-material/JoinFullOutlined";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { FaQuoteRight } from "react-icons/fa";
import { team } from "../../../data/team";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import "./ImageSlider.scss";

function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = team.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <Typography
        variant="h3"
        sx={{ fontSize: sectionTitleFS }}
        className="title"
      >
        My Colleagues
      </Typography>

      <div className="section-center">
        {team.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === team.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <JoinFullOutlinedIcon />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <KeyboardArrowLeftOutlinedIcon />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <KeyboardArrowRightOutlinedIcon />
        </button>
      </div>
    </section>
  );
}

export default ImageSlider;
