import { ourCustomers } from "../../../data/ourCustomers";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import { useRef, useState } from "react";
import CustomModal from "../../../shared/components/CustomModal/CustomModal";
import "./OurCustomer.scss";

function ModalContent({ data = {} }) {
  return (
    <div className="modal-content">
      <div className="about-customer">
        <img src={data.profileImg} alt={data.name} />
        <div className="oc-container__content--cus-detail">
          <span>{data.name}</span>
          <span className="oc-container__content--busines-type">{data.position}</span>
        </div>
      </div>
      <p className="msg">{data.comment}</p>
    </div>
  );
}

const OurCustomer = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");

  const handleModalOpen = (event, fullComment) => {
    setOpen(true);
    setData(fullComment);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const [playings, setPlayings] = useState([false, false, false, false]);
  const audio = {
    atulAud: useRef(),
    bradAud: useRef(),
    aditiAud: useRef(),
    phaniAud: useRef(),
  };

  const onEnded = (event) => {
    setPlayings([false, false, false, false]);
  };

  const pauseAudio = (index = 0, audioName) => {
    audio[audioName].current.pause();
    const currentPlaying = [...playings];
    currentPlaying[index] = false;
    setPlayings(currentPlaying);
  };

  const startAudio = (index = 0, audioName) => {
    audio["atulAud"].current.pause();
    audio["bradAud"].current.pause();
    audio["aditiAud"].current.pause();
    audio["phaniAud"].current.pause();
    audio[audioName].current.play();
    const currentPlaying = [false, false, false, false];
    currentPlaying[index] = true;
    setPlayings(currentPlaying);
  };

  return (
    <div className="oc-container">
      <div className="oc-container__upperrpart">
        <Typography
          variant="h3"
          sx={{ fontSize: sectionTitleFS }}
          className="oc-container__upperrpart--title"
        >
          My Mentors : )
        </Typography>
        <span className="oc-container__upperpart--icons">
          <span>
            <ChevronLeftOutlinedIcon />
          </span>
          <span>
            <ChevronRightOutlinedIcon />
          </span>
        </span>
      </div>
      <div className="oc-container__content">
        {ourCustomers.map((customer, index) => (
          <div className="oc-container__content--box" key={index}>
            <div>
              <img src={customer.profileImg} alt={customer.name} />
              <div className="oc-container__content--cus-detail">
                <span>{customer.name}</span>
                <span className="oc-container__content--position">{customer.position}</span>
              </div>
            </div>
            <p>{customer.comment}</p>
            <div
              className="oc-container__content--more-info"
              onClick={(e) => {
                handleModalOpen(e, customer);
              }}
            >
              <span className="oc-container__content--read-more">
                <span>Read more</span>
                <ReadMoreOutlinedIcon
                  aria-owns={open ? "popover" : undefined}
                  aria-haspopup="true"
                />
              </span>

              {/* {!playings[index] && (
                <PlayCircleOutlineOutlinedIcon
                  onClick={() => startAudio(index, customer.audioName)}
                />
              )}
              {playings[index] && (
                <PauseCircleOutlineOutlinedIcon
                  onClick={() => pauseAudio(index, customer.audioName)}
                />
              )} */}
              {/* <audio src={customer.audio} ref={audio[customer.audioName]} onEnded={onEnded}>
                Your browser does not support the <code>audio</code> element.
              </audio> */}
            </div>
          </div>
        ))}
        <CustomModal
          open={open}
          onClose={handleModalClose}
          content={<ModalContent data={data} />}
          title="Full Comment"
        />
      </div>
    </div>
  );
};
export default OurCustomer;
