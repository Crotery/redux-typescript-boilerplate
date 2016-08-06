/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

declare const require:(name:String) => any;

interface IHotModule {
    hot?:{ accept:(path:string, callback:() => void) => void };
}

declare const module:IHotModule;

class List extends React.Component<{lines:string[]}, {}> {
    public render():React.ReactElement<any> {
        return (
            <div className="list">
                {
                    this.props.lines.map(function(line, index){
                        return <div className="line">{line}</div>
                    })
                }
            </div>

        );
    }
}


class Main extends React.Component<{}, {line?:string, lines?:string[]}> {

    // constructor(){
    //     super()
    //    // this.change = this.change.bind(this)
    // }
    public state:{line?:string, lines?:string[]} = {
        lines: []
    };


    public add() {
        this.state.lines.push(this.state.line)
        this.setState({
            lines: this.state.lines
        })
    }

    public change(evt) {
        this.setState({
            line: evt.target.value
        })
    }

    public render():React.ReactElement<any> {

        return (
            <div>
                <form>
                    <input type="text" value={this.state.line} onChange={this.change.bind(this)}></input>
                    <button onClick={this.add.bind(this)}>Add</button>
                </form>

                <List lines={this.state.lines}/>
            </div>

        );
    }
}


ReactDOM.render(<Main />, document.getElementById('app'));
