import React from "react";
import Image1 from "./images/img1.jpg";
import Image2 from "./images/img2.jpg";
import Image3 from "./images/img3.jpg";
import { Wrapper, Carddiv, Info, Image, P, H1, Button } from "./Cardstyle";

const Card = () => {
  return (
    <>
      <Wrapper>
        <Carddiv>
          <Image src={Image1} alt="Image" />
          <Info>
            <H1>Mountain</H1>
            <P>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </P>
            <Button>Read More</Button>
          </Info>
        </Carddiv>

        <Carddiv>
          <Image src={Image2} alt="Image" />
          <Info>
            <H1>Roads</H1>
            <P>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </P>
            <Button>Read More</Button>
          </Info>
        </Carddiv>

        <Carddiv>
          <Image src={Image3} alt="Image" />
          <Info>
            <H1>Forest</H1>
            <P>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </P>
            <Button>Read More</Button>
          </Info>
        </Carddiv>
      </Wrapper>
    </>
  );
};

export default Card;
