import { Message } from "../../Type/type"

type Props = {
    id:number,
    text:string,
    DeleteItem(id: number): void,
    EditItem(Obj: Message): void,
}

export default function ToDo({ id, text, DeleteItem, EditItem }: Props) {
    return (
        <div style={{width:''}}>
            <div style={{ display: 'flex', alignItems: 'center', minWidth: '10%', maxWidth: '50%', justifyContent: 'space-between' }}>
                <h2>{id}</h2>
                <h3>{text}</h3>
                <button onClick={()=>DeleteItem(id)}>Delete</button>
                <button onClick={()=>EditItem({id, text})}>Edit</button>
            </div>
        </div>
    )
}