import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './pages/Home.js'
import About from './pages/About.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import logo_hay from './images/hayanne/logo.png';

export default function App() {
  return (
    <Router>
      <div>
        <nav exact activeClassName="active" class="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapse_target">
          <img class="navbar-brand"src={logo_hay} />
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink exact={true} activeClassName="active-bold" class="mylinks" to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink exact={true} activeClassName="active-bold" class="mylinks" to="/about">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink exact={true} activeClassName="active-bold"  class="mylinks" to="/projects">Projects</NavLink>
              </li>
              <li class="nav-item">
                <NavLink exact={true} activeClassName="active-bold"  class="mylinks" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />

            </Route>
          </Switch>
        </main>


        <div class="container-fluid pb-0 mb-0 justify-content-center text-light bg-brand">
          <footer>
            <div class="row my-5 justify-content-center py-5">
              <div class="col-11">
                <div class="row ">
                  <div class="col-xl-4 col-md-4 col-sm-4 col-12 my-auto mx-auto a d-flex flex-column align-items-center">
                    <h3 class="text-muted mb-md-0 mb-5 bold-text">Hayanne Goston</h3>
                  </div>

                  <div class="col-xl-4 col-md-4 col-sm-4 col-12 d-flex flex-column align-items-center">
                    <h6 class="mb-3 mb-lg-4 bold-text d-flex flex-column align-items-center"><b>MENU</b></h6>
                    <ul class="list-unstyled d-flex flex-column align-items-center">
                      <li>
                        <a class="nav-link btn text-light" href="/">Home</a>
                      </li>
                      <li>
                        <a class="nav-link btn text-light" href="/about">About</a>
                      </li>
                      <li>
                        <a class="nav-link btn text-light" href="/projects">Projects</a>
                      </li>
                      <li>
                        <a class="nav-link btn text-light" href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-xl-4 col-md-4 col-sm-4 col-12 d-flex flex-column align-items-center">
                    <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5 d-flex flex-column align-items-center"><b>ADDRESS</b></h6>
                    <p class="mb-1 d-flex flex-column align-items-center">55, Rua das Laranjeiras, Rio de Janeiro - RJ Brasil</p>

                  </div>
                </div>
                <div class="row ">
                  <div class="col-xl-4 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end d-flex flex-column align-items-center">
                    <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span> &copy; 2021</span> Hayanne Goston All Rights Reserved.</small>
                  </div>
                  <div class="col-xl-4 col-md-4 col-sm-4 col-auto order-1 align-self-end d-flex flex-column align-items-center ">
                    <h6 class="mt-55 mt-2 text-muted bold-text"><b>email</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> hayannegoston.decor@gmail.com</small>
                  </div>
                  <div class="col-xl-4 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 d-flex flex-column align-items-center">
                    <h6 class="text-muted bold-text"><b>acessoria</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> acessoria_goston@gmail.com</small>
                  </div>
                </div>
              </div>
            </div>


          </footer>
        </div>
      </div>
    </Router>
  );
}





