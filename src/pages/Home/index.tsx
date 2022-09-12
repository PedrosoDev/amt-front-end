import { SwiperSlide } from "swiper/react";
import ImageCarrousel from "../../components/ImageCarrousel";
import { IAssociate, INotice } from "../../types/interfaces";
import {
  AssociateContainer,
  AssociateImage,
  AssociateTitle,
  Container,
  NoticeContainer,
  NoticeDate,
  NoticeImage,
  NoticeTitle,
  SectionContainer,
  Title,
} from "./styles";

export function Home() {
  return (
    <Container>
      <ImageCarrousel>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </SwiperSlide>
      </ImageCarrousel>
      <SectionContainer>
        <Title>Últimas Notícias</Title>
        <NoticeComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NoticeComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NoticeComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NoticeComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NoticeComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NoticeComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
      </SectionContainer>
      <SectionContainer>
        <Title>Associados</Title>
        <AssociateComponent
          imageUrl="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
          name="Darlene Robertson"
        />
        <AssociateComponent
          imageUrl="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
          name="Darlene Robertson"
        />
        <AssociateComponent
          imageUrl="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
          name="Darlene Robertson"
        />
        <AssociateComponent
          imageUrl="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
          name="Darlene Robertson"
        />
        <AssociateComponent
          imageUrl="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
          name="Darlene Robertson"
        />
        <AssociateComponent
          imageUrl="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
          name="Darlene Robertson"
        />
      </SectionContainer>
    </Container>
  );
}

function NoticeComponent({ imageUrl, date, title }: INotice) {
  const dateFormatted = date.toLocaleDateString("pt-BR");
  return (
    <NoticeContainer>
      <NoticeImage src={imageUrl} />
      <NoticeDate>{dateFormatted}</NoticeDate>
      <NoticeTitle>{title}</NoticeTitle>
    </NoticeContainer>
  );
}

function AssociateComponent({ imageUrl, name }: IAssociate) {
  return (
    <AssociateContainer>
      <AssociateImage src={imageUrl} />
      <AssociateTitle>{name}</AssociateTitle>
    </AssociateContainer>
  );
}
