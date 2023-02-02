import SBbanner1 from '../images/SBbanner1.jpg';

function Form1() {
  let option_id = [0, 1];
  let options = [{ name: "a" }, { name: "b" }];
  let selectedOptionId = 0;
  return (
    <div className="container-fluid">
      <div className="container-fluid bg-light p-5 ">
        <div className="row  -white">
          <div className="col-12 col-sm-5 bg-white">
            <div className="p-3 border border-white">
              {/* //--------------------------------------- */}

              <label className="mt-3 d-flex justify-content-start">
                Berichtnaam
              </label>
              <input type="text" className="form-control mt-3" name="name" />

              <label className="mt-3 d-flex justify-content-start">
                Category
              </label>

              <select
                defaultValue={selectedOptionId}
                className="form-select mt-3"
              >
                {option_id.map((id) => (
                  <option key={id} value={id}>
                    {options[id].name}
                  </option>
                ))}
              </select>

              <label className="mt-3 d-flex justify-content-start">
                Bericht
              </label>
              <textarea
                className="form-control mt-3"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>

              <button className="btn btn-warning rounded-3 mt-5 text-white">
                Bericht aanmaken
              </button>
              {/* //--------------------------------------- */}
            </div>
          </div>
          {/* //--------------------------------------- */}

          <div className="col-12  col-sm-1"> 	&nbsp; </div>
          {/* //--------------------------------------- */}
          <div className="col-12  col-sm-6 bg-white wh-100 row pt-5">
            <div className="col-12  col-sm-5 bg-white">
            <img className='w-75 d-inline-block' height="200" src={SBbanner1} alt="React Image" />
              <h5 className="d-flex justify-content-start mt-3">
                Special title treatment
              </h5>
              <p className="d-flex justify-content-start">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div className="col-12  col-sm-1"> 	&nbsp; </div>
            <div className="col-12  col-sm-5 bg-white">
            <img className='w-75 d-inline-block' height="200" src={SBbanner1} alt="React Image" />
              <h5 className="d-flex justify-content-start mt-3">
                Special title treatment
              </h5>
              <p className="d-flex justify-content-start">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form1;
