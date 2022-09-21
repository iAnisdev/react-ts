import { UpdateComponent } from "./UpdateComponent";
import { counterProp } from "../../Types/counter.prop";

function Click(props: counterProp) {

    const { counter, UpdateCounter } = props

    return <>
        <p onMouseOver={UpdateCounter}>Hovered {counter} times</p>
    </>

}


export default UpdateComponent(Click)