import { Link } from 'react-router-dom';

function HomePageView() {
    return(
        <div>
            <header>
                <h1>Four Against Darkness</h1>
            </header>
            <main>
                <div>
                    <h3>
                        <Link to="/player-sheet">Jogar campanha solo</Link>
                    </h3>
                </div>
                <div>
                    <h3>Jogar campanha acompanhado</h3>
                </div>
                <div>
                    <h3>
                        <Link to="/classes">Conhecer mais do jogo</Link>
                    </h3>
                </div>
            </main>
            <footer>
                <p>Desenvolvido por SarsDev@2022</p>
            </footer>
        </div>
    );
}

export default HomePageView;