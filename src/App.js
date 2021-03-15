import React from 'react';
import { Route, useLocation, Switch } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import bulldogImage from './images/bulldog.png'

export default function App() {
  const location = useLocation()
  const transition = useTransition(location,location.pathname, {
    from:{opacity:0, transform:"translate(100%,0)"},
    enter:{opacity:1, transform:"translate(0%, 0)"},
    leave:{opacity:0, transform:"translate(-50%,0)"}
  })
  return (
    <div className="App">
       <NavBar /> 
       { transition.map(({item:location,props,key}) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
            <Route exact path="/" render={ () => <Home 
              presentation="Ciao, my name is "
              name="davide cannerozzi" 
              titleOne="Front-end Developer"
              titleTwo="Freelance"
              titleThree="React Developer" 
              image={bulldogImage}
              info="Built with React.js + TailwindCSS"
              />
            } 
            />
            <Route path='/About' render={ () => <About 
              title="About Davide" 
              aboutMe="Ciao, I am Davide Cannerozzi, a front-end developer get efficitur orci. Phasellus lacinia mauris turpis, sed vehicula felis accumsan lobortis. Sed eu feugiat purus. Nunc cursus neque ut orci placerat volutpat. Suspendisse potenti. Integer blandit mauris eget consectetur pretium"/>
            }
            />
            <Route path='/Skills' render={ () => <Skills 
              header="Skills" 
              subHeader="What I Can Offer"/>
            }
            />
            <Route path='/Projects' component={ () => <Projects 
              header="Projects"
              subHeader="Project for my clients,.... If you want to see more project that are not listed here check my Github"
            />} />
            <Route path='/Blog' component={ () => <Blog 
              header="From My Blog" />
            } 
            />
          </Switch>
          </animated.div> 
       ))}
    </div>
  );
}

