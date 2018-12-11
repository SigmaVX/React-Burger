import React, {Component} from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import style from "./Layout.module.css";

class Layout extends Component {

    state={
        showSideDrawer: false,
    }

    toggleSideDrawer = ()=>{
        // Set State Based On Previous State
        // Needed As State Is Updating State
        this.setState((previousState)=>{
            return {showSideDrawer: !previousState.showSideDrawer}
        });
    }

    closeSideDrawer = ()=>{
        this.setState({showSideDrawer: false});
    }

    render(){
        return(
            <React.Fragment>
                <Toolbar toggleDrawer={this.toggleSideDrawer}/>
                <SideDrawer closeDrawer={this.closeSideDrawer} openDrawer={this.state.showSideDrawer}/>
                <main className={style.main}>{this.props.children}</main>
            </React.Fragment>
        )
    }
}

export default Layout;