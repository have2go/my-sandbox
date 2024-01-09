export default function Popup(
    { isPopup, setIsPopup },
    { isPopup: boolean, setIsPopup: any }
) {
    return (
        <div className="absolute w-screen h-screen bg-black opacity-60" onClick={() => setIsPopup(!isPopup)}></div>
    );
}