import PropTypes from 'prop-types'

function App() {
  const profile = [
    {name: "taro", age: 10},
    {name: 'takashi', age: '40'},
    {name: 'noName'},
    {name: 1},
  ]
  return (
    <div className="App">
      {
        profile.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}



const User = (props) => {
  return <div>Hi!, I am {props.name}! and I am {props.age}</div>
}

User.propTypes = {
  name: PropTypes.number
}

User.defaultProps = {
  age: 1
}

export default App;
