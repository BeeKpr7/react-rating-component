import React from "react"
import "./RatingBox.css"
// @ts-ignore
import Star from '../../img/icon-star.svg'
export interface RatingBoxProps {
  title: string;
  message:string;
  submit:string;
}

const defaultValue: RatingBoxProps = {
  title:"How do we did ?",
  message:"Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  submit:"Submit"
}

const RatingBox = ({title=defaultValue.title, 
                    message=defaultValue.message, 
                    submit=defaultValue.submit}: RatingBoxProps) => {
  return (
            
            <div className="RatingBox">
                <div className="svg">
                  <Star/>
                </div>
                <h4>{title}</h4>
                <p>{message}</p>
                  <div className="radio-input">
                      <div><input type="radio" value="1" name="rate"/><label>2</label></div>
                      <div><input type="radio" value="2" name="rate"/><label>1</label></div>
                      <div><input type="radio" value="3" name="rate"/><label>3</label></div>
                      <div><input type="radio" value="4" name="rate"/><label>4</label></div>
                      <div><input type="radio" value="5" name="rate"/><label>5</label></div>
                  </div>
                <button>{submit}</button>
            </div>

  )
};

export default RatingBox;
