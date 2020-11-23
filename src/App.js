import React from 'react';
import { Route, useLocation, Switch } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'




function App() {
  
  const location = useLocation()
  const transition = useTransition(location,location.pathname, {
    from:{opacity:0, transform:"translate(100%,0)"},
    enter:{opacity:1, transform:"translate(0%, 0)"},
    leave:{opacity:0, transform:"translate(-50%,0)"}
  })
  return (
    <div className="App">
       <Navigation /> 
       { transition.map(({item:location,props,key}) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
            <Route exact path="/" render={ () => <Home 
              heading="Ciao, my name is "
              name="Davide Cannerozzi" 
              firstJob="Front-end Developer"
              secondJob="Freelance"
              thirdJob="React Developer" 
              />} 
            />
            <Route path='/About' render={ () => <About 
              title="About Page" 
              aboutMe="Ciao, I am Davide Cannerozzi, a front-end developer get efficitur orci. Phasellus lacinia mauris turpis, sed vehicula felis accumsan lobortis. Sed eu feugiat purus. Nunc cursus neque ut orci placerat volutpat. Suspendisse potenti. Integer blandit mauris eget consectetur pretium" />}
            />
            <Route path='/Skills' render={ () => <Skills 
              header="Skills" 
              subHeader="What Can I Offer"/>}
            />
            <Route path='/Projects' component={Projects} />
            <Route path='/Blog' component={ () => <Blog header="From My Blog" description="Lorem Ipsum"/>} 
            />
          </Switch>
          </animated.div> 
       ))}
    </div>
  );
}

export default App;
