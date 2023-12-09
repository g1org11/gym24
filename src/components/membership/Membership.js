import React, { useState, useEffect } from "react";
import marks from "../../assets/marks.svg";
import styled from "styled-components";
import Member from "./Member";
import { defaultTheme } from "../defaultTheme";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./slider.css";
import { EffectCoverflow, FreeMode, Pagination } from "swiper/modules";

const Membership = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 393);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MembershipContainer>
      <MemberWrapper>
        <MemberTitle>Gym membership</MemberTitle>
        {isMobile ? (
          <MobileMemberSlider>
            {/* Swiper Slider */}
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              spaceBetween={10}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                clickable: true,
              }}
              modules={[EffectCoverflow, FreeMode, Pagination]}
            >
              <SwiperSlide>
                <Member
                  title={"Pass ‘Trial’"}
                  price={"$ 0"}
                  icon={marks}
                  textone={"Access to the gym from 8:00 to 14:00"}
                  texttwo={"The trainer on duty will introduce you to the gym"}
                  button={"buy"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Member
                  title={"Pass ‘Easy Start’ "}
                  price={"$ 119"}
                  icon={marks}
                  textone={"Visit without restrictions 24/7"}
                  texttwo={"Individual training program"}
                  textthree={"Access to the VTRAINER application"}
                  textfour={"Trainer support"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Member
                  title={"Pass ‘Free Time’  "}
                  price={"$ 49"}
                  icon={marks}
                  textone={"The entrance time to the gym is from 14:00 to 16:00"}
                  texttwo={"Without suspension of gym membership"}
                  textthree={"The trainer on duty will introduce you to the gym"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Member
                  title={"Pass ‘1 Month 24/7’ "}
                  price={"$ 85"}
                  icon={marks}
                  textone={"Visit without restrictions 24/7"}
                  texttwo={"The trainer on duty will introduce you to the gym"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Member
                  title={"Pass ‘In Shape (AM)’  "}
                  price={"$ 165"}
                  icon={marks}
                  textone={"Training in mini-groups until 14:00"}
                  texttwo={"Without suspension of gym membership"}
                  textthree={"Classes with a trainer in a mini-group 3 times a week"}
                  textfour={"Trainer support"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Member
                  title={"Pass ‘In Shape (PM)’  "}
                  price={"$ 195 "}
                  icon={marks}
                  textone={"Training in mini-groups until 17:00"}
                  texttwo={"Without suspension of gym membership"}
                  textthree={"Classes with a trainer in a mini-group 3 times a week"}
                  textfour={"Trainer support"}
                />
              </SwiperSlide>

              {/* Add SwiperSlides for other Member components here */}
            </Swiper>
          </MobileMemberSlider>
        ) : (
          <MemberSlider>
            <Member
              title={"Pass ‘Trial’"}
              price={"$ 0"}
              icon={marks}
              textone={"Access to the gym from 8:00 to 14:00"}
              texttwo={"The trainer on duty will introduce you to the gym"}
              button={"buy"}
            />
            <Member
              title={"Pass ‘Easy Start’ "}
              price={"$ 119"}
              icon={marks}
              textone={"Visit without restrictions 24/7"}
              texttwo={"Individual training program"}
              textthree={"Access to the VTRAINER application"}
              textfour={"Trainer support"}
            />
            <Member
              title={"Pass ‘Free Time’  "}
              price={"$ 49"}
              icon={marks}
              textone={"The entrance time to the gym is from 14:00 to 16:00"}
              texttwo={"Without suspension of gym membership"}
              textthree={"The trainer on duty will introduce you to the gym"}
            />
            <Member
              title={"Pass ‘1 Month 24/7’ "}
              price={"$ 85"}
              icon={marks}
              textone={"Visit without restrictions 24/7"}
              texttwo={"The trainer on duty will introduce you to the gym"}
            />
            <Member
              title={"Pass ‘In Shape (AM)’  "}
              price={"$ 165"}
              icon={marks}
              textone={"Training in mini-groups until 14:00"}
              texttwo={"Without suspension of gym membership"}
              textthree={"Classes with a trainer in a mini-group 3 times a week"}
              textfour={"Trainer support"}
            />
            <Member
              title={"Pass ‘In Shape (PM)’  "}
              price={"$ 195 "}
              icon={marks}
              textone={"Training in mini-groups until 17:00"}
              texttwo={"Without suspension of gym membership"}
              textthree={"Classes with a trainer in a mini-group 3 times a week"}
              textfour={"Trainer support"}
            />
          </MemberSlider>
        )}
      </MemberWrapper>
    </MembershipContainer>
  );
};

export default Membership;

const MembershipContainer = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  font-family: ${defaultTheme.fonts.primary};
`;

const MemberWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MemberTitle = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: ${defaultTheme.colors.white};
  margin-bottom: 120px;
  font-family: ${defaultTheme.fonts.primary};

  @media (max-width: 630px) {
    font-size: 28px;
  }
`;

const MemberSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 68px;
  padding: 10px;

  @media (max-width: 1100px) {
    gap: 56px;
  }

  @media (max-width: 744px) {
    gap: 34px;
  }
`;

const MobileMemberSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  overflow-x: hidden; /* Use "auto" instead of "hidden" */
  margin: 0 -10px; /* Add negative margin to account for the space between slides */
  padding: 10px; /* Add padding to compensate for negative margin */
`;
