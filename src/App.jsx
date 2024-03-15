import { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {

    const [color, setColor] = useState("black");

    return (
        <div className={`bg-${color} w-full h-dvh`}>
            
            <div className="bg-transparent w-fit h-dvh p-1 fixed top-0 left-0 flex justify-center items-center sm:w-full sm:h-fit sm:bottom-10 sm:top-auto sm:inset-x-0 sm:py-1 sm:px-5">

                <div className="h-full w-fit p-2 flex flex-col justify-start items-stretch gap-4 overflow-y-scroll bg-white bg-opacity-35 backdrop-blur-xl sm:w-fit sm:min-h-14 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:overflow-auto sm:rounded-3xl">
                    
                    <ColorButton bgColor="red" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="green" textColor="black" setColor={setColor} />
                    <ColorButton bgColor="blue" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="white" textColor="black" setColor={setColor} />
                    <ColorButton bgColor="black" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="silver" textColor="black" setColor={setColor} />
                    <ColorButton bgColor="gray" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="maroon" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="yellow" textColor="black" setColor={setColor} />
                    <ColorButton bgColor="olive" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="aqua" textColor="black" setColor={setColor} />
                    <ColorButton bgColor="teal" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="navy" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="fachusia" textColor="white" setColor={setColor} />
                    <ColorButton bgColor="purple" textColor="white" setColor={setColor} />
                    
                </div>

            </div>

        </div>
    );
}

export default App;
