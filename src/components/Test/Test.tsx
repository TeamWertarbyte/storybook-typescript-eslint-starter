import React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import cx from 'classnames';

const styles = ({ palette, spacing }: Theme) =>
    createStyles({
        root: {},
    });

interface Props {
    className?: string;
}

const Test = ({ classes, className }: Props & WithStyles<typeof styles>) => {
    return <div className={cx(classes.root)}>fdfdfdfd</div>;
};

export default withStyles(styles)(Test);
