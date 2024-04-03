const title = "Bonjour les gens";

const style = { color: "red", backgroundColor: "blue" };

const showTitle = false;

const todos = [
  'présenter rect',
  'Presenter le jsx',
  'créer des compsants'
]

function App() {
  const handleClick = (e) => {
    console.log(e);
    alert(" J'ai cliqué sur le titre");
  };

  return (
    <>
      <Title color='green' id='greenTitle' className='green'>Les congolaises sont belles</Title>
      {showTitle ?
        (
        <h1 onClick={handleClick} id="title" className="title" style={style}>
          {title}
        </h1>
        ) :
        
        (
        <p>Pas de title</p>
        )
      }

      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
        optio totam, vel harum autem saepe adipisci amet cumque et nam maxime
        aliquam eius eum explicabo fuga. Explicabo, illo veniam.
      </p>

      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>
    </>
  );
}

function Title({color , children , hidden , ...props}){
  if(hidden){
    return null
  }
  return <h1 style={{color:color}} {...props}>{children}</h1>
}

export default App;
