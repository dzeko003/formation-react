
function App() {
 
  /**
   * hormis les attributs comme aria.... ou data.... les autres s'écrivent en kamlekaze
   * 
   * IL ne peut y avoir qu'un element racine
   * 
   * l'attribut class est remplacé par className
   * 
   * <input> est faux il va falloir le fermer comme ceci <input/> ou bien <input></input>
   * 
   * Il y a aussi la notion d'interpollation ( on déclare une variable title = "Bonjour les gens" et on l'appelle)
   *
   * Le style doit être passé comme un objet dans l'interpolation (les attributs comme backhourd-color s'écrivent backgroudColor)
   * 
   * Les attribut qui font appelle aux evenement comme onClick , onChange sont appellé comme suit <h1 onClick={handleClick}></h1> il ne faut pas ecrire 
   * <h1 onClick={handleClick}></h1> sinon il sera appelé des que le composant sera rendu.
   * 
   * Logique conditionnelle showTitle = false ex {showTitle && <h1 />}
   * 
   * const todos = ["alpha" "beta" , "gamma"]
   * 
   * On peut créer d'autres composant qui deviennent comme des balises personnalisées.
   * 
   * 
   */

  return (
    <>
      <Title color="blue" />
      <Title color="blue">Mon composant</Title>
      <Title color="blue" hidden>Mon composant</Title>
     <h1 id="title" className="title" autoFocus>Bonjour les gens</h1>
     {todos.map( todo => (<li key={todo}>{todo}</li>))}
    </>
   
  );
}

function Title({color}){
  return <h1 style={{color: color}}>Bonjour les gens</h1>
}

function Title({color , children}){
  return <h1 style={{color: color}}>{children}</h1>
}

function Title({color , children , hidden}){

  if(hidden){
    return null;
  }
  return <h1 style={{color: color}}>{children}</h1>
}

// Le spred operator

function Title({color , children , hidden}){

  if(hidden){
    return null;
  }
  const prpos = {
    id : 'monid',
    className :'maclass'
  }
  return <h1 style={{color: color}} {...pros}>{children}</h1>
}


export default App;
