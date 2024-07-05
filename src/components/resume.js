import "../components/resume.css";

export default function Resume() {
  return (
    <div className="res-wrapper">
      <iframe src={process.env.PUBLIC_URL + '/YM_Abhishek_Python_Full_Stack.pdf'} frameborder="0" allowFullScreen/>
    </div>
  );
}
  
