import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InputMask from "react-input-mask";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const Getintouch = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 (__) ___-__-__");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TOKEN = "6595677829:AAGkeV8LwYLNGNjsu8xus7o6gkFkOhvp1sQ";
  const USERID = "-1002173244569";
  const USER2ID = "-1002148619946";

  const encodeText = (text) => encodeURIComponent(text);

  const sendFeedback = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const text = `Name: ${name}\nMessage: ${description}\nPhone number: ${phone}\nEmail: ${email.length === 0 ? "Email is empty" : email
      }\n Services: ${service}`;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${encodeText(
          text
        )}`
      );
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USER2ID}&text=${encodeText(
          text
        )}`
      );
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setName("");
      setPhone("+998 (__) ___-__-__");
      setEmail("");
      setDescription("");
      setService("");
    }
  };

  // eslint-disable-next-line no-unused-vars
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/[^+\d]/g, '');
    setPhone(cleaned);
  };

  return (
    <div className="Getintouch mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="img">
              <img
                className="w-100 img-getInTouch"
                src="/img/getintouch.png"
                alt="Contact Us"
              />
            </div>
          </div>
          <div className="col-md-7">
            <form onSubmit={sendFeedback}>
              <h3>{getText("getAdviceTitle")}</h3>
              <p>{getText("getAdviceDescription")}</p>
              <div className="row">
                <div className="inputWrap col-sm-6">
                  <InputMask
                    placeholder={getText("getAdviceInputName")}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control"
                    name="name"
                    required
                    type="text"
                  />
                </div>
                <div className="inputWrap col-sm-6">
                  <InputMask
                    placeholder={getText("getAdviceInputPhone")}
                    onChange={handlePhoneChange}
                    value={phone}
                    className="form-control"
                    name="phone"
                    required
                    mask="+999 (99) 999-99-99"
                    type="text"
                  />
                </div>

                <div className="inputWrap">
                  <InputMask
                    placeholder={getText("getAdviceInputEmail")}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                    name="email"
                    required
                    type="email"
                  />
                </div>
                <div className="inputWrap">
                  <select
                    onChange={(e) => setService(e.target.value)}
                    value={service}
                    className="form-control select-style"
                    name="service"
                    required
                  >
                    <option value="" disabled>
                      {getText("getAdviceSelectDefaultText")}
                    </option>
                    <option value={getText("getAdviceSelectOption1")}>
                      {getText("getAdviceSelectOption1")}
                    </option>
                    <option value={getText("getAdviceSelectOption2")}>
                      {getText("getAdviceSelectOption2")}
                    </option>
                    <option value={getText("getAdviceSelectOption3")}>
                      {getText("getAdviceSelectOption3")}
                    </option>
                    {/* <option value={getText("getAdviceSelectOption4")}>
                      {getText("getAdviceSelectOption4")}
                    </option> */}
                  </select>
                </div>
              </div>
              <div className="inputWrap">
                <textarea
                  placeholder={getText("getAdviceInputMessage")}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="form-control"
                  name="message"
                  required
                />
              </div>
              <p className="bottom-top-p">
                {getText("getAdviceLinkText")}{" "}
                <a href="#">{getText("getAdviceLinkTextLink")}</a>
              </p>
              <button type="submit" disabled={isLoading} className="btn">
                {isLoading ? (
                  <span
                    style={{ color: "#fff" }}
                    className="spinner-border-sm spinner-border ms-2"
                  ></span>
                ) : (
                  <span>{getText("getAdviceButton")}</span>
                )}
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
