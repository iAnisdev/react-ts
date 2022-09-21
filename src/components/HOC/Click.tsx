import { UpdateComponent } from "./UpdateComponent";
import { counterProp } from "../../Types/counter.prop";

function Click(props: counterProp) {

    const {counter, UpdateCounter}= props

    return <>
        <button onClick={UpdateCounter}>Clicked {counter} times</button>
    </>

}


export default UpdateComponent(Click)