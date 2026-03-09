function Main() {
    return (
        <div>
            <h1>CorporaLuto</h1>
        </div>
    );
}
function Min() {
    let idade = 25;
    return <p>Idade: {idade}</p>;
}

function Home() {
    return(
        <div>
            <Main/>
            <Min/>
        </div>
    );
}

export default Home;