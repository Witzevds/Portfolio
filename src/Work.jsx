import Card from './Card';  
import './css/Work.css';
function Work() {
  return (
    <section className="work">
      <h2>Work</h2>
      <Card img="https://baconmockup.com/300/200" link="https://hslpicker.com" 
      title="titel" description="yeye lolol" />
      <Card img="https://baconmockup.com/300/200" link="https://hslpicker.com" 
      title="titel" description="yeye lolol" />
      <Card img="https://baconmockup.com/300/200" link="https://hslpicker.com" 
      title="titel" description="yeye lolol" />
 
    </section>
  );
}

export default Work;