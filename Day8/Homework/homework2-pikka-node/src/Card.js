function Card() {
  let cardArr = [
    {
      id: 1,
      cname: "Card 01",
      url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
    },
    {
      id: 2,
      cname: "Card 02",
      url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?cs=srgb&dl=pexels-chloe-1043474.jpg&fm=jpg",
    },
    {
      id: 3,
      cname: "Card 03",
      url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
    },
    {
      id: 4,
      cname: "Card 04",
      url: "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?cs=srgb&dl=pexels-mentatdgt-1526814.jpg&fm=jpg",
    },
  ];

  let showCard = cardArr.map((obj) => (
    <div className="Card" key={obj.id} >
      <img src={obj.url} alt=""/>
      <div className="CardName">
          <b> <p>{obj.cname} </p></b>
      </div>
    </div>
  ));
  return <div>{showCard}</div>;
}

export default Card;
