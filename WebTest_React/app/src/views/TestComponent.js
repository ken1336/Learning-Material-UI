import React, {Component, Fragment} from 'react';
import MinSwitch from '../components/MinSwitch';
import MinButton from '../components/MinButton'
import MinTable from '../components/MinTable';



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