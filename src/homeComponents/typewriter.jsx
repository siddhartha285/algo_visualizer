import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="typer">
                <span className="badge badge-dark">
                <Typewriter
                    options={{
                        strings: [ 'Sorting Algorithms','Binary Search','Sieve of Eratosthenes'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;