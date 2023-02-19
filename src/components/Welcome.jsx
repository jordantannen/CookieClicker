import Sammy from "../img/sammy.jpeg"

export default function Welcome() {
    return (
        <>
            <div className="wrapper">
                <h1>Test</h1>
                <p>Test part two</p>
                <img src="Sammy" alt="Sammy" width={200} height={200}/>
            </div>
        </>
    )
}