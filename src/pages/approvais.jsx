import React, { useContext } from "react";
import HeaderTitle from "../components/general/headerTitle";
import ProfileLayout from "../components/general/ProfileLayout";

const Approvals = () => {
  const { setHeaderTitle } = useContext(HeaderTitle);
  setHeaderTitle("Approvais");

  return (
    <ProfileLayout>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
      praesentium totam nemo! Rerum alias facilis aliquam voluptatem assumenda
      nemo beatae non odio soluta et id eius animi aspernatur, porro mollitia
      consequuntur enim magni cum dolorem exercitationem rem itaque ipsa aut.
      Rem praesentium saepe dolorum repellat nulla? Accusamus delectus culpa
      fugiat odio tempore nam sapiente deserunt autem ipsum reiciendis, quis
      deleniti dignissimos est voluptates perferendis accusantium, debitis
      facilis incidunt natus adipisci? Quos fuga velit animi doloremque
      repellendus aut id. Aperiam rem fugit ab quia libero. Ut cum excepturi
      autem eum ab. Facilis saepe voluptatum sit quos perspiciatis ea mollitia
      ipsum reiciendis eligendi quia distinctio quo praesentium, amet
      repellendus blanditiis. Impedit aspernatur voluptate, aut necessitatibus
      at dolor voluptas laboriosam repellat veritatis nobis. Nobis ducimus saepe
      eos maiores dolorum ipsum voluptatibus aliquam blanditiis autem incidunt
      suscipit ipsam sunt excepturi nihil laudantium vitae, eligendi quibusdam,
      nostrum veniam? Veritatis aperiam aut, corrupti asperiores voluptatibus
      ipsam blanditiis quae illum odio nostrum atque commodi possimus! Impedit
      officiis exercitationem quibusdam ab dicta consequatur. Veniam saepe
      placeat temporibus est cum, excepturi expedita neque ipsa a esse corporis
      nisi? Eaque illo vero adipisci cumque. Amet molestias quidem quia vel eum
      ipsum doloremque ex? Accusamus ut eveniet nesciunt distinctio aspernatur
      voluptas?
    </ProfileLayout>
  );
};

export default Approvals;
