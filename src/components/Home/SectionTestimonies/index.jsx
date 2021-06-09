import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import styles from "./styles.module.scss";

SwiperCore.use([Navigation]);

export function SectionTestimonies({ testimonies }) {
  return (
    <section className={styles.sectionTestimony}>
      <Swiper slidesPerView={1} spaceBetween={5} loop={true} navigation={true}>
        {testimonies &&
          testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <figure className={styles.testimony}>
                <img src={testimony.image} />
                <div>
                  <p className={styles.testimonyText}>{testimony.text}</p>
                  <p className={styles.testimonyAuthor}>
                    {testimony.studentName}
                  </p>
                  <p className={styles.testimonyClass}>
                    {testimony.studentClass}
                  </p>
                </div>
              </figure>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
