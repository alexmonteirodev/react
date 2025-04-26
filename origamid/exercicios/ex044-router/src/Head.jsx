import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    console.log(props);
    document.title = props.title; //muda o titulo da para 'home'

    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  }, [props]);

  return <></>;
};

export default Head;
// usando na home
