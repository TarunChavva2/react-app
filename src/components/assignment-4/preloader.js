import React from 'react';
import './assignment-4.css';
class Preloader extends React.Component {
    render() {
        return (
            <div>
            <div className="preloader-2">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                 <span className="line line-3"></span>
                <span className="line line-4"></span>
                <span className="line line-5"></span>
                <span className="line line-6"></span>
                <span className="line line-7"></span>
                <span className="line line-8"></span>
                <span className="line line-9"></span>
                <span className="line line-10"></span>
            </div>
            <div className="name">Loading</div>
        </div>
        );
    }
}
export default Preloader;
