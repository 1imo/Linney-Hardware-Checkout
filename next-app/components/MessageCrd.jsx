import classes from "./MessageCrd.module.css"

export default function MessageCrd(props) {
    return <div className={classes.crd}>
        <h2>{props.title}</h2>
        {props.data.map((item, key) => {
            return <div className={classes.message}>
               
                    <div className={classes.messageHeader}>
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt={`Message From ${item.sender}`} />
                        <div>
                            <h3>{item.sender}</h3>
                            <div>{item.organisation}</div>
                        </div>
                    </div>
                    <div className={classes.messageContent}>
                        {item.content}
                    </div>
            </div>
        
        })}
    </div>
}