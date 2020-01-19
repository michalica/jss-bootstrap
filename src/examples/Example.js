import React from 'react';
//  import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss'
import JSSBootstrap from "../jss-bootstrap";

const {
    bootstrapGrid: {
        container,
        row,
        colMd4,
    }
} = JSSBootstrap;

const colMd4Media = JSSBootstrap.bootstrapGrid["@media (min-width: 768px)"].colMd4;


const useStyles = createUseStyles({
    container,
    row,
    colMd4,
    colMd4Media,

});

const Example = ({}) => {
    const classes = useStyles();

    console.log(JSSBootstrap)
    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <div className={[classes.colMd4, classes.colMd4Media].join(" ")}>
                    COLUMN 1
                </div>
                <div className={[classes.colMd4, classes.colMd4Media].join(" ")}>
                    COLUMN 2
                </div>
                <div className={[classes.colMd4, classes.colMd4Media].join(" ")}>
                    COLUMN 3
                </div>
            </div>
        </div>
    );
};

//  Example.propTypes = {};

export default Example;
