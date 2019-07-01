//SearchEngine.js


onChange  = (event) => {
  //e.preventDefault();

  //this.props.addTodo(this.state.tex);
  /*this.setState({text: ''});*/

  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  //console.log("******");
  //console.log(this.state);

  //console.log("----------");

  this.setState({
    [name]: value
  });

  //console.log(this.state);
}


var final_url = 'https://api.github.com/search/repositories?q=hello+stars:>=100license:mit'

axios.get(final_url)
  .then(function (response) {
    // handle success
    //console.log(response);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed

  });
