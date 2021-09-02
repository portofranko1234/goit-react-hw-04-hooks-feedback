import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ types, onLeaveFeedback }) => {

    return (
        <ul >
            {types.map((btn) => (

                <li  style={{listStyle:'none'}} key={btn}>
                    <button onClick={onLeaveFeedback} type="button">{btn}</button>
                </li>

            ))}
        </ul>
    )

}
FeedbackOptions.propTypes = {
    types: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions;

