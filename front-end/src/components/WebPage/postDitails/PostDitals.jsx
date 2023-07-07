import { FiChevronRight } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";
import {
  Article,
  BigImg,
  Content,
  Header,
  NavPostDetails,
  NavPostDetailsItem,
  Tag,
  TagAndDate,
  Texts,
  Title,
  ImgContainear,
} from "../../../styles/__postDetails";

const PostDetails = () => {
  return (
    <Article>
      <Header>
        <NavPostDetails>
          <NavPostDetailsItem>
            home
            <FiChevronRight />
          </NavPostDetailsItem>
          <NavPostDetailsItem>
            category
            <FiChevronRight />
          </NavPostDetailsItem>
          <NavPostDetailsItem>
            title
            <FiChevronRight />
          </NavPostDetailsItem>
        </NavPostDetails>
        <Title>title: Lorem ipsum dolor sit amet.</Title>
        <TagAndDate>
          <Tag>
            <AiOutlineTags />
            tag
          </Tag>
          <span className="date">8 days ago</span>
        </TagAndDate>
      </Header>
      <Content>
        <ImgContainear>
          <BigImg
            src="https://unsplash.com/photos/mpwF3Mv2UaU/download?ixid=M3wxMjA3fDF8MXxhbGx8Nnx8fHx8fDJ8fDE2ODg1NDgwODB8&force=true&w=640"
            alt="tile"
            className="bigImg"
          />
        </ImgContainear>
        <Texts>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          non numquam adipisci pariatur ex aliquid et. Accusantium, alias.
          Aperiam quod expedita, ipsum quas maxime, quaerat excepturi veritatis
          tenetur, quos nam itaque eligendi doloremque? Nisi velit voluptas
          deserunt laborum nesciunt perspiciatis suscipit ea quibusdam a,
          excepturi veniam eveniet neque necessitatibus nemo esse soluta modi
          officia quo dicta odio repudiandae. Neque voluptates ratione velit eos
          nam mollitia accusantium perspiciatis, doloremque aspernatur aliquam
          molestiae, laborum recusandae sapiente dolor facere. Quisquam ratione
          itaque quis accusamus iure earum cumque natus id quibusdam. Molestiae
          nam in eum cum ut veritatis porro natus enim saepe sed maxime deserunt
          fugiat id necessitatibus, labore nihil nisi voluptate. Quia repellat,
          consequuntur dolorem illo sapiente ipsam molestiae et maxime
          cupiditate eum eius quidem eaque dignissimos laudantium unde magnam
          necessitatibus, minus laborum iste? Deserunt excepturi consequuntur
          ratione itaque eveniet, accusantium placeat iure perspiciatis
          architecto saepe illum laudantium quos magni facilis deleniti iste
          aperiam repellat sed ut. Laboriosam porro ratione sint, sed obcaecati
          repellendus ex saepe. Facilis, molestias! In blanditiis cumque atque,
          nulla, consequuntur dolorum similique quas iste alias hic delectus
          neque at. eaque, et corporis laborum vero iusto minus. Consequuntur
          reprehenderit fuga atque eveniet. Dolorum dicta recusandae ipsa qui,
          praesentium quas quo corporis officia. Rerum, laboriosam dolor
          doloribus aut dignissimos esse obcaecati iste corporis perferendis
          quisquam impedit, deleniti nam. Dolore dolor totam doloribus nam,
          consectetur soluta eum consequatur odio culpa atque ab optio beatae
          fuga tenetur cum, expedita, officia asperiores architecto placeat
          quaerat distinctio? Expedita pariatur distinctio, doloremque nisi,
          debitis incidunt optio dolore, enim quaerat accusantium veniam modi
          corporis illo hic quam nostrum quidem fugit sint animi cum vel? Quisqu
          officiis quidem perspiciatis reiciendis veritatis delectus iusto
          tenetur saepe blanditiis ea, voluptas porro a facere pariatur deserunt
          labore mollitia hic! Ut dolorum, consequuntur eveniet possimus
          molestiae amet tempora sunt? Ad repudiandae iste, itaque voluptate
          officiis obcaecati laborum alias magni velit? Iste repudiandae id
          quas? Optio, quia obcaecati? Corporis natus corrupti itaque quibusdam.
          In sed excepturi illum magnam quaerat necessitatibus labore numquam
          dicta ipsam perferendis quos ducimus molestiae cumque sequi quis,
          accusantium eligendi recusandae laboriosam eos. Dolor magnam animi
          quaerat, earum sapiente eum magni deleniti, neque veniam corporis
          delectus numquam repudiandae, ducimus quae fugit!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          error, accusamus nesciunt cum amet velit ullam totam reprehenderit
          magni ea perferendis facilis numquam minus incidunt molestias dolorem.
          Porro assumenda voluptate, a accusantium reprehenderit sit eum fugit
          eos libero esse ipsam reiciendis asperiores. Incidunt eaque dolorem
          magni aliquam quam error voluptate minima accusamus obcaecati iusto
          beatae impedit fugiat perferendis eveniet ipsa, voluptates quos et
          temporibus? Nobis ipsa, a provident deleniti itaque non ipsum
          distinctio totam amet suscipit consectetur aliquam dignissimos dolores
          doloremque nemo quod, architecto, veniam est recusandae possimus nisi
          enim voluptas. Rem fugiat fugit repudiandae alias aspernatur tenetur
          et labore ad cupiditate ullam vero inventore laboriosam delectus
          dolores facilis dicta animi itaque quos provident, nobis blanditiis
          dolorum sequi. Expedita, aspernatur voluptate excepturi nihil cum quae
          possimus ipsum et, ab hic dolor reprehenderit fugit soluta dolore sint
          laudantium at temporibus id voluptatibus vel aliquid distinctio
          laborum. Exercitationem cumque perspiciatis, voluptatibus vero
          doloremque ab rem soluta quasi, assumenda aliquam iste harum dicta nam
          quod molestiae inventore quis facere rerum? Adipisci quia, quisquam,
          aperiam illo tempore quis consequuntur nobis est porro omnis totam
          aliquid possimus dignissimos natus impedit exercitationem aspernatur.
          Quae nemo molestiae rerum id vel officia vero ea temporibus minima,
          eveniet velit.
        </Texts>
      </Content>
    </Article>
  );
};

export default PostDetails;
