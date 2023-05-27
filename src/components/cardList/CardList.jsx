import Card from "../card/Card";

const CardList = ({ cardList }) => {
    return (
        <ul className="repo-cards">
            { 
                cardList.map((card, index) => ( /// iterated the list and displayed card compoment
                    <Card 
                        key={"_cardItem" + index}
                        title={ card.name } 
                        description={ card.description } 
                        stars={ card.stars } 
                        forks={ card.forks } 
                        owner={ card.owner }
                    />
                )) 
            }
        </ul    >
    );
};

export default CardList;