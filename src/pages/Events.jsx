import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import EventCard from "../components/EventCard";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useEffect } from "react";

SwiperCore.use([Autoplay, Navigation, Scrollbar, A11y]);

function Events() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <>
      <div className="p-3 lg:p-8">
        <div className="lg:ml-8 lg:mr-8">
          <h2 className="m-1">Events</h2>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={window.innerWidth < 800 ? 1 : 3}
            spaceBetween={10}
            navigation={true}
            //scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <EventCard title="some pic 1" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="some pic 2" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="some pic 3" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="some pic 4" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="some pic 5" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="horizontal-scroll overflow-scroll">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div> */}
      </div>
    </>
  );
}

export default Events;
