import React from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";

function Home(): JSX.Element {
  const { Title } = Typography;

  return (
    <div>
      <Title>OurAnimeList</Title>
    </div>
  );
}

export default Home;
