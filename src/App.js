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
    from:{ opacity:0, transform:"translate(100%,0)" },
    enter:{ opacity:1, transform:"translate(0%, 0)" },
    leave:{ opacity:0, transform:"translate(-50%,0)" }
  })
  return (
    <div className="App">
       <NavBar /> 
       { transition.map(({ item,props,key }) => (
          <animated.div key={ key } style={ props }>
            <Switch location={ item }>
            <Route exact path="/" render={ () => <Home 
              presentation="Ciao, my name is "
              name="davide cannerozzi" 
              jobOne="Front-end Developer"
              jobTwo="React Developer"
              jobThree="Freelance" 
              image={bulldogImage}
              info="Built with React.js + TailwindCSS"
              />
            } 
            />
            <Route path='/About' render={ () => <About 
              header="About Davide" 
              aboutMe="Ciao, I am Davide Cannerozzi, a front-end developer from Italy. My passion in web development started back in 2018.
              I also write about programming on my blog.
              Some of my passion:.
              I Currently work as a freelance but I am always open for new opportunities. so don't hesitate to contact me!!. I am open to relocate"
              subHeader="looking for a developer?"/>
            }
            />
            <Route path='/Skills' render={ () => <Skills 
              header="Skills" 
              subHeader="What I Can Offer"/>
            }
            />
            <Route path='/Projects' component={ () => <Projects 
              header="Projects"
              subHeader="Some Things I've Built"
            />} />
            <Route path='/Blog' component={ () => <Blog 
              header="From My Blog"
              link="All Articles" />
            } 
            />
          </Switch>
          </animated.div> 
       ))}
    </div>
  );
}

