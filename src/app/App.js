import React, { Component } from 'react'

import Header from './header/Header'
import Grid from './grid/Grid'
import Domus from './domus/Domus'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <Grid>
            <Domus />
          </Grid>
        </main>
      </div>
    );
  }
}

export default App
