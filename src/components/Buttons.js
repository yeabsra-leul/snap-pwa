import '../styles/buttons.css';

export default function ImageButton({image, cls, alt, children}) {
    const clsName = "btn btn__img " + cls

    return (
        <button className={clsName}>
            <img src={image} alt={alt} /> 
            {children}
        </button>
    )
}