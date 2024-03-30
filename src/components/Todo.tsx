export default function Todo({ todoText }: { todoText: string }) {
    return (
        <div>
            <input type="checkbox"></input> 
            <span>{todoText}</span>
        </div>
    );
}