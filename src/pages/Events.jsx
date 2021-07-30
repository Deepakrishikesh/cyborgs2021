import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import EventCard from "../components/EventCard";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Autoplay,Navigation, Scrollbar, A11y]);

function Events() {
  return (
    <>
      <div className="p-3">
        <h2 className="m-1">Events</h2>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          navigation={true}
          scrollbar={{ draggable: true }}
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
