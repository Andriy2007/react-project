import {Rating} from "react-simple-star-rating";

const Stars = ({vote_average}) => {
    const rating = Math.round(vote_average*10)/10
    return (
        <div style={{padding:5}}>
            <Rating
                ratingValue={((vote_average)*10)}
                size={25}
                tooltipDefaultText={'n/a'}
                fillColor='yellow'
                emptyColor='yellow'
                readonly={true}
                allowHalfIcon={true}
            />
            {rating}
        </div>
    );
};

export {
    Stars
}