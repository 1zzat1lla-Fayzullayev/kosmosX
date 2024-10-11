/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import useListData from "../../data/allLists";
import { getText } from "../../locales";
import { LanguageContext } from "../../context/LanguageContext";

function AccordionUI() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lists, setLists] = useState([]);
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  const allListData = useListData();

  const handleTekrarClick = () => {
    const extractedLists = Array.from(document.querySelectorAll("li")).map(
      (item) => item.innerText
    );
    setLists(extractedLists);
    onOpen();
  };
  return (
    <div className="accordion_ui">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question1Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div style={{ color: "#666666" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle1")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP1")}
                  </p> */}
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle2")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP2")}
                  </p> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle3")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP3")}
                  </p> */}
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle4")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP4")}
                  </p> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle5")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP5")}
                  </p> */}
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle6")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP6")}
                  </p> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle7")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP7")}
                  </p> */}
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle8")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP8")}
                  </p> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle9")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP91")}
                    <br />
                    <br />
                    {getText("question1DescP92")}
                  </p> */}
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src="/img/check.png"
                  alt=""
                  style={{ width: "25px", marginBottom: "10px" }}
                />
                <h5 className="gradient-text">
                  {getText("question1DescTitle10")}
                </h5>

                <div className="accordionP_and_Img">
                  {/* <div className="firstAccordionImgDiv">
                    <img src="/img/testt.png" alt="" />
                  </div> */}
                  {/* <p style={{ marginTop: "20px" }}>
                    {getText("question1DescP10")}
                  </p> */}
                </div>
              </div>
            </div>
            {/* <p>{getText("question1Desc")}</p> */}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question2Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            {getText("question2Desc1")} <br /> <br />{" "}
            {/* {getText("question2Desc2")} <br /> <br />{" "} */}
            {/* {getText("question2Desc3")} */}
            {/* <a
              href="https://eduagency.uz/"
              target="_blank"
              style={{ color: "blue" }}
            >
              {" "}
              eduageny.uz{" "}
            </a> */}
            {getText("question2Desc4")}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question3Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <ul>
              <li>
                <p>{getText("question3List1")}</p>
              </li>
              <li>
                <p>{getText("question3List2")}</p>
              </li>
              <li>
                <p>{getText("question3List3")}</p>
              </li>
              <li>
                <p>{getText("question3List4")}</p>
              </li>
              <li>
                <p>{getText("question3List5")}</p>
              </li>
              <li>
                <p>{getText("question3List6")}</p>
              </li>
              <li>
                <p>{getText("question3List7")} </p>
              </li>
              <li>
                <p>{getText("question3List8")} </p>
              </li>
              <li>
                <p>{getText("question3List9")}</p>
              </li>
              <li>
                <p>{getText("question3List10")}</p>
              </li>
              <li>
                <p>{getText("question3List11")} </p>
              </li>
              <li>
                <p>{getText("question3List12")} </p>
              </li>
              <li>
                <p>{getText("question3List13")} </p>
              </li>
              <li>
                <p>{getText("question3List14")}</p>
              </li>
              <li>
                <p>{getText("question3List15")}</p>
              </li>
              <li>
                <p>{getText("question3List16")}</p>
              </li>
              <li>
                <p>{getText("question3List17")}</p>
              </li>
              <li>
                <p>{getText("question3List18")}</p>
              </li>
              <li>
                <p>{getText("question3List19")} </p>
              </li>
              <li>
                <p>{getText("question3List20")}</p>
              </li>
              <li
                style={{ color: "blue", cursor: "pointer", fontSize: "18px" }}
                onClick={handleTekrarClick}
              >
                {getText("questionListLink")}
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question4Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question41Desc")}</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question5Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question5Desc")}</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                  {getText("question6Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question6Desc")}</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                  {getText("question7Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question7Desc")}</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                  {getText("question8Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question8Desc")}</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                  {getText("question9Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question9Desc")}</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                  {getText("question10Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <p>{getText("question10List1")}</p>
              <p>{getText("question10List2")}</p>
              <p>{getText("question10List3")}</p>
              <p>{getText("question10List4")}</p>
              <p>{getText("question10List5")}</p>
              <p>{getText("question10List6")}</p>
              <p>{getText("question10List7")}</p>
              <p>{getText("question10List8")}</p>
              <p>{getText("question10List9")}</p>
              <p>{getText("question10List10")}</p>
              <p>{getText("question10List11")}</p>
              <p>{getText("question10List12")}</p>
              <p>{getText("question10List13")}</p>
              <p>{getText("question10List14")}</p>
              <p>{getText("question10List15")}</p>
              <p>{getText("question10List16")}</p>
              <p>{getText("question10List17")}</p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question11Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              {getText("question11Desc1")}
              <br />
              {getText("question11Desc2")} <br />
              {getText("question11Desc3")}
              <br />
              {getText("question11Desc4")} <br />
              {getText("question11Desc5")}
              <br />
              {getText("question11Desc6")}
              <br />
              {getText("question11Desc7")}
              <br />
              {getText("question11Desc8")}
              <br />
              {getText("question11Desc9")}
              <br />
              {getText("question11Desc10")}
              <br />
              {getText("question11Desc11")}
              <br />
              {getText("question11Desc12")}
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question12Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <ul>
              <p>{getText("question12Desc1")}</p>

              <p> {getText("question12Desc2")}</p>

              <p> {getText("question12Desc3")}</p>

              <p> {getText("question12Desc4")}</p>

              <p> {getText("question12Desc5")}</p>

              <p>{getText("question12Desc6")}</p>

              <p>{getText("question12Desc7")}</p>

              <p>{getText("question12Desc8")}</p>

              <p>{getText("question12Desc9")}</p>

              <p>{getText("question12Desc10")}</p>

              <p>{getText("question12Desc11")}</p>

              <p>{getText("question12Desc12")}</p>

              {/*<p></p></li> */}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                {getText("question13Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              {getText("question13Desc1")}
              <br />
              <br />
              {getText("question13Desc2")}
              <br />
              <br />
              {getText("question13Desc3")}
              <br />
              <br />
              {getText("question13Desc4")}
              <br />
              <br />
              {getText("question13Desc5")}
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" className="modall">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{getText("questionModalTitle")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3} align="start">
              {allListData.map((item, index) => (
                <Box key={index} p={2} borderRadius="md" bg="gray.50" w="full">
                  {item.linkName}
                </Box>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {getText("linkButton")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AccordionUI;
