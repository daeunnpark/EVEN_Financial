import React, {
  Component
} from 'react';

import axios from 'axios'

const APIurl = "https://api.github.com/search/repositories";

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url : this.props.location.search
    }
  }

componentDidMount(){
  console.log("mounted");
}
// component update?
  componentDidUpdate(prevProps) {
    console.log("updated");
    console.log(this.props.location.search);
    console.log(prevProps.location.search);

    if(this.props.location.search!= prevProps.location.search){
      console.log("update");

      const params = new URLSearchParams(this.props.location.search);
      var query = params.get('text') + "+stars:" + params.get('stars') + "+license:" + params.get('license') + "+fork:" + params.get('fork');

      axios.get("https://api.github.com/search/repositories?q=" + query)
        .then(res => {
          console.log(res.data.items);
          this.props.setResult(res.data.items)
        })
        .catch(function(error) {
          console.log(error);
          alert("Something went wrong. Please try again.");
        });
    }

  }


  render() {
    return (null);
  }

}
export default Controller;
