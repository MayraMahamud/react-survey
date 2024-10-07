import { useState } from "react";
import AnswersList from "./AnswersList";


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  
const [formData, setFormData] = useState ({
    review: '',
    username: '',
    email: '',
   // swimming: [],
   // bathing: [],
    //chatting: [],
   // noTime: [], 
   timeSpent: [],
    color: '0',

    
  });

  const initialFormData = {
    review: "",
    username: '',
    email: '',
    timeSpent: [],
    color: '0',

  };

  /*const testData = [
    {
      review: "Great",
      username: "me",
      email: "me@me.com",
      timeSpent: ["swimming"],
      color: "1",
    },
  ];
*/
  const [submittedAnswers, setSumbittmedAnswers] = useState([]);
  
 

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setFormData(initialFormData);
    const newItem = {
      review: formData.review,
      username: formData.username,
      email: formData.email,
      timeSpent: formData.timeSpent,
      color: formData.color,
    };
    setSumbittmedAnswers([...submittedAnswers, newItem]);
   
  };
  
 const handleChange = (event) => {
  const {name, value, type, checked} = event.target;
  if(type === "checkbox"){
    if(checked)
  {
    formData.timeSpent.push(event.target.value);
  } else {
    formData.timeSpent.splice(
      formData.timeSpent.indexOf(event.target.value),
      1
    );
  }
  //console.log(name, type, checked)

  //setFormData({ ...formData, [name]: timeSpent });
} else {
  setFormData({ ...formData, [name]: value });
}
    console.log(formData);
    // setFormData({...setFormData, [event.target.name]: event.target.value});
  };  // const {review, username, email} = event.target;
  
 
 
 


  return (
    <>
    <main className="survey" onSubmit={handleSubmit}>
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2> 
        <AnswersList answersList={submittedAnswers} />
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  onChange={handleChange}
                  value="1"
                  checked={formData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  onChange={handleChange}
                  value="2"
                  checked={formData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  onChange={handleChange}
                  value="3"
                  checked={formData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  onChange={handleChange}
                  value="4"
                  checked={formData.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    onChange={handleChange}
                    type="checkbox"
                    value="swimming"
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    onChange={handleChange}
                    type="checkbox"
                    value="bathing"
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    onChange={handleChange}
                    type="checkbox"
                    value="chatting"
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    onChange={handleChange}
                    type="checkbox"
                    value="noTime"
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              onChange={handleChange}
              cols="30"
              rows="10"
              value={formData.review}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  </>

  );
  
}
export default Survey;
