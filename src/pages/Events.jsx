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
              <EventCard title="Talen-di-sadee" desc="some ddesc" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="Co-di-Go" desc="some desc" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="Logo pursuit" desc="some desc" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="BGMI" desc="Survive the virtual world to finish off opponents with friends" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="Quibble" desc="Synchronize your tech intelligence with timezone" />
            </SwiperSlide>
            <SwiperSlide>
              <EventCard title="Domain Dude" desc="The Art of Hiring to breathe art into your projects" />
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
