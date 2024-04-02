export default function Todo({ todoText }: { todoText: string }) {
    return (
        <>
            <input id={todoText} type="checkbox"></input>
            <label></label>
            {todoText}
        </>
        
    );
}