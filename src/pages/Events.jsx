import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import EventCard from "../components/EventCard";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import logo_pursuit from "../assets/event_logos/logo_pursuit.jpg";
import domain_dude from "../assets/event_logos/domain_dude.jpeg";
import quibble from "../assets/event_logos/quibble.jpg";
import codigo from "../assets/event_logos/codigo.jpg";
import bgmi from "../assets/event_logos/bgmi.jpeg";
import talen_di_sadee from "../assets/event_logos/talen_di_sadee.jpeg";
SwiperCore.use([Autoplay, Navigation, Scrollbar, A11y]);

const MemoedEventCard = memo(EventCard);

function Events() {
  return (
    <>
      <div className="p-3 lg:p-8 bg-opacity-0">
        <div className="lg:ml-8 lg:mr-8">
          <h2 className="m-1 text-xl">Events</h2>
          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            slidesPerView={window.innerWidth < 800 ? 1 : 3}
            spaceBetween={10}
            navigation={true}
            //scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <MemoedEventCard
                title="TALEN-DI-SADEE"
                desc="It is a place to show your innovative ideas through your presentations"
                logo={talen_di_sadee}
                detail="<b>Event Structure:</b></br>
                1. The event will be conducted in two levels.</br>
                2. For the First level, abstract has to be submitted before the deadline.</br>
                3. Teams for the second round will be selected from the abstract that is submitted.</br>
                4. Second round will be a presentation round.</br>
                </br>
                <b>Abstract:</b></br>
                1. The abstract must contain team name, college name, members name and the contact details</br>
                2. The file name should be of the format 'collegename_teamname.pdf'</br>
                3. The abstract should be mailed to 'talendisaade@gmail.com' on or before the deadline.</br>
                </br>
                <b>Rules and regulations:</b></br>
                1. Each team can contain maximum of 3 participants.</br>
                2. The work should not be plagiarised.</br>
                3. Teams qualified for the second round can present from 4 to 8 minutes.</br>
                4. The judge's decision would be final.</br>
                5. Violation of rules can result in elimination of the team.</br>
                </br>
                <b>Topics:</b></br>
                1. Artificial Intelligence.</br>
                2. Internet of Things.</br>
                3. Automation and Robotics.</br>
                4. Cloud Computing.</br>
                5. Machine learning and optimization.</br>
                6. Industrial waste water treatment.</br>
                7. Evolution in Technologies.</br>
                8. Programming Language.</br>
                9. Advances in technology in today's world - Boon or Bane?</br>
                10. Avantages of Nanotechnology.</br>
                11. Internet Architecture and Routing.</br>
                12. Current Technology.</br>
                </br>
                <b>Event organisers:</b></br>
                Avinash J V : <a href='tel:8675993678' class='underline'>8675993678</a></br>
                PraveenKumar M :  <a href='tel:9787646542' class='underline'>9787646542</a></br>
                Kabilan S : <a href='tel:9500532664' class='underline'>9500532664</a></br>
                Sriram S : <a href='tel:7708230014' class='underline'>7708230014</a></br>
                Selva S : <a href='tel:6374747668' class='underline'>6374747668</a></br>"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="CO-DI-GO"
                desc="Your coding skills and programming knowledge will be put into test"
                logo={codigo}
                detail="<b>Round 1:</b></br>
                1. Round 1 will be in the form of Multiple Choice Questions.</br>
                2.The questions should be answered within the given time-limit.</br>
                3. There is no negative marking.</br>
                4. The selected candidates will proceed to round 2.</br>
                </br>
                <b>Round 2:</b></br>
                </br>
                1. This round will test the participant's coding skills.</br>
                2. Each participant will be given coding problem(s).</br>
                3. The participants have to clear the test cases, in the given time.</br>
                </br>
                <b>General Instructions:</b></br>
                1. Participants should turn on the video and audio.</br>
                2. Judges decision will be final.</br>
                3. Meeting platform - Microsoft Teams.</br>
                </br>
                <b>Event organisers:</b></br>
                R. Harikrishna -  <a href='tel:8870587699' class='underline'>8870587699</a></br>
                P. Gnanasekar -  <a href='tel:9789936778' class='underline'>9789936778</a></br>
                S. Arulraj -  <a href='tel:9789691577' class='underline'>9789691577</a></br>
                P. Harish Kumar -  <a href='tel:7358288392' class='underline'>7358288392</a></br>
                R. Deepak Rishikesh -  <a href='tel:9094219094' class='underline'>9094219094</a></br>
                  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="LOGO PURSUIT"
                desc="Explore the identity behind the brand symbols which represents your vision."
                logo={logo_pursuit}
                detail="<b>Rules:</b></br>
                <b>Round 1</b>- Reason behind the logo</br>
                1. Each participant will be shown two logos.</br> 
                2. Participants need to identify, abbreviate and tell the reason behind the logo.</br>
                3. The marks allotment will be classified into three division (identifying, abbreviation and reason).</br>
                4. Timings will be 2 minute for each participant.</br>
                5. Shortlisted candidates will participate in round 2.</br>
                </br>
                <b>Round 2</b> – Six-logos.</br>
                1. Participants have to choose random number under which they will be given six-logos to identify. </br>
                2. Each participant will be given 1 minute for this round.</br>
                </br>
                <b>General Instructions:</b></br>
                1. Participants should turn on the video and audio during their turn.</br>
                2. Judges decision will be final.</br>
                3. Meeting platform-Microsoft Teams.</br>
                4. Need to check your mail and spam messages.</br>
                <b>Event Organizers</b></br>
                </br>
                S. Jaya kumar - <a href='tel:9940034885' class='underline'>9940034885</a><br>
                K.S Aakash - <a href='tel:9952597968' class='underline'>9952597968</a><br>
                P. Harish -  <a href='tel:7358821566' class='underline'>7358821566</a><br>
                "
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="BGMI_SURVIVE"
                desc="Jump into the virtual world with friends to survive and finish off your opponents"
                logo={bgmi}
                detail="<b>Round 1:</b><br><br>
                1. Battle Royal Match for 25 Teams(according to teams no of rooms will be increased)<br>
                2.Use the meeting link in your mail to join the Microsoft team's meeting and Fill the Registration form<br>
                3. Fill all the participants information.<br>
                4.  If multiple forms are filled for the same team then the team will be disqualified(enough time will be given to fill the form).<br>
                5. Join the room accordingly.<br>
                6. After filling the form you will be navigated to the respective Room meetings to get your room credentials.<br><br>

                <b>Round 2:</b><br><br>
                1. Battle Royal Match for Top 3 Teams.<br>
                1. If Your team is selected you will get an email with Microsoft team's link.<br>
                2. In the Team’s meeting you would get your room credentials.<br>
                3. Join the room accordingly.<br><br>

                <b>General Instructions:</b><br>
                            1. The Selection would be based only on Finishes(Kills) made and not by Survival. (Top three teams are selected on the basis of the no.of kills as a team).<br>
                            2. Avoid participating in multiple teams (if found the whole team will be disqualified).<br>
                            3. Team should have a minimum of 2 players (maximum 4 players).<br>
                            4. Map selection would be random.<br><br>
                            
              <b>Event organisers:</b><br>
                            V. Nikesh - <a href='tel:6383500320' class='underline'>6383500320</a><br>
                            V. Sanjay - <a href='tel:9789041989' class='underline'>9789041989</a><br>
                            P. Karthikeyan -  <a href='tel:6379911032' class='underline'>6379911032</a><br>
                            D. Varun -  <a href='tel:8838210697' class='underline'>8838210697</a><br>"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="QUIBBLE'21"
                desc="Synchronize your tech intelligence with timezone, Keep Calm And Crack The Quiz"
                logo={quibble}
                detail="<b>Round 1 : BRAINY HUNK</b> </br>
                1) Participants will be asked general questions.</br>
                2) Attend all the questions.</br>
                3) Complete the given Quiz as soon as possible.</br>
                4) Extra time is strictly not allowed on any basis.</br>
                5) Selection to next level is based on number of correct answers and time taken for it.</br>
                </br>
                <b>Round 2 : API-CODE</b> </br>
                </br>
                1) Participants will be given questions related to Aptitude as well as Coding.</br>
                2) Attend all the questions.</br>
                3) Try to solve quick using tricks.</br>
                4) Time taken is also a key for selection so keep an eye on it.</br>
                5) Winner will be selected based on the number of correct answers and time taken to complete it.</br>
                </br>
                <b>Round 3 : CONNECTOS </b> </br>
                </br>
                1) Participants will be displayed Technical words as pictorial representation.</br>
                2) The correct verbal should be found for the displayed pictures.</br>
                3) Marks are allotted on First Come First Serve basis.</br>
                4) Display changes after regular short intervals , catch up with its speed.</br>
                5) Winner will be selected based on marks alloted in the Finale Round.</br>
                
                <b>Other General Instructions :</b> </br>
                 
                1) Selection desicion made is final and queries about that are not welcomed.</br>
                2) Participants should turn on the video and audio if said to.</br>
                3) Do keep checking your mails frequently for the updates.</br></br>
                <b>Event organisers:</b><br>
                            N.M. Vignesh - <a href='tel:6379441059' class='underline'>6379441059</a><br>
                            V. Vishnu Priya - <a href='tel:6383484299' class='underline'>6383484299</a><br>
                            M. Sudharsan -  <a href='tel:70927110266' class='underline'>70927110266</a><br>"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="DOMAIN DUDE"
                desc="The Art of Hiring to breathe art into your projects, Code the web !"
                logo={domain_dude}
                detail="
                <b>Round 1 : FREE WILLERS</b> </br> 
                </br>
                1) Participants can create a webpage based on their interest.</br>
                2) Try to add as much attributes/tags as possible.</br>
                3) Presentation need to be attractive enough.</br>
                4)Participants should complete the webpage within the time limit.</br>
                5) Selection to the next level is based on attributes/tags used and the way of presentation.</br>
                </br>
                <b>Round 2 : WEB WRESTLERS</b> </br>
                </br>
                1) Participants will be given specific topic to create webpage.</br>
                2) Webpage should be created within the time given for it.</br>
                3) Try to stick on to the topic.</br>
                4) More efforts in input  need to be taken than the previous round.</br>
                5) Winner will be selected based on the best webpage among all other pages with zero errors.</br>
                </br>
                <b> General Instructions :</b></br>
                </br>
                1) Selection desk decision is final and queries are not entertained.</br>
                2) Participants are requested to turn on the video and audio if needed and while presenting.</br>
                3) Meeting platform - Microsoft Teams</br>
                4)Need to check your mails frequently for the updates.</br>
                </br>
                <b>Event organisers:</b><br>
                K. Vaishnavi - <a href='tel:6383796673' class='underline'>6383796673</a><br>
                R. Monika - <a href='tel: 9087489731' class='underline'>9087489731</a><br>"
              />
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
