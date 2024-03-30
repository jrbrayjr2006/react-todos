export default function Todo({ todoText }) {
    return (
        <div>
            <input type="checkbox"></input> 
            <span>{todoText}</span>
        </div>
    );
}