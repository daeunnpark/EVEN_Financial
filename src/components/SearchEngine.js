import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import '../App.css';


function SearchEngine(){
  const [disabled, setDisable] = useState(true);
  const [inputs, setInput] = useState({
    text: '',
    stars: '',
    license: 'all',
    incForked: false,
  });

  const query = queryString.parse(useLocation().search);
  const params = {
    text: (query.text ? query.text : ""),
    stars: query.stars ? query.stars : "",
    license: query.license ? query.license : "all",
    incForked: (query.fork === "true")
  };

  useEffect(()=>{
    setDisable(!inputs.text && !inputs.stars);
  }, [inputs]);

  useEffect(() => {
    setInput(params);
  }, [params.text, params.stars, params.license, params.incForked]);

  function onChange(event) {
    //event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInput({
      ...inputs,
      [name]: value
    });
  }

  let history = useHistory();

  function onSubmit(event) {
    //event.preventDefault();
    const params = new URLSearchParams({
      text: inputs.text,
      stars: inputs.stars,
      license: inputs.license,
      fork: inputs.incForked
    });
    history.push("search?" + params);
  }

    return (<div className = "searchEngine">
              <h3>GitHub Repository Search</h3>

                <div>
                  <div className = "inputsContainer">
                    <div className = "container">
                      <div id = "inputText" className="form-group">
                        <label className = "label">
                          Text
                        </label><br/>
                        <input
                          className = "inputClass"
                          type="text"
                          name = "text"
                          value={inputs.text}
                          onChange={onChange}
                          required
                          />
                      </div>
                      <div id = "inputStars" className="form-group">
                        <label className = "label">
                          Stars
                        </label><br/>
                        <input
                          className = "inputClass"
                          type="text"
                          name = "stars"
                          value={inputs.stars}
                          onChange={onChange}
                          pattern="(>|<|>=|<=|..)?[0-9]+"
                          required
                          />
                      </div>
                    </div>
                    <br/>
                    <div className = "container" id = "container2">
                      <div id = "inputLicense" className="form-group">
                        <div>
                          <label className = "label">
                            License
                          </label><br/>
                        <select className = "inputClass"name ="license" value={inputs.license} onChange={onChange}>
                            <option value="all">All</option>
                            <option value="mit">MIT</option>
                            <option value="isc">ISC</option>
                            <option value="apache-2.0">Apache-2.0</option>
                            <option value="gpl">GPL</option>
                          </select>
                        </div>
                      </div>
                      <div id = "inputForked" className="form-group">
                          <input
                            id = "checkbox"
                            name="incForked"
                            type="checkbox"
                            checked={inputs.incForked}
                            onChange={onChange}
                            />
                          <label id ="checkboxLabel">
                          Include Forked
                          </label><br/>
                      </div>
                    </div>
                  </div>
                  <button onClick={onSubmit} className="btn btn-primary" disabled = {disabled}>SEARCH</button>
                </div>

              <hr/>

            </div>
          );

}


export default SearchEngine;
