
import "./App.css";
import Profilee from "./profile/Profilee";
import lawyer from "./lawyer.jpg";


  const data = {
    fullName: "Raed ben abdallah",
    bio: "Raed Ben Abdallah is a seasoned lawyer with a passion for justice and a deep understanding of the legal system. He has dedicated his career to defending the rights of his clients and ensuring that they receive fair and just treatment under the law. Raed's expertise lies in a range of legal areas, including criminal law, civil litigation, and commercial law. He has a reputation for being an excellent communicator and a skilled negotiator, able to navigate complex legal issues with ease. Raed is committed to providing his clients with the highest quality legal representation, and his dedication to their success is evident in his tireless work ethic and attention to detail. In his spare time, Raed enjoys reading about legal history and volunteering at his local legal aid society.Raed Ben Abdallah is a seasoned lawyer with a passion for justice and a deep understanding of the legal system. He has dedicated his career to defending the rights of his clients and ensuring that they receive fair and just treatment under the law. Raed's expertise lies in a range of legal areas, including criminal law, civil litigation, and commercial law. He has a reputation for being an excellent communicator and a skilled negotiator, able to navigate complex legal issues with ease. Raed is committed to providing his clients with the highest quality legal representation, and his dedication to their success is evident in his tireless work ethic and attention to detail. In his spare time, Raed enjoys reading about legal history and volunteering at his local legal aid society.",
    profession: "Lawyer",
    
  };
  const handleName = (name) => {alert(`the name of the profile user is ${name}`)}


function App() {
  console.log(lawyer)
  return (
    <div className="App">
      <Profilee ABC={data}  handleName={handleName} >    
      {lawyer} 
      </Profilee>
    </div>
  );
}

export default App;
