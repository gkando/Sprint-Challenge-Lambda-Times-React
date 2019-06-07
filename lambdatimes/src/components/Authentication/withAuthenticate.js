import React, {useState, useEffect} from 'react';

const withAuthenticate = Content => TopBar => Header =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    // localStorage.setItem('user_name', username);
    componentDidMount() {
      if (!localStorage.getItem('user_name')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) {
          return <> <TopBar /> <Header /> <Content /> </>
      } else {
          return <> <TopBar /> <Header /> <Content loggedIn={this.state.loggedIn} />  </>
        }

    }
  };

export default withAuthenticate;