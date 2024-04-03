const App = () => {
    return (
        <div>
            <h1>Welp. Looks empty in here.</h1>
            <h2>Have a cat.</h2>
            <img src="https://elmercio.com/wp-content/uploads/2015/07/gato-hacker-cat-computer-computadora.jpg" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);