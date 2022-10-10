import { SwiperSlide } from "swiper/react";
import ImageCarrousel from "../../components/ImageCarrousel";
import Input from "../../components/Input";
import { IAssociate, INotice } from "../../types/interfaces";
import {
  AssociateContainer,
  Container,
  NewsLetterContainer,
  NoticeContainer as NewsContainer,
  SectionContainer,
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
        <h1>Últimas Notícias</h1>
        <NewsComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NewsComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NewsComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NewsComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NewsComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
        <NewsComponent
          imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          date={new Date(2020, 5, 12)}
          title="Uma reunião com os associados"
        />
      </SectionContainer>
      <SectionContainer>
        <h1>Associados</h1>
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
      <NewsLetterContainer>
        <h1>Receba nossas notícias no seu e-mail!</h1>
      </NewsLetterContainer>
    </Container>
  );
}

function NewsComponent({ imageUrl, date, title }: INotice) {
  const dateFormatted = date.toLocaleDateString("pt-BR");
  return (
    <NewsContainer>
      <img src={imageUrl} />
      <span>{dateFormatted}</span>
      <h1>{title}</h1>
    </NewsContainer>
  );
}

function AssociateComponent({ imageUrl, name }: IAssociate) {
  return (
    <AssociateContainer>
      <img src={imageUrl} />
      <h1>{name}</h1>
    </AssociateContainer>
  );
}
