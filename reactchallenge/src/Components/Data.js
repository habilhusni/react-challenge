import React from 'react'

class Data extends React.Component {
  constructor () {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount() {

    fetch("http://swapi.co/api/films")
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        this.setState({
          results: data.results
        });
    })
    .catch(err => console.error(err))

  }

  render() {

    return (
      <div>

        {
          this.state.results.map((result) => {
            return (
              <div key={result.episode_id} className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <div className="content">
                    <p className="title">{result.title}</p>
                    <p className="director">Director: {result.director}</p>
                    <p className="episode">Episode: {result.episode_id}</p>
                  </div>
                </article>
              </div>
            )
          })
        }

      </div>
    )

  }

}

export default Data
