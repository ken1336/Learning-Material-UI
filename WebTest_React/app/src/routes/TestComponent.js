import React, {Component, Fragment} from 'react';
import MinSwitch from '../component/MinSwitch';
import MinButton from '../component/MinButton';
import MinTable from '../component/MinTable';



class Home extends Component{

    render() {
        return (
            <Fragment>
                <MinSwitch/>
                <MinButton/>
               
            </Fragment>

        );
    }
}

export default Home;