import React from "react";
import "./RatingBox.css";
// @ts-ignore
import Star from "../../img/icon-star.svg";
export interface RatingBoxProps {
  title?: string;
  message?: string;
  submit?: string;
}

const defaultValue: RatingBoxProps = {
  title: "How do we did ?",
  message:
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  submit: "Submit",
};

const RatingBox = (props?: RatingBoxProps) => {
  return (
    <div className="RatingBox">
      <div className="svg">
        <Star />
      </div>
      <h4>{props?.title ? props.title : defaultValue.title}</h4>
      <p>{props?.message ? props.message : defaultValue.message}</p>
      <div className="radio-input">
        <div>
          <input type="radio" value="1" name="rate" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" value="2" name="rate" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" value="3" name="rate" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" value="4" name="rate" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" value="5" name="rate" />
          <label>5</label>
        </div>
      </div>
      <button>{props?.submit ? props.submit : defaultValue.submit}</button>
    </div>
  );
};

export default RatingBox;
