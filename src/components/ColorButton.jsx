function ColorButton( { bgColor, textColor, setColor } ) {

    return (
        <button 
            onClick={() => { setColor(bgColor) }}
            className={`bg-${bgColor} text-${textColor} capitalize font-bold py-2 px-4 rounded-full shadow-lg shadow-black active:shadow-none`}
        >
            { bgColor }
        </button>
    );
}

export default ColorButton;