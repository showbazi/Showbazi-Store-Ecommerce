import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mail.bsagar@gmail.com">
        <Button>Contact: mail.bsagar@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
