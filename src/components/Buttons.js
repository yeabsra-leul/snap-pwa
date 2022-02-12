import '../styles/buttons.css';

export default function ImageButton({image, cls, alt, onClick, children}) {
    const clsName = "btn btn__img " + cls

    return (
        <button className={clsName} onClick={onClick}>
            <img src={image} alt={alt} /> 
            {children}
        </button>
    )
}