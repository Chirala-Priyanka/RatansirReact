import AboutUs from "./AboutUs";
import BrightText from "./BrightText";
import ContactUs from "./ContactUs";
import CourseGoal2 from "./CourseGoal2";
import MovieGrid from "./MovieGrid";
import PostTitle from "./PostTitle";
import UseState1 from "./UseState1";
import UseState2 from "./UseState2";
import UseState3 from "./UseState3";
import UseState4 from "./UseState4";
import UseState5 from "./UseState5";
import CourseGoal1 from "./courseGoal1";
import Greeting from "./greeting";

function App()
{
  const MovieGrid=[id=1001,title="happydays",director="rgv"];
  return(
    <>
    <h1>this is app.jsx file....</h1>
 <AboutUs />
 <ContactUs />
 <Greeting />
 <UseState1 />
 <UseState2 />
 <UseState3 />
 <UseState4 />
 <UseState5 />
 <CourseGoal1 title="learn react" /> 
 <CourseGoal1 description="in-depth" />
 <CourseGoal2 title="about ratan sir" />
 <CourseGoal2 description="ratan sir nice" />
<MovieGrid movieCard={MovieGrid} />
<BrightText color="red" />
<BrightText color="green" />
<BrightText color="blue" />
<PostTitle />
    </>
  )
}
export default App;