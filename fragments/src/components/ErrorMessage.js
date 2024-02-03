const ErrorMessage = ({list}) =>{
    return(
        <>
        { list.length === 0 && <h3>i am still Hungry</h3>}
        </>
    );
};
export default ErrorMessage;