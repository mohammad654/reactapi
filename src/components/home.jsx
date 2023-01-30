import SBbanner1 from '../images/SBbanner1.jpg';
function Home() {
  return (
    <div className='container-fluid m-0 p-0'>
      <h1>Social Brothers</h1>
      <img className='w-100 d-inline-block' height="550" src={SBbanner1} alt="React Image" />
    </div>
  );
}

export default Home;
