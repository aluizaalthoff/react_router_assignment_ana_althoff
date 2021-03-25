

import '../css/App.css';
import hayanne from '../images/hayanne/hayanne.png';



export default function About() {
  return (
    <div className="App">
      <main role="main">

        <section class="jumbotron project-jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading text-primary">About me</h1>
            <p class="lead text-primary">Wedding planner, mother, decor lover.</p>
            <p>
            </p>
          </div>
        </section>

        <div class="album py-5 bg-light">
          <div class="container">

            <div class="row">
              <div class="col-md-6">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src={hayanne} />
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-center">

                <p class="card-text">Quia dolora de volupta volorepere nit et accabo. Nectate vollupta digenihitiam asim fugiatur, que everit adio.Evenihil liquam dolupta in nis susdantem doleserro conseque omnimus.
Tet re veliquo quiati ium volo beaquo odit dunt fuga. Nam, ipit ipitate sciderum si ut aut ant anditiati oditempedici debit esequiat moluptatur sequame reri dit aut hiliqui blabo. Ad que labo. Et ilitintem acerfer uptaspe rspiendem eaquat as minulligent pliquun discim</p>



              </div>




            </div>
          </div>
        </div>

      </main>
    </div>
  );
}





