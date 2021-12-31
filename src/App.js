function App() {
  const profile = [
    {name: "taro", age: 10},
    {name: 'takashi', age: '40'},
    {name: 'noName'}
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

User.defaultProps = {
  age: 1
}

export default App;
