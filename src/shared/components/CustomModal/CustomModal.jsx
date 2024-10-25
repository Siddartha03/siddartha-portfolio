import { Box, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import cx from "classnames";
import "./CustomModal.scss";

export default function CustomModal({
  open = false,
  onClose = () => {},
  content = <></>,
  title = "",
  className = "",
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={cx("modal-container", className)}>
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <span onClick={onClose} className="close-icon">
            <CancelIcon />
          </span>
        </div>
        {content}
      </Box>
    </Modal>
  );
}
