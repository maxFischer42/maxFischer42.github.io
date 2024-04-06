export function ColoredLine(color, width) {
    return(
        <hr
        style={{
                color: color,
                backgroundColor: color,
                height: width,
        }} 
        />
    );
}