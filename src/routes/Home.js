import React from 'react';

export default class Home extends React.Component {
  componentWillMount() {
    console.log('Hi');
    this.props.history.push('/home?ijustgotpushed=true');
  }
  render() {
    return <div>Hi</div>;
  }
}
// export default ({ history }) => {
//   console.log(props);
//   return <div>Home</div>;
// };
