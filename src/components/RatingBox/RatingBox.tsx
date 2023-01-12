import React from "react";

export interface RatingComponentProps {
  title: string;
  message:string;
  submit:string;
}

const RatingBox = ({title, message, submit}: RatingComponentProps) => {
  return (
            
            <div className="RatingBox">
                <img src="" alt="" />
                <h4>{title}</h4>
                <p>{message}</p>
                  <div>
                      <input type="radio" value="1" /><label>1</label>
                      <input type="radio" value="2" /><label>2</label>
                      <input type="radio" value="3" /><label>3</label>
                      <input type="radio" value="4" /><label>4</label>
                      <input type="radio" value="5" /><label>5</label>
                  </div>
                <button>{submit}</button>
            </div>

  )
};

export default RatingBox;
