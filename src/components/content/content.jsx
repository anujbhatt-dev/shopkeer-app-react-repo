import React ,{Component} from "react"
import Main from "./mains/main"
import Menu from "./menu/menu"


class Content extends Component{

    render(props){return(
<React.Fragment>
<Menu/>
<Main/>
</React.Fragment>
    )}

}

export default Content