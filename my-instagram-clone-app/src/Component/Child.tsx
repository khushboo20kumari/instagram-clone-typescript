interface Props {
    name: string
    // <name:str></name:str>
}
const Child: React.FC<Props> = ({ name }) => {
    return (
        <>
            <p>{name}</p>
        </>
    )

}
export default Child;