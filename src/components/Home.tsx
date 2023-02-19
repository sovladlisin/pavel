import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { RootStore } from '../store';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const dispatch = useDispatch()

    return <>
        <p>Hi</p> 
    </>;
};

export default Home;
